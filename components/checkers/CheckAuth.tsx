"use client";
import { useAuth } from "@/hooks/useAuth";
import Home from "../Pages/Home";
import WelcomePage from "../Pages/WelcomePage";
function CheckAuth() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Home />;
  } else {
    return <WelcomePage />;
  }
}

export default CheckAuth;
