import { useSelector } from "react-redux";
import { Status, useFetch } from "../../hooks/useFetch";
import { trainingPlansService } from "../../Services/TrainingPlansService";
import { selectAuthState } from "../../Redux/AuthSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import SkeletonLoader from "../Common/Loaders/SkeletonLoader";
import { DateRangeInput } from "./WeeklyFitnessData/DatePicker";
import { AppState } from "../../Redux/AppState";
import WeekDetails from "../AdminDashboard/TrainingPlans/Plans/WeekDetails";
import WeeklyFitnessData from "./WeeklyFitnessData/WeeklyFitnessData";
import NoResults from "../Common/NoResults/NoResults";
import { useTrainingPlan } from "../../hooks/useTrainingPlan";
import SelectTrainingPlan from "../AdminDashboard/TrainingPlans/Plans/SelectTrainingPlan";

export default function WeeklyFitnessSection(): JSX.Element {
    const { user } = useSelector(selectAuthState)
    const { isLoading: isFetchingData, trainingPlanId } = useTrainingPlan({ mode: "weeklyFitnessData" })
    const { currentWeek } = useSelector((appState: AppState) => appState.trainingPlans)
    const [fetchByDateStatus, setFetchByDateStatus] = useState<Status>("idle")

    if (isFetchingData) return <SkeletonLoader />

    const handleDateChange = async (start: Date | null, end: Date | null) => {
        setFetchByDateStatus("loading")
        try {
            await trainingPlansService.getPlanWeekByDateRange(user?._id, trainingPlanId, start, end)
            setFetchByDateStatus("success")
        } catch (err: any) {
            const errMsg = err.response?.data;
            toast.error(errMsg)
            setFetchByDateStatus("error")
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <h2 className="text-2xl font-thin text-gray-800 mb-4">התהליך השבועי שלי</h2>
                <SelectTrainingPlan user={user} />
                {trainingPlanId ?
                    <div className="w-full">
                        <DateRangeInput
                            onChange={handleDateChange}
                            defaultStartDate={currentWeek ? new Date(currentWeek.startDate) : new Date()}
                            defaultEndDate={currentWeek ? new Date(currentWeek.endDate) : new Date()}
                            status={fetchByDateStatus}
                        />
                    </div> : null}
            </div>
            {
                fetchByDateStatus === "loading" ? (
                    <SkeletonLoader />
                ) : trainingPlanId && currentWeek !== null ? (
                    <>
                        <WeekDetails week={currentWeek} weekIndex={1} />
                        <div className="mt-6 bg-gray-100 rounded-lg shadow">
                            <WeeklyFitnessData currentFitnessData={currentWeek.weeklyFitnessData} />
                        </div>
                    </>
                ) : (
                    <NoResults />
                )
            }
        </>)
}