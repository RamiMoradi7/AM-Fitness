import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { Exercise } from "../../../Models/Exercise";
import { exerciseService } from "../../../Services/ExerciseService";
import { Link } from "react-router-dom";

export const exerciseCategories = ["גב", "כתפיים", "ידיים", "רגליים", "חזה", "ישבן"];

export default function Exercises(): JSX.Element {
    const [exercises, setExercises] = useState<Exercise[] | null>(null);

    const handleCategoryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        const { value: selectedCategory } = e.target;
        try {
            if (selectedCategory) {
                const exercises = await exerciseService.getExercisesByCategory(selectedCategory);
                setExercises(exercises);
            }
        } catch (err: any) {
            const errMsg = err.response?.data || "";
            toast.error(errMsg);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-xl mx-auto mb-8">
                <label htmlFor="category-select" className="block text-lg font-medium text-gray-700 mb-2">
                    בחר קטגוריה:
                </label>
                <select
                    id="category-select"
                    defaultValue={""}
                    onChange={handleCategoryChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                >
                    <option value="" disabled>בחר קטגוריה</option>
                    {exerciseCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {exercises && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.map((exercise) => (
                        <div
                            key={exercise._id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="p-6">
                                <Link to={`/admin-dashboard/exercises/edit/${exercise._id}`}>עריכה</Link>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{exercise.name}</h2>
                                <div className="flex flex-wrap justify-between mb-4">
                                    <div className="w-full sm:w-1/2">
                                        <p className="text-gray-600">
                                            <strong>סטים:</strong> {exercise.sets}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>חזרות:</strong> {exercise.reps}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>זמן מנוחה:</strong> {exercise.rest} שניות
                                        </p>
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <p className="text-gray-600">
                                            <strong>קטגוריה:</strong> {exercise.category}
                                        </p>
                                        {exercise.weight && (
                                            <p className="text-gray-600">
                                                <strong>משקל:</strong> {exercise.weight} ק"ג
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {exercise.notes && exercise.notes.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-700 mb-2">הערות</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                                            {exercise.notes.map((note, index) => (
                                                <li key={index}>{note.text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {!exercises && <p className="text-center text-gray-500 text-lg mt-8">
                לא נמצאו תרגילים בקטגוריה שנבחרה.
            </p>}
        </div>
    );
}
