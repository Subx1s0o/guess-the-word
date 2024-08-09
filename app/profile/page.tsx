import ProtectedRoute from "@/components/checkers/ProtectedRoute";

export default function page() {
  return (
    <ProtectedRoute Component={{ isNeededAuth: true }}>
      <div>profile</div>
    </ProtectedRoute>
  );
}
