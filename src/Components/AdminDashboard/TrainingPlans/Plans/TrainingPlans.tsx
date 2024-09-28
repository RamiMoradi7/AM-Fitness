import { useSelector } from "react-redux";
import { useTrainingPlan } from "../../../../hooks/useTrainingPlan";
import { AppState } from "../../../../Redux/AppState";
import SkeletonLoader from "../../../Common/Loaders/SkeletonLoader";
import Pagination from "./Pagination";
import PlanActions from "./PlanActions";
import SelectTrainingPlan from "./SelectTrainingPlan";
import WeekDetails from "./WeekDetails";
import { User } from "../../../../Models/User";

type TrainingPlansProps = {
    user: User
}

export default function TrainingPlans({ user }: TrainingPlansProps): JSX.Element {
    const { trainingPlans, weeks, totalPages } = useSelector((appState: AppState) => appState.trainingPlans);
    const { page, isLoading, handlePageChange } = useTrainingPlan({ mode: "trainingPlans" })

    if (isLoading) return <SkeletonLoader />

    return (
        <>
            <SelectTrainingPlan user={user} />
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
