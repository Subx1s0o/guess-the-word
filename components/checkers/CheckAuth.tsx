"use client";
import { useAuth } from "@/hooks/useAuth";
import Home from "@/pages/Home";
import WelcomePage from "@/pages/WelcomePage";

function CheckAuth() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Home />;
  } else {
    return <WelcomePage />;
  }
}

export default CheckAuth;
