import { IUser } from "@/types/types";
import { AxiosResponse } from "axios";
import api from "../api.instance";
import UserHelpers from "./user.helpers";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

class UserService {
  async incrementMoney(amount: number): Promise<void> {
    try {
      const res: AxiosResponse<IUser> = await api.patch(
        `${url}/user/increment-money`,
        amount
      );
      await UserHelpers.saveUserToStorage(res.data);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

const userService = new UserService();

export default userService;
