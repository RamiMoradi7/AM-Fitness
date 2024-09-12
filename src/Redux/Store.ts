import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { authReducers } from "./AuthSlice";
import { trainingPlansReducer } from "./TrainingPlansSlice";

export const appStore = configureStore<AppState>({
  reducer: {
    auth: authReducers,
    trainingPlans: trainingPlansReducer,
  },
});
