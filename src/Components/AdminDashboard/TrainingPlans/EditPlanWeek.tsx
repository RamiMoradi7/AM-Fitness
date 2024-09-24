import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEditWeek } from "../../../hooks/useEditWeek";
import { useFetch } from "../../../hooks/useFetch";
import { IWeek } from "../../../Models/TrainingPlan";
import { trainingPlansService } from "../../../Services/TrainingPlansService";
import Loader from "../../Common/Loaders/Loader";
import DaySection from "./DaySection";
import FormActions from "./FormActions";

export default function EditPlanWeek(): JSX.Element {
    const { weekId } = useParams<{ weekId: string }>();
    const { data, status } = useFetch(() => trainingPlansService.getPlanWeek(weekId));
    const navigate = useNavigate()
    const {
        appendDay,
        isSubmitting,
        control,
        dayFields,
        filteredExercisesByDay,
        handleCategoryChange,
        handleSelectExercise,
        handleSubmit,
        removeDay,
        removeExercise,
        selectedExercisesByDay
    } = useEditWeek(data, weekId)


    const editPlanWeek = async (weekData: IWeek) => {
        try {
            await trainingPlansService.editTrainingPlanWeek(weekData._id, weekData);
            toast.success("Week updated successfully!");
            navigate(-1)
        } catch (err: any) {
            const errMsg = err.response?.data || "An error occurred";
            toast.error(errMsg);
            console.log(err);
        }
    };

    return (
        <>
            {status === "loading" ? (
                <Loader />
            ) : (
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-12">
                    <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-8 md:p-12">
                        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">עריכת שבוע {data?.weekNumber}</h2>
                        <form onSubmit={handleSubmit(editPlanWeek)} className="space-y-8">
                            {dayFields.map((dayField, index) =>
                                <DaySection
                                    key={dayField.id}
                                    control={control}
                                    dayIndex={index}
                                    exercises={filteredExercisesByDay[index]}
                                    handleCategoryChange={handleCategoryChange}
                                    handleSelectExercise={handleSelectExercise}
                                    onRemoveDay={() => removeDay(index)}
                                    removeExercise={removeExercise}
                                    selectedExercises={selectedExercisesByDay[index]}

                                />)}
                            <FormActions isSubmitting={isSubmitting} onAppendDay={() => appendDay({ dayOfWeek: "", exercises: [] })} />
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
