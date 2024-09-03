import { useFieldArray, useForm } from "react-hook-form"
import { Exercise } from "../../../Models/Exercise"
import Input from "../../Auth/Input"
import { useEffect } from "react"

type ExercisesFormProps = {
    onSubmit: (exercise: Exercise) => Promise<void>
    initialValue?: Exercise

}

export default function ExercisesForm({ onSubmit, initialValue }: ExercisesFormProps): JSX.Element {
    const { handleSubmit, control, formState: { isSubmitting }, reset } = useForm<Exercise>()
    const { fields, append, remove } = useFieldArray({ control, name: "notes" })

    useEffect(() => {
        if (initialValue) {
            reset(initialValue)
        }
    }, [initialValue, reset])

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">יצירת תרגיל חדש</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">שם התרגיל</label>
                            <Input
                                control={control}
                                name="name"
                                placeholder="הכנס שם"
                                type="text"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">מספר סטים</label>
                            <Input
                                control={control}
                                name="sets"
                                placeholder="הכנס מספר סטים"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">מספר חזרות</label>
                            <Input
                                control={control}
                                name="reps"
                                placeholder="הכנס מספר חזרות"
                                type="number"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">זמן מנוחה (בשניות)</label>
                            <Input
                                control={control}
                                name="rest"
                                placeholder="הכנס זמן מנוחה"
                                type="number"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">קטגוריה</label>
                            <Input
                                control={control}
                                name="category"
                                placeholder="קטגוריה"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700">הערות</label>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-center space-x-4">
                                <Input
                                    control={control}
                                    name={`notes.${index}.text` as const}
                                    placeholder="הוסף הערה חדשה"
                                    type="text"
                                />
                                <button
                                    type="button"
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => remove(index)}
                                >
                                    הסר
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-sky-600 text-white rounded-full px-4 py-2 hover:bg-sky-700"
                            onClick={() => append({ text: "" })}
                        >
                            + הוסף הערה חדשה
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "שולח..." : "שלח"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}