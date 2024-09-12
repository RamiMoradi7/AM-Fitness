import { useReducer } from "react";

type ExpandAction =
  | { type: "TOGGLE_WEEK"; payload: { weekIndex: string } }
  | { type: "TOGGLE_DAY"; payload: { weekIndex: string; dayIndex: string } }
  | {
      type: "TOGGLE_EXERCISE";
      payload: { weekIndex: string; dayIndex: string; exerciseIndex: string };
    };

type ExpandedState = {
  expandedWeek: string | null;
  expandedDays: { [weekIndex: string]: { [dayIndex: string]: boolean } };
  expandedExerciseDetails: { [key: string]: boolean };
};

const initialState: ExpandedState = {
  expandedWeek: null,
  expandedDays: {},
  expandedExerciseDetails: {},
};

const expandReducer = (
  state: ExpandedState,
  action: ExpandAction
): ExpandedState => {
  switch (action.type) {
    case "TOGGLE_WEEK":
      return {
        ...state,
        expandedWeek:
          state.expandedWeek === action.payload.weekIndex
            ? null
            : action.payload.weekIndex,
        expandedDays: {},
      };
    case "TOGGLE_DAY":
      const { weekIndex, dayIndex } = action.payload;
      return {
        ...state,
        expandedDays: {
          ...state.expandedDays,
          [weekIndex]: {
            ...state.expandedDays[weekIndex],
            [dayIndex]: !state.expandedDays[weekIndex]?.[dayIndex],
          },
        },
      };
    case "TOGGLE_EXERCISE":
      const { exerciseIndex } = action.payload;
      const key = `${action.payload.weekIndex}-${action.payload.dayIndex}-${exerciseIndex}`;
      return {
        ...state,
        expandedExerciseDetails: {
          ...state.expandedExerciseDetails,
          [key]: !state.expandedExerciseDetails[key],
        },
      };
    default:
      return state;
  }
};

const useExpandReducer = () => {
  return useReducer(expandReducer, initialState);
};

export default useExpandReducer;
