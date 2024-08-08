import { IAuthResponse, ILogin, IRegister, ITokens, IUser } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import api from "../api.instance";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

class UserService {
  async incrementMoney(amount:number): Promise<void>  {
    try {
      const res: AxiosResponse<IUser> = await api.patch(`${url}/user/increment-money`, amount)
      
    } catch (error) {}
  };
}

const userService = new UserService();

export default userService;
