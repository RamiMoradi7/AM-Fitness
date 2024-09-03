import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { exerciseService } from "../../../Services/ExerciseService";
import ExercisesForm from "./ExercisesForm";
import { Exercise } from "../../../Models/Exercise";
import toast from "react-hot-toast";
import Loader from "../../Common/Loader/Loader";
import Error from "../../Common/Error/Error";

export default function EditExercise(): JSX.Element {
    const { _id: exerciseId } = useParams<{ _id: string }>()
    const { data: exercise, status } = useFetch(() => exerciseService.getExercise(exerciseId))
    const navigate = useNavigate()


    const editExercise = async (exercise: Exercise) => {
        try {
            await exerciseService.editExercise(exercise)
            toast.success("התרגיל עודכן בהצלחה.")
            navigate("/admin-dashboard/exercises")
        } catch (err: any) {
            const errMsg = err.response?.data || "נסה מאוחר יותר."
            toast.error(errMsg)

        }
    }
    return (
        <>
            {status === "loading" && <Loader />}
            {status === "error" && <Error />}
            {exercise && <ExercisesForm onSubmit={editExercise} initialValue={exercise} />}
        </>)
}