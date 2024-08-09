import { IUser } from "@/types/types";

class UserHelpers {
  static saveUserToStorage(data: IUser): void {
    localStorage.setItem("user", JSON.stringify(data));
  }
}

export default UserHelpers;
