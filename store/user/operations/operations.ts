import authService from "@/services/auth/auth.service";
import userService from "@/services/user/user.service";
import {
  IAuthResponse,
  IGoogle,
  ILogin,
  IRegister,
  IUser,
} from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk<IUser, IRegister>(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = await authService.main("register", data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || { message: "Registration failed" }
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
        error.response?.data?.message || { message: "Login failed" }
      );
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
  authService.logout();
});

export const getCurrentUser = createAsyncThunk<IUser>(
  "user/getCurrentUser",
  async (_, thunkApi) => {
    try {
      const response = await userService.getCurrentUser();
      return response;
    } catch (error: any) {
      await thunkApi.dispatch(logout());
      return thunkApi.rejectWithValue(
        error.response?.data.message || { message: "Check User failed" }
      );
    }
  }
);

export const googleLogin = createAsyncThunk<IUser, IGoogle>(
  "auth/google-login",
  async (data, thunkApi) => {
    try {
      const response = await authService.googleLogin(data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || { message: "Google Auth Failed" }
      );
    }
  }
);

export const googleAuth = createAsyncThunk<IUser, IAuthResponse>(
  "auth/google-auth",
  async (data, thunkApi) => {
    try {
      const response = await authService.googleAuth(data);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || { message: "Google Auth Failed" }
      );
    }
  }
);
