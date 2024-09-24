import axios from "axios";
import { User } from "../Models/User";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import { authActions } from "../Redux/AuthSlice";

class UsersService {
  public async getUser(userId: string): Promise<User> {
    const response = await axios.get<User>(appConfig.usersUrl + userId);
    const user = response.data;
    return user;
  }

  public async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(appConfig.usersUrl);
    const users = response.data;
    return users;
  }

  public async editUser(user: User): Promise<void> {
    const formData = new FormData();
    formData.append("image", user.image);
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    const response = await axios.put<User>(
      appConfig.usersUrl + user._id,
      formData,
      appConfig.axiosOptions
    );
    const updatedUser = response.data;
    console.log(updatedUser)
    if (updatedUser) {
      appStore.dispatch(authActions.updateUser(updatedUser));
    }
  }
}

export const usersService = new UsersService();
