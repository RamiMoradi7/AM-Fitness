import toast from "react-hot-toast";
import { trainingPlansService } from "../../../../Services/TrainingPlansService";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../../../Redux/AuthSlice";

type PlanActionsProps = {
    trainingPlanId: string;
}


export default function PlanActions({ trainingPlanId }: PlanActionsProps): JSX.Element {
    const { roleId } = useSelector(selectAuthState).user;
    const isAdmin = roleId === 1;
    const navigate = useNavigate()

    const handleDeletePlan = async (trainingPlanId: string) => {
        try {
            const sure = window.confirm("האם אתה בטוח?");
            if (!sure) return;
            await trainingPlansService.deleteTrainingPlan(trainingPlanId);
            toast.success("תכנית האימונים נמחקה בהצלחה.");
            navigate(`/admin-dashboard/users`)
        } catch (err: any) {
            const errMsg = err.response?.data || "המחיקה נכשלה, נסה שנית מאוחר יותר.";
            toast.error(errMsg);
        }
    };

    return (
        <>
            {isAdmin && <div className="flex space-x-4">

                <button
                    onClick={() => handleDeletePlan(trainingPlanId)}
                    className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    <i className="fa fa-trash-alt mr-2"></i>
                    מחיקה
                </button>

                <Link to={`/admin-dashboard/training-plans/edit/${trainingPlanId}`}>
                    <button
                        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <i className="fa fa-edit mr-2"></i>
                        עריכה
                    </button>
                </Link>
            </div>}
        </>)
}