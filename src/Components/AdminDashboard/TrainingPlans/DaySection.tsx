import { Control } from "react-hook-form"
import { Exercise } from "../../../Models/Exercise"
import { TrainingPlan } from "../../../Models/TrainingPlan"
import Input from "../../Auth/Input"
import { DayWithExercise } from "../../../hooks/useTrainingPlanForm"

type DaySectionProps = {
    dayIndex: number
    control: Control<TrainingPlan>;
    onRemoveDay: () => void
    selectedExercises: DayWithExercise[];
    removeExercise: (excId: string, dayIndex: number) => void
    handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>, dayIndex: number) => Promise<void>
    exercises: Exercise[]
    handleSelectExercise: (exercise: Exercise, dayIndex: number) => void
}

const categories = ["גב", "כתפיים", "ידיים", "רגליים", "חזה", "ישבן"]

export default function DaySection({
    dayIndex,
    control,
    onRemoveDay,
    selectedExercises,
    removeExercise,
    handleCategoryChange,
    exercises,
    handleSelectExercise

}: DaySectionProps): JSX.Element {
    return (
        <div className="space-y-8">
            <div className="bg-white p-6 border border-gray-300 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-blue-600">יום {dayIndex + 1}</h3>
                    <button
                        type="button"
                        onClick={onRemoveDay}
                        className="text-red-500 hover:text-red-700 transition-colors"
                    >
                        הסר יום
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">יום בשבוע</label>
                        <Input
                            control={control}
                            name={`days[${dayIndex}].dayOfWeek`}
                            placeholder="יום בשבוע"
                            type="text"
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">תרגילים שנבחרו:</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedExercises?.map(({ exercise }) => (
                                    <div
                                        key={exercise._id}
                                        className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md hover:bg-gray-200 transition-colors duration-300"
                                    >
                                        <button
                                            onClick={() => removeExercise(exercise._id, dayIndex)}
                                            className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-300 focus:outline-none"
                                            aria-label={`Remove ${exercise.name}`}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                        <span className="text-gray-800 mr-2">{exercise.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">קטגוריה</label>
                        <select
                            onChange={(e) => handleCategoryChange(e, dayIndex)}
                            defaultValue={""}
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>בחר קטגוריה</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                        <label className="block text-lg font-medium text-gray-700 mt-4 mb-2">תרגילים</label>
                        <select
                            multiple
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {exercises?.map((exercise) => (
                                <option key={exercise._id} value={exercise._id} onClick={() => handleSelectExercise(exercise, dayIndex)}>
                                    {exercise.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}