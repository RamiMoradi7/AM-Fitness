import { Status } from "../../../hooks/useFetch"
import { useTrainingPlanForm } from "../../../hooks/useTrainingPlanForm"
import { TrainingPlan } from "../../../Models/TrainingPlan"
import { User } from "../../../Models/User"
import Input from "../../Auth/Input"
import DaySection from "./DaySection"
import FormActions from "./FormActions"
import UserSelect from "./UserSelect"

type TrainingPlanFormTypes = {
    defaultValues?: TrainingPlan
    weekIndex?: string
    users?: User[]
    onSubmit: (trainingPlan: TrainingPlan) => Promise<void>
    mode: "add" | "edit"
    status?: Status
}


export default function TrainingPlanForm({ defaultValues, onSubmit, status, users, mode }: TrainingPlanFormTypes): JSX.Element {
    const {
        appendDay,
        control,
        dayFields,
        filteredExercisesByDay,
        handleCategoryChange,
        handleSelectExercise,
        handleSubmit,
        isSubmitting,
        removeDay,
        removeExercise,
        selectedExercisesByDay
    } = useTrainingPlanForm(defaultValues)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-12">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-8 md:p-12">
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">{mode === "add" ? "יצירת תכנית אימונים" : "עריכת תכנית אימונים"}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                        {users && <UserSelect users={users} status={status} control={control} />}

                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 mt-2">שם התכנית</label>
                        <Input control={control} placeholder="שם התכנית" name="name" type="text" />

                        <label htmlFor="goal" className="block text-gray-700 font-semibold mb-2 mt-2">מטרת התכנית</label>
                        <Input control={control} placeholder="מטרה" name="goal" type="text" />

                        <label htmlFor="durationInMonths" className="block text-gray-700 font-semibold mb-2 mt-2">משך התכנית</label>
                        <Input
                            control={control}
                            name="durationInMonths"
                            min={1}
                            max={12}
                            placeholder="משך זמן (בחודשים)"
                            type="number"
                            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {mode === "add" && <>
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
                    </>}
                    <FormActions
                        onAppendDay={() => appendDay({ dayOfWeek: "", exercises: [] })}
                        isSubmitting={isSubmitting}
                    />
                </form>
            </div>
        </div>)
}