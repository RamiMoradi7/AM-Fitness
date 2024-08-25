import axios from "axios";
import { Credentials } from "../Models/Credentials";
import { User } from "../Models/User";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { appStore } from "../Redux/Store";
import { authActions } from "../Redux/AuthSlice";

class AuthService {
  public constructor() {
    const token = sessionStorage.getItem("token");
    if (token) {
      const loggedInUser = jwtDecode<{ user: User }>(token).user;
      console.log(loggedInUser);
      appStore.dispatch(authActions.login(loggedInUser));
    }
  }
  public async register(user: Partial<User>): Promise<void> {
    const response = await axios.post<string>(appConfig.registerUrl, user);
    const token = response.data;
  }
  public async login(credentials: Credentials): Promise<void> {
    const response = await axios.post<string>(appConfig.loginUrl, credentials);
    const token = response.data;
    const loggedInUser = jwtDecode<{ user: User }>(token).user;
    appStore.dispatch(authActions.login(loggedInUser));
    sessionStorage.setItem("token", token);
    console.log(loggedInUser);
  }
  public logOut(): void {
    appStore.dispatch(authActions.logOut());
    sessionStorage.removeItem("token");
  }

  public async resetPasswordRequest(email: string): Promise<void> {
    await axios.post<{ email: string }>(appConfig.resetPasswordRequest, {
      email,
    });
  }

  public async validateResetPasswordToken(token: string): Promise<boolean> {
    const response = await axios.post<{ valid: boolean }>(
      appConfig.validateResetPasswordToken,
      { token }
    );
    return response.data.valid;
  }

  public async handleChangePassword(
    token: string,
    newPassword: string
  ): Promise<string> {
    const response = await axios.post<string>(appConfig.changePassword, {
      token,
      newPassword,
    });
    return response.data;
  }
}
export const authService = new AuthService();
