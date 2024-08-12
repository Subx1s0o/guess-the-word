"use client";
import { useAuth } from "@/hooks/useAuth";
import Home from "@/MyPages/Home";
import WelcomePage from "@/MyPages/WelcomePage";

function CheckAuth() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Home />;
  } else {
    return <WelcomePage />;
  }
}

export default CheckAuth;
