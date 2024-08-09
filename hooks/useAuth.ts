import {
  selectIsAuthenticated,
  selectIsLoading,
  selectUser,
  selectUserError,
} from "@/store/user/selectors/selectors";
import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => {
  const user = useTypedSelector(selectUser);
  const isAuthenticated = useTypedSelector(selectIsAuthenticated);
  const error = useTypedSelector(selectUserError);
  const isLoading = useTypedSelector(selectIsLoading);
  return { user, isAuthenticated, error, isLoading };
};
