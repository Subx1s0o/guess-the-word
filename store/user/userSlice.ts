import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "./operations/operations";

import { toast } from "react-toastify";
interface UserState {
  user: IUser | null;
  error: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  isAuthenticated: false,
  isLoading: false,
};

const handlePending = (state: UserState) => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state: UserState, action: PayloadAction<any>) => {
  if (typeof action.payload === "string") {
    state.error = action.payload;
    toast.error(action.payload);
  } else if (action.payload && action.payload.message) {
    state.error = action.payload.message;
    toast.error(action.payload.message);
  } else {
    state.error = "An error occurred";
    toast.error("An error occurred");
  }
  state.isAuthenticated = false;
  state.isLoading = false;
};

const UserReducer = createSlice({
  name: "auth",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.error = null;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.error = null;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(getCurrentUser.rejected, (state, action: PayloadAction<any>) => {
        state.user = null;
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred";
        }
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export default UserReducer.reducer;
