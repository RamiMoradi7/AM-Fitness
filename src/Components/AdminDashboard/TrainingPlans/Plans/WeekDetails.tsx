import { Link } from "react-router-dom";
import ExerciseTable from "./ExerciseTable";
import { IWeek } from "../../../../Models/TrainingPlan";
import useExpandReducer from "../../../../hooks/useExpandReducer";
import { formatDateHebrew } from "../../../../Utils/DateFormat";

type WeekDetailsProps = {
    week: IWeek
    weekIndex: number
}


export default function WeekDetails({ week, weekIndex }: WeekDetailsProps): JSX.Element {
    const [state, dispatch] = useExpandReducer()

    const toggleWeekDetails = (weekIndex: string) => {
        dispatch({ type: "TOGGLE_WEEK", payload: { weekIndex } })
    }

    const toggleDayDetails = (weekIndex: string, dayIndex: string) => {
        dispatch({ type: "TOGGLE_DAY", payload: { weekIndex, dayIndex } })
    }

    const toggleExerciseSetDetails = (weekIndex: string, dayIndex: string, exerciseIndex: string) => {
        dispatch({ type: "TOGGLE_EXERCISE", payload: { weekIndex, dayIndex, exerciseIndex } })
    }

    const { expandedDays, expandedExerciseDetails, expandedWeek } = state

    return (<>

        <div key={weekIndex} className="border-t border-gray-200 pt-4">
            <div
                onClick={() => toggleWeekDetails(week._id)}
                className="cursor-pointer flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
                <div className="flex-1 text-right">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {`שבוע ${week.weekNumber}`}
                        <Link to={`/training-programs/edit/${week?.trainingPlan}/week/${week._id}`} >
                            <button className="mr-2 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-colors duration-300"
                            >
                                עריכה
                            </button>
                        </Link>
                    </h3>
                    <p className="text-md ">
                        <span className="font-semibold text-green-600">התחלה:</span> {formatDateHebrew(week?.startDate)}
                    </p>
                    <p className="text-md ">
                        <span className="font-semibold text-green-600">סוף:</span> {formatDateHebrew(week?.endDate)}
                    </p>
                </div>
                <button
                    className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition-colors duration-300"
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleWeekDetails(week._id);
                    }}                >
                    <i
                        className={`fas ${expandedWeek === week._id ? "fa-chevron-up" : "fa-chevron-down"} transition-transform duration-300 ${expandedWeek === week._id ? "" : ""}`}
                    ></i>                </button>
            </div>

            {
                expandedWeek === week._id && (
                    <div className="pl-4">
                        {week.days.map((day) => (
                            <div key={day._id} className="border-t border-gray-200 pt-4">
                                <div
                                    className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                    onClick={() => toggleDayDetails(week._id, day._id)}
                                >
                                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                        {day.dayOfWeek}
                                    </h4>
                                </div>

                                {expandedDays[week._id]?.[day._id] && (
                                    <div className="overflow-x-auto">
                                        <table className="divide-y divide-gray-200 w-full">
                                            <thead className="bg-green-600 text-white">
                                                <tr>
                                                    {["שם התרגיל", "סטים", "חזרות", "מנוחה", "RIR", "טבלת התקדמות"].map(
                                                        (header, index) => (
                                                            <th
                                                                key={index}
                                                                className="px-4 py-2 text-right text-sm font-medium "
                                                            >
                                                                {header}
                                                            </th>
                                                        )
                                                    )}
                                                </tr>
                                            </thead>
                                            {day.exercises?.map((exc, exerciseIndex) => (
                                                <ExerciseTable
                                                    key={exerciseIndex}
                                                    exerciseItem={{ ...exc, weekId: week._id }}
                                                    handleClick={() =>
                                                        toggleExerciseSetDetails(
                                                            week._id,
                                                            day._id,
                                                            exc.exercise._id
                                                        )
                                                    }
                                                    isExpanded={
                                                        expandedExerciseDetails[
                                                        `${week._id}-${day._id}-${exc.exercise._id}`
                                                        ]
                                                    }
                                                />
                                            ))}
                                        </table>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    </>)
}