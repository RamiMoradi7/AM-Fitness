import React, { useState } from "react";
import { Exercise } from "../../../../Models/Exercise";
import { SetDetails } from "../../../../Models/TrainingPlan";
import { useEditSetDetails } from "../../../../hooks/useEditSetDetails";
import EditableFields from "../../../App/WeeklyFitnessData/EditableField";

type ExerciseTableProps = {
    exerciseItem: {
        weekId: string
        exercise: Exercise;
        setDetails?: SetDetails[];
        _id?: string
    };
    isExpanded?: boolean;
    handleClick: () => void;
}

export default function ExerciseTable({ exerciseItem, isExpanded, handleClick }: ExerciseTableProps): JSX.Element {
    const { exercise, setDetails, _id, weekId } = exerciseItem;
    const { editingField, fieldValue, handleClickField, handleBlur, handleKeyDown, setFieldValue } = useEditSetDetails({ weekId })
    const handleRowClick = () => {
        handleClick();
    };

    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        handleClick();
    };

    return (
        <>
            {exercise && (
                <tbody key={exercise._id} className="bg-white divide-y divide-gray-200 ">
                    <tr className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={handleRowClick}>
                        <td className="px-6 py-4 text-right text-sm  bg-green-600 text-white">{exercise.name}</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.sets}</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.reps}</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.rest} שניות</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.weight || "טרם עודכן"}</td>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">
                            <button
                                className="text-blue-500 hover:underline"
                                onClick={handleButtonClick}
                            >
                                <i className="fa-solid fa-arrow-down text-green-500"></i>
                            </button>
                        </td>
                    </tr>
                    {isExpanded && (
                        <tr>
                            <td colSpan={6}>
                                <div className="p-4 bg-gray-100 border-t border-gray-300">
                                    <table className="lg:w-full border border-gray-300">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">סט</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">משקל</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">חזרות</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">רמת מאמץ</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {setDetails?.map((setDetail, setDetailIndex) => (
                                                <tr key={setDetail._id} className="hover:bg-gray-50 transition-colors duration-200">
                                                    <td className="px-4 py-3 text-right text-sm text-gray-700">{setDetailIndex + 1}</td>
                                                    <td
                                                        className="px-4 py-3 text-right text-sm text-gray-700 cursor-pointer"
                                                        onClick={() => handleClickField(setDetail?._id, "weight", setDetail.weight, _id)}
                                                    >
                                                        {editingField?._id === setDetail?._id && editingField.field === "weight" ? (
                                                            <EditableFields
                                                                fieldValue={fieldValue}
                                                                onBlur={handleBlur}
                                                                onChange={setFieldValue}
                                                                onKeyDown={handleKeyDown}
                                                            />
                                                        ) : (
                                                            <span className="font-semibold text-gray-800">{setDetail.weight}</span>
                                                        )}
                                                    </td>
                                                    <td
                                                        className="px-4 py-3 text-right text-sm text-gray-700 cursor-pointer"
                                                        onClick={() => handleClickField(setDetail?._id, "reps", setDetail.reps, _id)}
                                                    >
                                                        {editingField?._id === setDetail?._id && editingField.field === "reps" ? (
                                                            <EditableFields
                                                                fieldValue={fieldValue}
                                                                onBlur={handleBlur}
                                                                onChange={setFieldValue}
                                                                onKeyDown={handleKeyDown}
                                                            />
                                                        ) : (
                                                            <span className="font-semibold text-gray-800">{setDetail.reps}</span>
                                                        )}
                                                    </td>
                                                    <td
                                                        className="px-4 py-3 text-right text-sm text-gray-700 cursor-pointer"
                                                        onClick={() => handleClickField(setDetail?._id, "effortLevel", setDetail.effortLevel, _id)}
                                                    >
                                                        {editingField?._id === setDetail?._id && editingField.field === "effortLevel" ? (
                                                            <EditableFields
                                                                fieldValue={fieldValue}
                                                                fieldName="effortLevel"
                                                                onBlur={handleBlur}
                                                                onChange={setFieldValue}
                                                                onKeyDown={handleKeyDown}
                                                                max={10}
                                                                min={0}
                                                            />
                                                        ) : (
                                                            <span className="font-semibold text-gray-800">{setDetail.effortLevel}</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            )}
        </>
    );
}
