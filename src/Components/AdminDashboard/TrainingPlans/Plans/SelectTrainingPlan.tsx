import { useTrainingPlan } from "../../../../hooks/useTrainingPlan";
import { User } from "../../../../Models/User";


type SelectTrainingPlanProps = {
    user: User
}
export default function SelectTrainingPlan({ user }: SelectTrainingPlanProps): JSX.Element {
    const { trainingPlanId, handlePlanChange } = useTrainingPlan({})

    return (
        <select
            onChange={(e) => {
                const { value } = e.target;
                if (value !== null && value.trim() !== "") {
                    handlePlanChange(value)
                }
            }}
            defaultValue={trainingPlanId || ""}
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
    )
}