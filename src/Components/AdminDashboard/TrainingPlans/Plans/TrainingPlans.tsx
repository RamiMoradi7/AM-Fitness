import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useExpandReducer from "../../../../hooks/useExpandReducer";
import { TrainingPlan } from "../../../../Models/TrainingPlan";
import { selectAuthState } from "../../../../Redux/AuthSlice";
import { trainingPlansService } from "../../../../Services/TrainingPlansService";
import ExerciseTable from "./ExerciseTable";

type TrainingPlansProps = {
    trainingPlans: TrainingPlan[];
};


export default function TrainingPlans({ trainingPlans }: TrainingPlansProps): JSX.Element {
    const { roleId } = useSelector(selectAuthState).user;
    const isAdmin = roleId === 1;
    const [state, dispatch] = useExpandReducer()
    console.log(trainingPlans)
    const toggleWeekDetails = (weekIndex: string) => {
        dispatch({ type: "TOGGLE_WEEK", payload: { weekIndex } })
    }

    const toggleDayDetails = (weekIndex: string, dayIndex: string) => {
        dispatch({ type: "TOGGLE_DAY", payload: { weekIndex, dayIndex } })
    }

    const toggleExerciseSetDetails = (weekIndex: string, dayIndex: string, exerciseIndex: string) => {
        dispatch({ type: "TOGGLE_EXERCISE", payload: { weekIndex, dayIndex, exerciseIndex } })
    }

    const handleDeletePlan = async (trainingPlanId: string) => {
        try {
            const sure = window.confirm("האם אתה בטוח?");
            if (!sure) return;
            await trainingPlansService.deleteTrainingPlan(trainingPlanId);
            toast.success("תכנית האימונים נמחקה בהצלחה.");
        } catch (err: any) {
            const errMsg = err.response?.data || "המחיקה נכשלה, נסה שנית מאוחר יותר.";
            toast.error(errMsg);
        }
    };


    return (
        <>
            {trainingPlans?.map((plan, planIndex) => (
                <div key={planIndex} className="p-4 w-full bg-white rounded-lg shadow-lg transition-transform transform hover:shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                        {isAdmin && (
                            <div className="flex space-x-2">
                                <button onClick={() => handleDeletePlan(plan?._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">מחיקה</button>
                            </div>
                        )}
                    </div>
                    <p className="text-gray-700 mb-4">{plan.description}</p>
                    <div className="flex flex-col">
                        {plan.weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="border-t border-gray-300 pt-4">
                                <div key={weekIndex} className="border-t border-gray-300 pt-4 flex items-center justify-between">
                                    <div className="cursor-pointer flex-1 text-right ml-4" onClick={() => toggleWeekDetails(week._id)}>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {`שבוע ${week.weekNumber}`}
                                        </h3>
                                    </div>
                                    <Link to={`/training-programs/edit/${plan?._id}/week/${week._id}`}>
                                        <button className="bg-green-500 text-white  px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                                            <i className="fas fa-edit text-white"></i>
                                        </button>
                                    </Link>
                                </div>
                                {state.expandedWeek === week._id && (
                                    <div className="pl-4">
                                        {week.days.map((day) => (
                                            <div key={day._id} className="border-t border-gray-300 pt-4">
                                                <div className="cursor-pointer" onClick={() => toggleDayDetails(week._id, day._id)}>
                                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                        {day.dayOfWeek}
                                                    </h4>
                                                </div>
                                                {state.expandedDays[week._id]?.[day._id] && (
                                                    <div className="overflow-x-auto">
                                                        <table className="divide-y divide-gray-200 w-full">
                                                            <thead className="bg-gray-100 border-b border-gray-300">
                                                                <tr>
                                                                    {["שם התרגיל", "סטים", "חזרות", "מנוחה", "RIR", "טבלת התקדמות"]
                                                                        .map((header, index) =>
                                                                            <th key={index} className="px-6 py-3 text-right text-sm font-medium text-gray-600">{header}</th>
                                                                        )}
                                                                </tr>
                                                            </thead>
                                                            {day.exercises?.map((exc, exerciseIndex) => (
                                                                <ExerciseTable
                                                                    key={exerciseIndex}
                                                                    exerciseItem={exc}
                                                                    handleClick={() => toggleExerciseSetDetails(week._id, day._id, exc.exercise._id)}
                                                                    isExpanded={state.expandedExerciseDetails[`${week._id}-${day._id}-${exc.exercise._id}`]} />
                                                            ))}
                                                        </table>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
