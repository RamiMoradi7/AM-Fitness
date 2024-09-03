import toast from "react-hot-toast"
import { Exercise } from "../../../Models/Exercise"
import { exerciseService } from "../../../Services/ExerciseService"
import ExercisesForm from "./ExercisesForm"


export default function AddExercise(): JSX.Element {

    const addExercise = async (exercise: Exercise) => {
        try {
            await exerciseService.addExercise(exercise)
            toast.success("Added successfully.")
        } catch (err: any) {
            const errMessage = err.response?.data || "Some error occurred"
            toast.error(errMessage)
        }
    }

    return (
        <ExercisesForm onSubmit={addExercise} />
    )
}
