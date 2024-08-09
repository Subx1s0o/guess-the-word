import { RootState } from "@/store/store";

export const selectUser = (state: RootState) => state.user.user;
export const seletIsAuthorized = (state: RootState) =>
  state.user.isAuthenticated;
export const selectUserError = (state: RootState) => state.user.error;
