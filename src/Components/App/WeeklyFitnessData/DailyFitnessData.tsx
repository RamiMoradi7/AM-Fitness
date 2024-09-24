import { useDailyEditableFields } from "../../../hooks/useDailyEditableFields";
import { DailyData, WeeklyFitnessData } from "../../../Models/FitnessData";
import EditableFields from "./EditableField";

type DailyFitnessDataProps = {
    weeklyFitnessId: string
    day: DailyData;
    index: number;
}

export default function DailyFitnessData({ weeklyFitnessId, day, index }: DailyFitnessDataProps): JSX.Element {
    const {
        fieldValue,
        setFieldValue,
        editingField,
        handleBlur,
        handleClick,
        handleKeyDown
    } = useDailyEditableFields({ weeklyFitnessId })

    return (
        <tr
            key={day._id}
            className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50`}
        >
            <td className="border bg-green-600 text-white border-gray-300 px-4 py-2 text-center">
                {new Date(day.date).toLocaleDateString("he-IL", {
                    weekday: "narrow",
                    day: "2-digit",
                    month: "2-digit"
                })}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center"
                onClick={() => handleClick(day?._id, "calories", day.calories)}>
                {editingField?._id === day?._id && editingField.field === 'calories' ? (
                    <EditableFields
                        fieldValue={fieldValue}
                        onChange={setFieldValue}
                        onBlur={handleBlur} onKeyDown={handleKeyDown}
                    />

                ) : (
                    day.calories
                )}</td>
            <td className="border border-gray-300 px-4 py-2 text-center"
                onClick={() => handleClick(day?._id, "protein", day.protein)}
            >{editingField?._id === day?._id && editingField.field === "protein" ? (
                <EditableFields
                    fieldValue={fieldValue}
                    onChange={setFieldValue}
                    onBlur={handleBlur} onKeyDown={handleKeyDown}
                />
            ) : (
                day.protein
            )
                }</td>
            <td className="border border-gray-300 px-4 py-2 text-center"
                onClick={() => handleClick(day?._id, "weight", day.weight)}>
                {editingField?._id === day?._id && editingField.field === "weight" ? (
                    <EditableFields
                        fieldValue={fieldValue}
                        onChange={setFieldValue}
                        onBlur={handleBlur} onKeyDown={handleKeyDown}
                    />
                ) : day.weight}</td>
            <td className="border border-gray-300 px-4 py-2 text-center"
                onClick={() => handleClick(day?._id, "steps", day.steps)}>
                {editingField?._id === day?._id && editingField.field === "steps" ? (
                    <EditableFields
                        fieldValue={fieldValue}
                        onChange={setFieldValue}
                        onBlur={handleBlur} onKeyDown={handleKeyDown}
                    />
                ) : day.steps}</td>
        </tr>
    )
}