"use client";

import GlobalLoader from "@/components/Loaders/GlobalLoader";
import axios from "axios";
import { useEffect, useState } from "react";
import PageContent from "../PageContent";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

interface IVerifyResponse {
  user?: any;
  valid: boolean;
}

interface IConfirmAccountPageProps {
  params: { token: string };
}

export default function ConfirmAccountPage({
  params,
}: IConfirmAccountPageProps) {
  const { token } = params;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError("Token is missing");
      setLoading(false);
      return;
    }

    const verifyToken = async () => {
      try {
        const res = await axios.post(`${url}/auth/verify-oauth-token`, {
          token,
        });
        const data: IVerifyResponse = res.data;

        if (data.valid && data.user) {
          setUser(data.user);
        } else {
          setError("Invalid token or user not found");
        }
      } catch (error) {
        setError("Failed to verify token. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  if (loading) {
    return <GlobalLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return <PageContent user={user} />;
}
