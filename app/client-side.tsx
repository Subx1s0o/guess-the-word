// app/client-side.tsx
"use client";

import { persistor } from "@/store/store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

interface Props {
  children: ReactNode;
}

export default function ClientSide({ children }: Props) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
}
