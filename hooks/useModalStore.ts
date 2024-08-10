import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  mode: "login" | "register";
  openModal: (mode: "login" | "register") => void;
  closeModal: () => void;
  switchMode: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  mode: "login",
  openModal: (mode) => set({ isOpen: true, mode }),
  closeModal: () => set({ isOpen: false }),
  switchMode: () =>
    set((state) => ({
      mode: state.mode === "login" ? "register" : "login",
    })),
}));
