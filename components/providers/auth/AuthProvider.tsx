"use client";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { TypeComponentAuthFields } from "./auth-page.types";
import { useAuth } from "@/hooks/useAuth";

const DynamicProtectedComponent = dynamic(
  () => import("@/components/checkers/ProtectedRoute"),
  { ssr: false }
);

export default function AuthProvider({
  Component: { isNeededAuth },
  children,
}: PropsWithChildren<TypeComponentAuthFields>) {
  const { user } = useAuth();

  return <div>AuthProvider</div>;
}
