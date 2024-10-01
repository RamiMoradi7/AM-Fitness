import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../hooks/useFetch";
import { Day, IWeek, SetDetails, TrainingPlan } from "../Models/TrainingPlan";
import { GetTrainingPlanProps } from "../Services/TrainingPlansService";
import { Exercise } from "../Models/Exercise";

export interface TrainingPlansState {
  trainingPlans: Record<string, TrainingPlan>;
  totalPages: number;
  currentPage: number;
  weeks: Record<string, IWeek>;
  currentWeek: IWeek | null;
  status: Status;
}

const initialState: TrainingPlansState = {
  trainingPlans: {},
  totalPages: 1,
  currentPage: 1,
  weeks: {},
  currentWeek: null,
  status: null,
};

const trainingPlansSlice = createSlice({
  name: "trainingPlans",
  initialState,
  reducers: {
    initPlans(state, action: PayloadAction<GetTrainingPlanProps>) {
      const { trainingPlan, weeks, currentPage, totalPages } = action.payload;
      state.trainingPlans = {};
      state.weeks = {};
      state.status = "loading";
      state.trainingPlans[trainingPlan._id] = trainingPlan;
      state.currentPage = currentPage;
      weeks.forEach((week) => {
        state.weeks[week._id] = week;
      });
      state.totalPages = totalPages;

      state.status = "success";
    },

    updateSetDetails(
      state,
      action: PayloadAction<{
        weekId: string;
        exerciseId: string;
        updatedSetDetails: SetDetails;
      }>
    ) {
      const { weekId, exerciseId, updatedSetDetails } = action.payload;

      const updateExerciseSetDetails = (week: IWeek) => {
        return {
          ...week,
          days: week.days.map((day) => ({
            ...day,
            exercises: day.exercises.map((exercise) =>
              exercise._id === exerciseId
                ? {
                    ...exercise,
                    setDetails: exercise.setDetails.map((set) =>
                      set._id === updatedSetDetails._id
                        ? updatedSetDetails
                        : set
                    ),
                  }
                : exercise
            ),
          })),
        };
      };

      if (state.weeks[weekId]) {
        state.weeks[weekId] = updateExerciseSetDetails(state.weeks[weekId]);
      }

      if (state.currentWeek && state.currentWeek._id === weekId) {
        state.currentWeek = updateExerciseSetDetails(state.currentWeek);
      }
    },

    updateWeek(
      state,
      action: PayloadAction<{ weekId: string; updatedWeek: Partial<IWeek> }>
    ) {
      const { weekId, updatedWeek } = action.payload;
      state.weeks[weekId] = { ...state.weeks[weekId], ...updatedWeek };
    },

    setCurrentWeek(state, action: PayloadAction<IWeek>) {
      state.currentWeek = { ...state.currentWeek, ...action.payload };
    },

    updateDayInCurrentWeek(
      state,
      action: PayloadAction<{ dayId: string; updatedDay: Partial<Day> }>
    ) {
      const { dayId, updatedDay } = action.payload;

      if (!state.currentWeek || !state.currentWeek.weeklyFitnessData) {
        return;
      }

      const updatedDays = state.currentWeek.weeklyFitnessData.dailyData.map(
        (day) => (day._id === dayId ? { ...day, ...updatedDay } : day)
      );
      state.currentWeek = {
        ...state.currentWeek,
        weeklyFitnessData: {
          ...state.currentWeek.weeklyFitnessData,
          dailyData: updatedDays,
        },
      };
    },
    resetPlan(state) {
      state.trainingPlans = {};
      state.totalPages = 1;
      state.currentPage = 1;
      state.weeks = {};
      state.currentWeek = null;
      state.status = null;
    },
    deletePlan(state, action: PayloadAction<string>) {
      const planId = action.payload;
      delete state.trainingPlans[planId];
    },
  },
});

export const {
  initPlans,
  updateSetDetails,
  updateWeek,
  updateDayInCurrentWeek,
  setCurrentWeek,
  resetPlan,
  deletePlan,
} = trainingPlansSlice.actions;
export const trainingPlansReducer = trainingPlansSlice.reducer;
