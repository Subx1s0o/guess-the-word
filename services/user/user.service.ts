import { IUser } from "@/types/types";
import { AxiosResponse } from "axios";
import api from "../api.instance";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

class UserService {
  async incrementMoney(amount: number): Promise<IUser> {
    try {
      const res: AxiosResponse<IUser> = await api.patch(
        `${url}/user/increment-money`,
        amount
      );
      return res.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getCurrentUser(): Promise<IUser> {
    try {
      const res: AxiosResponse<IUser> = await api.get(`${url}/user/me`);
      return res.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

const userService = new UserService();

export default userService;
