"use client";
import api from "@/app/utils/auth/api.service";
import { IUser } from "@/types/types";
import { AxiosResponse } from "axios";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const res: AxiosResponse<IUser> = await api.get<IUser>("/user/me");
        if (res.status === 200) {
          setUser(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    }

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
