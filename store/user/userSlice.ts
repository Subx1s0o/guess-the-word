import { IUser } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations/operations";

interface UserState {
  user: IUser | null;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  isAuthenticated: false,
};

const handlePending = (state: UserState) => {
  state.error = null;
};

const handleRejected = (state: UserState, action: PayloadAction<any>) => {
  if (typeof action.payload === "string") {
    state.error = action.payload;
  } else if (action.payload && action.payload.message) {
    state.error = action.payload.message;
  } else {
    state.error = "An error occurred";
  }
  state.isAuthenticated = false;
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
      })
      .addCase(login.pending, handlePending)
      .addCase(login.rejected, handleRejected)
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.error = null;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default UserReducer.reducer;
