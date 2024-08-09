"use client";

import { useAuth } from "@/hooks/useAuth";
import GuestHeader from "../elements/Headers/GuestHeader";
import UserHeader from "../elements/Headers/UserHeader";

export default function CheckAuthHeader() {
  const { user, isAuthenticated } = useAuth();

  return isAuthenticated && user ? <UserHeader user={user} /> : <GuestHeader />;
}
