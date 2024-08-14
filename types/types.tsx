export interface IUser {
  id: string;
  username: string;
  email: string;
  money: number;
  games: number;
  won: number;
  losed: number;
  photo: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  username: string;
}

export interface IGoogle {
  name: string;
  uid: string;
  email: string;
  password: string;
  picture: string;
}
