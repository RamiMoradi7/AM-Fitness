import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { User } from "../Models/User";
import { AppState } from "./AppState";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

export const selectAuthState = (state: AppState) => state.auth;
