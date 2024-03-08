import axios from "axios";
let BASE_URL = "https://schmgrcoou-dev.azurewebsites.net/api/";

export interface UserData {
  JwtToken: {
    Token: string;
    Issued: Date;
    Expires: Date;
  };
  UserType: string;
  UserId: string;
  FullName: string;
  MenuItems: string[];
  Birthday: boolean;
  TwoFactor: boolean;
  OldUser: boolean;
  ImpersonatorUsername: string;
  IsImpersonating: boolean;
}

export async function login(username: String, password: String) {
  return await axios.post(`${BASE_URL}/Auth/login`, {
    userName: username,
    Password: password,
  });
}
