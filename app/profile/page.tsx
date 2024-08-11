"use client";
import ProtectedRoute from "@/components/checkers/ProtectedRoute";

import Profile from "@/pages/Profile";
export default function page() {
  return (
    <ProtectedRoute Component={{ isNeededAuth: true }}>
      <Profile />
    </ProtectedRoute>
  );
}
