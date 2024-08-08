import { IAuthResponse, ILogin, IRegister, ITokens } from "@/types/types";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import AuthHelpers from "./auth.helpers";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

class AuthService {
  async main(
    type: "login" | "register",
    data: ILogin | IRegister
  ): Promise<IAuthResponse> {
    try {
      const res: AxiosResponse<IAuthResponse> = await axios.post<IAuthResponse>(
        `${url}/auth/${type}`,
        data
      );
      await AuthHelpers.saveResponseToStorage(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async getNewAccessToken(): Promise<void> {
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
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error refreshing access token:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }
}

const authService = new AuthService();

export default authService;
