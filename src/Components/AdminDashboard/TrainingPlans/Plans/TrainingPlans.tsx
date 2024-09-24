import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../../../Models/User";
import { AppState } from "../../../../Redux/AppState";
import { appStore } from "../../../../Redux/Store";
import { initPlans, resetPlan } from "../../../../Redux/TrainingPlansSlice";
import { trainingPlansService } from "../../../../Services/TrainingPlansService";
import SkeletonLoader from "../../../Common/Loaders/SkeletonLoader";
import Pagination from "./Pagination";
import PlanActions from "./PlanActions";
import WeekDetails from "./WeekDetails";

type TrainingPlanProps = {
    user: User
}

export default function TrainingPlans({ user }: TrainingPlanProps): JSX.Element {
    const { trainingPlans, weeks, totalPages } = useSelector((appState: AppState) => appState.trainingPlans);
    const [page, setPage] = useState(1)
    const [selectedPlanId, setSelectedPlanId] = useState(() => {
        const savedPlan = sessionStorage.getItem("trainingPlan")
        return savedPlan ? savedPlan : ""
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchTrainingPlan = async () => {
            if (selectedPlanId) {
                try {
                    setIsLoading(true);
                    window.scrollTo({ top: 2, behavior: "smooth" });
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    const plan = await trainingPlansService.getTrainingPlan(selectedPlanId, page);

                    const planExistsForUser = user?.trainingPlans.some((plan) => plan._id === selectedPlanId);
                    if (planExistsForUser) {
                        appStore.dispatch(initPlans(plan));
                    } else {
                        appStore.dispatch(resetPlan());
                    }
                } catch (err) {
                    console.log(err);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchTrainingPlan();
    }, [selectedPlanId, page, user?.trainingPlans]);

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    if (isLoading) return <SkeletonLoader />

    return (
        <>
            <select
                onChange={(e) => {
                    const { value } = e.target;
                    if (value !== null && value.trim() !== "") {
                        setPage(1);
                        setSelectedPlanId(e.target.value);
                        sessionStorage.setItem("trainingPlan", value);
                    }
                }}
                defaultValue={selectedPlanId || ""}
                className="block w-full p-4 pr-10 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 ease-in-out transform hover:shadow-lg"
            >
                <option value={""} disabled className="bg-gray-200 text-gray-500">
                    בחר תכנית אימון
                </option>
                {user?.trainingPlans.map((trainingPlan) => (
                    <option key={trainingPlan._id} value={trainingPlan._id} className="bg-white text-gray-800 hover:bg-green-100">
                        {trainingPlan.name}
                    </option>
                ))}
            </select>


            {trainingPlans &&
                Object.values(trainingPlans).map((plan, planIndex) => (
                    <div
                        key={planIndex}
                        className="mt-4 p-4 w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform  duration-200 ease-in-out mb-6"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
                            <div className="flex-1 text-right">
                                <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold text-green-600">מטרה:</span> {plan.goal}
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold text-green-600">משך התכנית:</span> {plan.durationInMonths} חודשים.
                                </p>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <PlanActions trainingPlanId={plan?._id} />
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{plan.description}</p>

                        <div className="flex flex-col space-y-4">
                            {plan.weeks.map((week, weekIndex) => (
                                weeks[week._id] ? (
                                    <WeekDetails
                                        week={weeks[week._id]}
                                        weekIndex={weekIndex}
                                        key={week._id}
                                    />
                                )
                                    : null
                            ))}
                        </div>
                    </div >
                ))
            }

            {totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
        </>

    );
}
