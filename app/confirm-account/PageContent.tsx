"use client";

import GlobalLoader from "@/components/Loaders/GlobalLoader";
import { useActions } from "@/hooks/useActions";
import { IGoogle } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IPageContentProps {
  user: IGoogle;
}

export default function PageContent({ user }: IPageContentProps) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { googleLogin } = useActions();

  useEffect(() => {
    window.history.replaceState({}, "", window.location.href);
    const handlePopState = () => {
      window.history.pushState({}, "", window.location.href);
      router.replace("/");
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      router.replace("/");
    };
  }, [router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await googleLogin({
        uid: user.uid,
        name: user.name,
        picture: user.picture,
        email: user.email,
        password,
      });
      router.replace("/");
    } catch (error) {
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <GlobalLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-container py-20 flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-5 lg:gap-10">
        <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-blue-800">
          {user.picture ? (
            <Image
              src={user.picture}
              alt={user.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <p className="text-center">{user.name.slice(0, 1)}</p>
          )}
        </div>
        <p className="text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Welcome <span className="font-semibold">{user.name}</span>!
        </p>
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            className="text-center w-52 md:w-72 md:text-xl h-10 rounded-lg border-2 shadow-button outline-none px-5 sm:w-96 lg:w-full sm:h-14 focus:placeholder-transparent"
            placeholder="Create password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
