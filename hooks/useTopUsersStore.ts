import { IUser } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import { create } from "zustand";

interface Store {
  users: IUser[] | null;
  fetchUsers: () => void;
  error: string | null;
}

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

const useTopUsersStore = create<Store>((set) => ({
  users: null,
  error: null,
  fetchUsers: async () => {
    try {
      const res: AxiosResponse<IUser[]> = await axios.get(
        `${url}/user/leaders`
      );
      set({ users: res.data });
    } catch (error: any) {
      set({ error: error.response?.data || "Unknown error, try later." });
    }
  },
}));

export default useTopUsersStore;
