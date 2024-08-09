import {
  IAuthResponse,
  ILogin,
  IRegister,
  ITokens,
  IUser,
} from "@/types/types";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import AuthHelpers from "./auth.helpers";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

class AuthService {
  async main(
    type: "login" | "register",
    data: ILogin | IRegister
  ): Promise<IUser> {
    try {
      const res: AxiosResponse<IAuthResponse> = await axios.post<IAuthResponse>(
        `${url}/auth/${type}`,
        data
      );
      await AuthHelpers.saveTokensStorage({
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data.user;
    } catch (error) {
      throw error;
    }
  }

  async getNewAccessToken(): Promise<Pick<ITokens, "accessToken">> {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token found.");
    }

    try {
      const response: AxiosResponse<Pick<ITokens, "accessToken">> =
        await axios.post<Pick<ITokens, "accessToken">>(`${url}/auth/refresh`, {
          refreshToken,
        });

      AuthHelpers.setAccessToken(response.data.accessToken);

      return response.data;
    } catch (error: any) {
      if (error instanceof Error) {
        console.error("Error refreshing access token:", error.message);
        throw error;
      } else {
        throw new Error("Unexpected error: ", error);
      }
    }
  }

  logout(): void {
    AuthHelpers.removeFromStorage();
  }
}

const authService = new AuthService();

export default authService;
