import React, { useState } from "react";
import { Exercise } from "../../../../Models/Exercise";
import { SetDetails } from "../../../../Models/TrainingPlan";
import SetDetailsForm from "./SetDetailsForm";

type ExerciseTableProps = {
    exerciseItem: {
        exercise: Exercise;
        setDetails?: SetDetails[];
    };
    isExpanded?: boolean;
    handleClick: () => void;
}

export default function ExerciseTable({ exerciseItem, isExpanded, handleClick }: ExerciseTableProps): JSX.Element {
    const { exercise, setDetails = [] } = exerciseItem;
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Handle click on the row
    const handleRowClick = () => {
        handleClick();
    };

    // Handle click on buttons inside the row
    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        handleClick(); // or other button-specific logic
    };

    return (
        <>
            {exercise && (
                <tbody key={exercise._id} className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={handleRowClick}>
                        <td className="px-6 py-4 text-right text-sm text-gray-600">{exercise.name}</td>
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
                                    <table className="w-full">
                                        <thead className="bg-gray-200">
                                            <tr>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">סט</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">משקל</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">חזרות</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">רמת מאמץ</th>
                                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">פעולות</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {setDetails.map((setDetail, setDetailIndex) => (
                                                <React.Fragment key={setDetailIndex}>
                                                    {editIndex === setDetailIndex ? (
                                                        <tr className="bg-gray-200">
                                                            <td colSpan={5}>
                                                                <SetDetailsForm setDetails={setDetails} editIndex={editIndex} setEditIndex={setEditIndex} />
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        <tr>
                                                            <td className="px-4 py-2 text-right text-sm text-gray-600">{setDetailIndex + 1}</td>
                                                            <td className="px-4 py-2 text-right text-sm text-gray-600">{setDetail.weight}</td>
                                                            <td className="px-4 py-2 text-right text-sm text-gray-600">{setDetail.reps}</td>
                                                            <td className="px-4 py-2 text-right text-sm text-gray-600">{setDetail.effortLevel}</td>
                                                            <td className="px-4 py-2 text-right text-sm text-gray-600">
                                                                <button
                                                                    className="text-blue-500 hover:underline"
                                                                    onClick={() => setEditIndex(setDetailIndex)}
                                                                >
                                                                    ערוך
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
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
