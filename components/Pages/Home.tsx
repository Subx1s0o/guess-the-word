/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const TopUsersTable = dynamic(
  () => import("@/components/elements/TopUsersTable"),
  {
    ssr: false,
  }
);
export default function Home() {
  const router = useRouter();
  const goToStandartGame = () => {
    router.push("games/standart");
  };
  return (
    <>
      <section>
        <div className="my-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl font-bold mb-10 mt-20"
          >
            Choose Games
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ul className="flex gap-5 justify-center">
              <li className="max-w-sm flex flex-col items-center shadow-button text-black dark:text-white j dark:bg-slate-900 px-7 py-10 rounded-lg">
                <h3 className="text-2xl text-center font-medium mb-5">
                  Standart
                </h3>
                <article className="flex gap-2 mb-10">
                  <div className="relative w-10   h-10  bg-white text-black rounded-md border-2 border-blue-500">
                    <span className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      H
                    </span>
                  </div>
                  <div className="relative w-10 h-10  bg-white text-black rounded-md border-2 border-blue-500">
                    <span className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      E
                    </span>
                  </div>
                  <div className="relative w-10 h-10  bg-white text-black rounded-md border-2 border-blue-500">
                    <span className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      L
                    </span>
                  </div>
                  <div className="relative w-10 h-10  bg-white text-black rounded-md border-2 border-blue-500">
                    <span className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      L
                    </span>
                  </div>
                  <div className="relative w-10 h-10 bg-white text-black rounded-md border-2 border-blue-500">
                    <span className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      O
                    </span>
                  </div>
                </article>
                <p className="text-base mb-6">
                  In the "Standart" game you need to guess the word using hints
                  and your knowledge. Each word has a limited number of
                  attempts. Show off your skills and compete with other players
                  for the top spot on our leaderboard!
                </p>
                <button
                  onClick={goToStandartGame}
                  className="bg-black px-7 py-4 text-white font-semibold rounded-lg"
                >
                  Play
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="my-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl font-bold mb-10 mt-20"
          >
            Top Players
          </motion.h2>

          <TopUsersTable />
        </div>
      </section>
    </>
  );
}
