import toast from "react-hot-toast"
import { Exercise } from "../../../Models/Exercise"
import { exerciseService } from "../../../Services/ExerciseService"
import ExercisesForm from "./ExercisesForm"
import { useNavigate } from "react-router-dom"


export default function AddExercise(): JSX.Element {
    const navigate = useNavigate()
    const addExercise = async (exercise: Exercise) => {
        try {
            await exerciseService.addExercise(exercise)
            toast.success(`${exercise.name} התווסף בהצלחהד`)
            navigate("/admin-dashboard/exercises")
        } catch (err: any) {
            const errMessage = err.response?.data || "Some error occurred"
            toast.error(errMessage)
        }
    }

    return (
        <ExercisesForm onSubmit={addExercise} />
    )
}
