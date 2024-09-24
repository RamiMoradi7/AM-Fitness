type EditableFieldsProps = {
    fieldValue: string | number;
    fieldName?: string
    onChange: (value: number) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onBlur: () => void;
    min?: number;
    max?: number
}

export default function EditableFields({ fieldValue, fieldName, onChange, onKeyDown, onBlur, min, max }: EditableFieldsProps): JSX.Element {

    return (
        <>
            <input
                type="number"
                value={fieldValue}
                min={min || 1}
                onChange={(e) => {
                    const value = Number(e.target.value)
                    if (fieldName === "effortLevel") {
                        if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
                            return
                        }
                    }
                    onChange(value)
                }}
                onKeyDown={onKeyDown}
                required
                onBlur={onBlur}
                className="border p-1"
                autoFocus
            />

        </>)
}