import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../Models/User";
import { AppState } from "./AppState";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;

export const selectAuthState = (state: AppState) => state.auth;
