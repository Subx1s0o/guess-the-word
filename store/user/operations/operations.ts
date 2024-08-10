import authService from "@/services/auth/auth.service";
import userService from "@/services/user/user.service";
import { ILogin, IRegister, IUser } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk<IUser, IRegister>(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = await authService.main("register", data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
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
      return thunkApi.rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  authService.logout();
});

export const checkAuth = createAsyncThunk<IUser>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await userService.getCurrentUser();
      return response;
    } catch (error: any) {
      await thunkApi.dispatch(logout());
      return thunkApi.rejectWithValue(
        error.response?.data || { message: "Check User failed" }
      );
    }
  }
);
