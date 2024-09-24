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

export default function WeeklyFitnessSection(): JSX.Element {
    const { _id: userId, trainingPlans: userTrainingPlans } = useSelector(selectAuthState).user
    const hasTrainingPlans = userTrainingPlans?.length > 0;
    const { status } = useFetch(() => hasTrainingPlans ? trainingPlansService.getCurrentWeeklyData(userId) : null);
    const { currentWeek } = useSelector((appState: AppState) => appState.trainingPlans)
    const [fetchByDateStatus, setFetchByDateStatus] = useState<Status>("idle")



    if (status === "loading") {
        return <SkeletonLoader />
    }

    const handleDateChange = async (start: Date | null, end: Date | null) => {
        setFetchByDateStatus("loading")
        try {
            await trainingPlansService.getPlanWeekByDateRange(userId, start, end)
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
                {userTrainingPlans.length > 0 ?
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
                ) : currentWeek && currentWeek !== null ? (
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