import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../hooks/useFetch";
import { IWeek, SetDetails, TrainingPlan } from "../Models/TrainingPlan";

export interface TrainingPlansState {
  trainingPlans: Record<string, TrainingPlan>;
  status: Status;
}

const initialState: TrainingPlansState = {
  trainingPlans: {},
  status: null,
};

const trainingPlansSlice = createSlice({
  name: "trainingPlans",
  initialState,
  reducers: {
    initPlans(state, action: PayloadAction<TrainingPlan[]>) {
      console.log(action.payload);
      state.trainingPlans = {};
      state.status = "loading";

      action.payload.forEach((plan) => {
        state.trainingPlans[plan._id] = plan;
      });

      state.status = "success";
    },

    updateSetDetails(state, action: PayloadAction<SetDetails>) {
      const updatedSetDetails = action.payload;
      Object.values(state.trainingPlans).forEach((plan) => {
        plan.weeks.forEach((week) => {
          week.days.forEach((day) => {
            day.exercises.forEach((exerciseEntry) => {
              if (exerciseEntry.setDetails) {
                exerciseEntry.setDetails.forEach((setDetail) => {
                  if (setDetail._id === updatedSetDetails._id) {
                    Object.assign(setDetail, updatedSetDetails);
                  }
                });
              }
            });
          });
        });
      });
    },

    updateWeek(
      state,
      action: PayloadAction<{ weekId: string; updatedWeek: Partial<IWeek> }>
    ) {
      const { weekId, updatedWeek } = action.payload;
      if (state.trainingPlans) {
        Object.values(state.trainingPlans).forEach((plan) => {
          plan.weeks.forEach((week) => {
            if (week._id === weekId) {
              Object.assign(week, updatedWeek);
            }
          });
        });
      }
    },
    deletePlan(state, action: PayloadAction<string>) {
      const planId = action.payload;
      if (state.trainingPlans[planId]) {
        delete state.trainingPlans[planId];
      }
    },
  },
});

export const { initPlans, updateSetDetails, updateWeek,deletePlan } =
  trainingPlansSlice.actions;
export const trainingPlansReducer = trainingPlansSlice.reducer;
