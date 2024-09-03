type FormActionsProps = {
    onAppendDay: () => void
    isSubmitting: boolean
}


export default function FormActions({ onAppendDay, isSubmitting }: FormActionsProps): JSX.Element {
    return (<div className="flex justify-between mt-6">
        <button
            type="button"
            onClick={onAppendDay}
            className="bg-green-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
            הוסף יום
        </button>
        <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
            {isSubmitting ? "שולח..." : "שלח"}
        </button>
    </div>)
}