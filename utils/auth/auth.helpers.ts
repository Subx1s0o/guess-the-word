import { IAuthResponse, ITokens } from "@/types/types";
import Cookies from "js-cookie";

class AuthHelpers {
  static getAccessToken(): string | undefined {
    return Cookies.get("accessToken");
  }

  static setAccessToken(accessToken: string): void {
    Cookies.set("accessToken", accessToken);
  }

  static getRefreshToken(): string | undefined {
    return Cookies.get("refreshToken");
  }

  static saveTokensStorage(data: ITokens): void {
    Cookies.set("accessToken", data.accessToken);
    Cookies.set("refreshToken", data.refreshToken);
  }

  static removeFromStorage(): void {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("user");
  }

  static saveResponseToStorage(data: IAuthResponse): void {
    this.saveTokensStorage(data);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
}

export default AuthHelpers;
