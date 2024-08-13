/* eslint-disable react/no-unescaped-entities */
"use client";

import { useModalStore } from "@/hooks/useModalStore";
import dynamic from "next/dynamic";

const AuthModal = dynamic(() => import("@/components/AuthModal"), {
  ssr: false,
});

export default function WelcomePage() {
  const { openModal } = useModalStore();

  return (
    <section className="flex-1 flex">
      <div className="my-container">
        <div className="flex flex-col xl:grid grid-cols-2 gap-4 min-h-full justify-center ">
          <div className="justify-center flex flex-col">
            <h1 className="xl:text-start text-center text-4xl xl:text-6xl font-bold mb-4 xl:mb-8">
              Guess the Word: Enjoy the Thrill of Discovery!
            </h1>
            <p className="xl:text-start text-center text-lg xl:text-xl mb-6">
              An exciting game that will challenge your knowledge and make you
              think! Join "Guess the Word" and explore new word horizons. Test
              your linguistic skills by deciphering hidden words.
            </p>
            <div className="flex justify-center xl:justify-start">
              <button
                className="px-6 py-2 font-medium bg-black text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black"
                onClick={() => openModal("register")}
              >
                Get Started
              </button>
            </div>
            <AuthModal />
          </div>
          <div className="flex items-center justify-center">
            <div>MODEl</div>
          </div>
        </div>
      </div>
    </section>
  );
}
