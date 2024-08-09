import { RootState } from "@/store/store";
import { createSelector } from "reselect";

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  [selectUserState],
  (userState) => userState.user
);

export const selectIsAuthenticated = createSelector(
  [selectUserState],
  (userState) => userState.isAuthenticated
);

export const selectUserError = createSelector(
  [selectUserState],
  (userState) => userState.error
);

export const selectIsLoading = createSelector(
  [selectUserState],
  (userState) => userState.isLoading
);
