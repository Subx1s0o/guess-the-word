/* eslint-disable react/no-unescaped-entities */
"use client";

import AuthModal from "@/components/AuthModal";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"login" | "register">("register");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const mode = searchParams.get("mode");
      if (mode === "register") {
        setModalMode("register");
      } else {
        setModalMode("login");
      }
    }
  }, [searchParams]);

  const openModal = (mode: "login" | "register") => {
    setModalMode(mode);
    setIsModalOpen(true);
    router.push(`?mode=${mode}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col xl:grid grid-cols-2 gap-4 min-h-full justify-center">
      <div className="justify-center flex flex-col">
        <h1 className=" xl:text-start text-center text-4xl xl:text-6xl font-bold mb-4 xl:mb-8">
          Guess the Word: Enjoy the Thrill of Discovery!
        </h1>
        <p className="xl:text-start text-center text-lg  xl:text-xl mb-6">
          An exciting game that will challenge your knowledge and make you
          think! Join "Guess the Word" and explore new word horizons. Test your
          linguistic skills by deciphering hidden words.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => openModal("register")}
            className="px-6 py-2 font-medium bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black"
          >
            Get Started
          </button>
        </div>
        <AuthModal isOpen={isModalOpen} onClose={closeModal} mode={modalMode} />
      </div>
      <div className="flex items-center justify-center">
        <div>MODEl</div>
      </div>
    </div>
  );
}
