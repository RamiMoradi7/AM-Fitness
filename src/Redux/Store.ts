import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./AppState";
import { authReducers } from "./AuthSlice";

export const appStore = configureStore<AppState>({
  reducer: {
    auth: authReducers,
  },
});
