import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TrainingPlan } from "../../../Models/TrainingPlan"
import { trainingPlansService } from "../../../Services/TrainingPlansService"
import Loader from "../../Common/Loader/Loader"
import TrainingPlanForm from "./TrainingPlanForm"
import toast from "react-hot-toast"

export default function EditTrainingPlan(): JSX.Element {
    const { _id } = useParams<{ _id: string }>()
    const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        trainingPlansService.getTrainingPlan(_id)
            .then((plan) => setTrainingPlan(plan))
            .catch((err: any) => console.error(err))
    }, [_id])

    const editTrainingPlan = async (trainingPlan: TrainingPlan) => {
        try {
            const { firstName, _id } = trainingPlan.user
            console.log(trainingPlan._id)
            await trainingPlansService.editTrainingPlan(trainingPlan)
            toast.success(`תכנית האימונים של ${firstName} עודכנה בהצלחה.`)
            navigate(`/admin-dashboard/user/${_id}`)


        } catch (error: any) {
            const errMsg = error.response?.data || "משהו השתבש, נסה שנית מאוחר יותר."
            toast.error(errMsg)
        }
    }

    return (<>{
        trainingPlan ?
            <TrainingPlanForm
                mode="edit"
                onSubmit={editTrainingPlan}
                defaultValues={trainingPlan}
            /> :
            <Loader />}
    </>)
}