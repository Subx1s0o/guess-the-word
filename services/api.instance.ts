import axios from "axios";
import AuthHelpers from "./auth/auth.helpers";
import authService from "./auth/auth.service";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = AuthHelpers.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        await authService.getNewAccessToken();
        const accessToken = AuthHelpers.getAccessToken();
        if (accessToken) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (err) {
        console.error("Error in token refresh:", err);
        AuthHelpers.removeFromStorage();
      }
    }

    throw error;
  }
);

export default api;
