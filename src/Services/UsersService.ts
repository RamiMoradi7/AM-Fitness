import axios from "axios";
import { User } from "../Models/User";
import { appConfig } from "../Utils/AppConfig";

class UsersService {
  public async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(appConfig.usersUrl);
    const users = response.data;
    return users;
  }
}

export const usersService = new UsersService();
