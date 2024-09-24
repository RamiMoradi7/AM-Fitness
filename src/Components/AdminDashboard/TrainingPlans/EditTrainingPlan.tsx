import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { TrainingPlan } from "../../../Models/TrainingPlan";
import { trainingPlansService } from "../../../Services/TrainingPlansService";
import Error from "../../Common/Error/Error";
import Loader from "../../Common/Loaders/Loader";
import TrainingPlanForm from "./TrainingPlanForm";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../../Redux/AuthSlice";

export default function EditTrainingPlan(): JSX.Element {
    const { _id, weekId } = useParams<{ _id: string, weekId: string }>();
    const { data: trainingPlan, status } = useFetch(() => trainingPlansService.getTrainingPlan(_id), _id);
    const navigate = useNavigate();
    const { roleId } = useSelector(selectAuthState).user

    const editTrainingPlan = async (trainingPlan: Pick<TrainingPlan, "name" | "goal" | "durationInMonths" | "user">) => {
        try {
            const { firstName, _id: userId } = trainingPlan.user
            await trainingPlansService.editTrainingPlan(trainingPlan, weekId);
            toast.success(`תכנית האימונים של ${firstName} עודכנה בהצלחה.`);
            roleId === 1 ? navigate(`/admin-dashboard/user/${userId}`) :
                navigate(`/application`);

        } catch (error: any) {
            console.log(error)
            const errMsg = error.response?.data || "משהו השתבש, נסה שנית מאוחר יותר.";
            toast.error(errMsg);
        }
    };

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "error") {
        return <Error />;
    }

    return (
        <>
            {trainingPlan && (
                <div className="mt-14">
                    <TrainingPlanForm
                        mode="edit"
                        onSubmit={editTrainingPlan}
                        defaultValues={trainingPlan.trainingPlan}
                        weekIndex={weekId}
                    />
                </div>
            )}
        </>
    );
}
