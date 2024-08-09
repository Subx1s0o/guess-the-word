import authService from "@/services/auth/auth.service";
import { ILogin, IRegister, IUser } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk<IUser, IRegister>(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = await authService.main("register", data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || "Registration failed");
    }
  }
);

export const login = createAsyncThunk<IUser, ILogin>(
  "auth/login",
  async (data, thunkApi) => {
    try {
      const response = await authService.main("login", data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message || "Login failed");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  authService.logout();
});
