import { Link } from "react-router-dom"
import { TrainingPlan } from "../../../Models/TrainingPlan"
import { useSelector } from "react-redux"
import { selectAuthState } from "../../../Redux/AuthSlice"
import toast from "react-hot-toast"
import { trainingPlansService } from "../../../Services/TrainingPlansService"

type TrainingPlansProps = {
    trainingPlans: TrainingPlan[]
}

export default function TrainingPlans({ trainingPlans }: TrainingPlansProps): JSX.Element {
    const { roleId } = useSelector(selectAuthState).user
    const isAdmin = roleId === 1;

    const handleDeletePlan = async (trainingPlanId: string) => {
        try {
            const sure = window.confirm("האם אתה בטוח?")
            if (!sure) return
            await trainingPlansService.deleteTrainingPlan(trainingPlanId);
            toast.success("תכנית האימונים נמחקה בהצלחה.");
        } catch (err: any) {
            const errMsg = err.response?.data || "המחיקה נכשלה, נסה שנית מאוחר יותר."
            toast.error(errMsg)
        }
    }

    return (
        <>
            <div className="space-y-6 flex flex-wrap justify-between">
                {trainingPlans?.map((plan, index) => (
                    <div key={index} className="p-2 w-full bg-white rounded-lg shadow-lg transition-transform transform hover:shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                            {isAdmin &&
                                <div className="flex space-x-2">
                                    <Link to={`/admin-dashboard/training-programs/edit/${plan._id}`}>
                                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">עריכה</button>
                                    </Link>
                                    <button onClick={() => handleDeletePlan(plan._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">מחיקה</button>
                                </div>
                            }
                        </div>
                        <p className="text-gray-700 mb-4">{plan.description}</p>
                        <div className="space-y-4">
                            {plan.days.map((day, dayIndex) => (
                                <div key={dayIndex} className="border-t border-gray-300 pt-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{day.dayOfWeek}</h3>
                                    <div className="overflow-x-auto">
                                        <table className="divide-y divide-gray-200 w-full">
                                            <thead className="bg-gray-100 border-b border-gray-300">
                                                <tr>
                                                    {["שם התרגיל", "סטים", "חזרות", "מנוחה", "משקלי עבודה", "RIR", "סט 1", "סט 2"]
                                                        .map((header) =>
                                                            <th key={header} className="px-6 py-3 text-right text-sm font-medium text-gray-600">{header}</th>
                                                        )}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {day.exercises.map((exercise, exerciseIndex) => (
                                                    <tr key={exerciseIndex} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 text-right text-sm text-gray-900">{exercise.name}</td>
                                                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.sets}</td>
                                                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.reps}</td>
                                                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.rest} שניות</td>
                                                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.weight || "טרם עודכן"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-sm text-gray-600 flex justify-between">
                            <span>מטרה: {plan.goal}</span>
                            <span>משך התכנית: {plan.duration} חודשים</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
