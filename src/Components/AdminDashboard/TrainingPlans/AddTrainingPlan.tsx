import toast from "react-hot-toast";
import { useFetch } from "../../../hooks/useFetch";
import { TrainingPlan } from "../../../Models/TrainingPlan";
import { trainingPlansService } from "../../../Services/TrainingPlansService";
import { usersService } from "../../../Services/UsersService";
import TrainingPlanForm from "./TrainingPlanForm";
import { useNavigate } from "react-router-dom";

export default function AddTrainingPlan(): JSX.Element {
    const { data: users, status } = useFetch(usersService.getUsers);
    const navigate = useNavigate()
    const submitTrainingPlan = async (trainingPlan: TrainingPlan) => {
        try {
            await trainingPlansService.addTrainingPlan(trainingPlan);
            toast.success("התווסף בהצלחה");
            const userId = trainingPlan.user
            navigate(`/admin-dashboard/user/${userId}`)
        } catch (err: any) {
            const errMsg = err.response?.data || "נסה שנית מאוחר יותר.";
            toast.error(errMsg);
        }
    };

    return (
        <TrainingPlanForm
            mode="add"
            onSubmit={submitTrainingPlan}
            status={status}
            users={users} />
    );
}
