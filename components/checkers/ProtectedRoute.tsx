import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { TypeComponentAuthFields } from "../providers/auth/auth-page.types";

export default function ProtectedRoute({
  Component: { isNeededAuth },
  children,
}: PropsWithChildren<TypeComponentAuthFields>) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && isNeededAuth) {
      router.replace("/");
    }
  }, [user, isNeededAuth, router]);

  if (!user && isNeededAuth) {
    return null;
  }

  return <>{children}</>;
}
