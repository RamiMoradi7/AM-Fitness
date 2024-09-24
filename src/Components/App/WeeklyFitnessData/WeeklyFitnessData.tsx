import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { WeeklyFitnessData as IWeeklyFitnessData } from "../../../Models/FitnessData";
import { selectAuthState } from "../../../Redux/AuthSlice";
import { fitnessDataService } from "../../../Services/FitnessDataService";
import { formatDateHebrew } from "../../../Utils/DateFormat";
import { Status } from "../../../hooks/useFetch";
import Error from "../../Common/Error/Error";
import Loader from "../../Common/Loaders/Loader";
import SkeletonLoader from "../../Common/Loaders/SkeletonLoader";
import CalculateTotalButton from "./CalculateTotalButton";
import DailyFitnessData from "./DailyFitnessData";
import { IWeek } from "../../../Models/TrainingPlan";
import { setCurrentWeek } from "../../../Redux/TrainingPlansSlice";
import { appStore } from "../../../Redux/Store";
import { AppState } from "../../../Redux/AppState";

type WeeklyFitnessDataProps = {
    currentFitnessData?: IWeeklyFitnessData;
}

export default function WeeklyFitnessData({ currentFitnessData }: WeeklyFitnessDataProps): JSX.Element {
    const user = useSelector(selectAuthState).user;
    const [isCalculating, setIsCalculating] = useState(false)
    const currentWeek = useSelector((appState: AppState) => appState.trainingPlans.currentWeek)

    const calculateWeeklyTotal = async () => {
        setIsCalculating(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 750))
            const calculatedData = await fitnessDataService.calculateWeeklyData(currentFitnessData?._id);
            if (calculatedData) {

                const updatedWeek = {
                    ...currentWeek,
                    weeklyFitnessData: calculatedData
                }

                appStore.dispatch(setCurrentWeek(updatedWeek))
            }

        } catch (err: any) {
            const errMsg = err.response?.data || "נסה שנית מאוחר יותר";
            toast.error(errMsg);
        } finally {
            setIsCalculating(false)
        }
    };

    return (
        <>
            <div className=" bg-gray-100 rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">נתוני כושר שבועיים</h2>
                {currentFitnessData ? <>
                    <div className="mb-4 text-lg text-center">
                        <span>תאריך התחלה: </span>
                        <span className="font-semibold">{formatDateHebrew(currentFitnessData?.weekStartDate)}</span>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-gray-200 bg-white rounded-lg shadow-md">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">יום</th>
                                    <th className="border border-gray-300 px-4 py-2">קלוריות</th>
                                    <th className="border border-gray-300 px-4 py-2">חלבון (ג)</th>
                                    <th className="border border-gray-300 px-4 py-2">משקל (kg)</th>
                                    <th className="border border-gray-300 px-4 py-2">צעדים</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentFitnessData?.dailyData?.map((day, index) => (
                                    <DailyFitnessData
                                        key={day._id}
                                        weeklyFitnessId={currentFitnessData?._id}
                                        day={day}
                                        index={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
                        <h3 className="text-lg font-semibold mb-2">סיכום שבועי</h3>
                        {isCalculating ? <Loader /> :
                            <div className="grid grid-cols-2 gap-4">
                                <div> משקל (ממוצע) : <span className="font-semibold">{currentFitnessData?.averageWeight.toFixed(2)}</span></div>
                                <div>סך קלוריות שבועי: <span className="font-semibold">{currentFitnessData?.totalCalories}</span></div>
                                <div>סך חלבון שבועי: <span className="font-semibold">{currentFitnessData?.totalProtein}</span></div>
                                <div> צעדים: <span className="font-semibold">{currentFitnessData?.totalSteps}</span></div>
                            </div>}
                    </div>
                    <CalculateTotalButton
                        isLoading={isCalculating}
                        onCalculate={calculateWeeklyTotal} />
                </> :
                    <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-lg shadow-md border border-gray-300">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">לא נמצאו נתונים</h2>
                        <p className="text-lg text-gray-600">
                            {`${user?.firstName}, אין נתונים זמינים עבורך.`}
                        </p>
                        <div className="mt-4">
                            <svg
                                className="w-12 h-12 text-gray-400 animate-bounce"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M3 15h18"
                                />
                            </svg>
                        </div>
                    </div>

                }
            </div>
        </>
    );
}
