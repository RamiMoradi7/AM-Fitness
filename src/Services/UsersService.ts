import axios from "axios";
import { User } from "../Models/User";
import { appConfig } from "../Utils/AppConfig";

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

  public async editUser(user: User): Promise<User> {
    const formData = new FormData();
    formData.append("image", user.image);
    const response = await axios.put<User>(
      appConfig.usersUrl + user._id,
      formData,
      appConfig.axiosOptions
    );
    const updatedUser = response.data;
    console.log(updatedUser);
    return updatedUser;
  }
}

export const usersService = new UsersService();
