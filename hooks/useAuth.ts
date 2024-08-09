import { useTypedSelector } from "./useTypedSelector";

export const useAuth = () => {
  const { user, isAuthenticated } = useTypedSelector((state) => ({
    user: state.user.user,
    isAuthenticated: state.user.isAuthenticated,
  }));

  return { user, isAuthenticated };
};
