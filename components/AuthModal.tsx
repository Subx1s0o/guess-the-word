// components/AuthModal.tsx
"use client";

import { useModalStore } from "@/hooks/useModalStore";
import CrossIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function AuthModal() {
  const { isOpen, mode, closeModal, switchMode } = useModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-lg relative max-w-xs sm:max-w-sm w-full md:max-w-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={closeModal}
            >
              <CrossIcon />
            </button>
            {mode === "login" ? (
              <LoginForm switchMode={switchMode} />
            ) : (
              <RegisterForm switchMode={switchMode} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
