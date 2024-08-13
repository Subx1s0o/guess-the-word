"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyTokenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = Cookies.get("auth-token");

      if (!token) {
        setError("No token found. Please log in again.");
        setLoading(false);
        router.replace("/");
        return;
      }

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-oauth-token`,
          { token }
        );

        if (response.status === 200) {
          setLoading(false);
        } else {
          setError("Token is invalid or expired. Please log in again.");
          Cookies.remove("auth-token");
          setLoading(false);
          router.replace("/");
        }
      } catch (error) {
        setError(
          "An error occurred while verifying the token. Please log in again."
        );
        Cookies.remove("auth-token");
        setLoading(false);
        router.replace("/");
      }
    };

    verifyToken();

    const handleBeforeUnload = () => {
      Cookies.remove("auth-token");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <>{children}</>;
}
