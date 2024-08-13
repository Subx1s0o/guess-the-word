"use client";

import VerifyTokenProvider from "@/components/providers/auth/VerifyTokenProvider";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ConfirmAccountPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const photo = searchParams.get("photo") || "";

  return (
    <VerifyTokenProvider>
      <div>
        <p>{name.replace("+", " ")}</p>
        {photo ? (
          <Image
            src={photo}
            alt={name.replace("+", " ")}
            width={500}
            height={500}
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
    </VerifyTokenProvider>
  );
}
