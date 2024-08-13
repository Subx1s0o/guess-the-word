import ProtectedRoute from "@/components/checkers/ProtectedRoute";

export default function Page() {
  return (
    <ProtectedRoute Component={{ isNeededAuth: true }}>
      <div>standart</div>
    </ProtectedRoute>
  );
}
