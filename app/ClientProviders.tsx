"use client";

import { makeStore, persistor } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode, useRef, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
interface Props {
  children: ReactNode;
}


export default function ClientProviders({ children }: Props) {

const [queryClient] = useState(() => new QueryClient())

  const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);


  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider> 
  );
}
