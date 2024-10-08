import ProtectedRoute from "@/components/checkers/ProtectedRoute";
import Profile from "@/components/Pages/Profile";

export default function Page() {
  return (
    <ProtectedRoute Component={{ isNeededAuth: true }}>
      <Profile />
    </ProtectedRoute>
  );
}
