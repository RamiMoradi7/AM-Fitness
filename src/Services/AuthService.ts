import axios from "axios";
import { Credentials } from "../Models/Credentials";
import { User } from "../Models/User";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { appStore } from "../Redux/Store";
import { authActions } from "../Redux/AuthSlice";
import { usersService } from "./UsersService";

class AuthService {
  public constructor() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.initializeUser(token);
    }
  }

  private async initializeUser(token: string): Promise<void> {
    try {
      const { _id: userId } = jwtDecode<{ user: User }>(token).user;
      const user = await usersService.getUser(userId);
      appStore.dispatch(authActions.login(user));
      sessionStorage.setItem("token", token);
    } catch (err) {
      console.error("Failed to initialize user:", err);
      this.logOut();
    }
  }
  public async register(user: Partial<User>): Promise<void> {
    const response = await axios.post<string>(appConfig.registerUrl, user);
    const token = response.data;
  }
  public async login(credentials: Credentials): Promise<void> {
    // Getting token.
    const response = await axios.post<string>(appConfig.loginUrl, credentials);
    const token = response.data;

    // Extract userId from token.
    const { _id: userId } = jwtDecode<{ user: User }>(token).user;
    if (!userId) throw new Error("משתמש לא קיים.");

    // Fetch user info.
    const user = await usersService.getUser(userId);
    appStore.dispatch(authActions.login(user));
    sessionStorage.setItem("token", token);
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
