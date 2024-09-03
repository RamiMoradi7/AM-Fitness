import axios from "axios";
import { WeeklyFitnessData } from "../Models/FitnessData";
import { appConfig } from "../Utils/AppConfig";

class FitnessDataService {
  public async getRecentWeekFitnessData(
    userId: string
  ): Promise<WeeklyFitnessData> {
    const response = await axios.get<WeeklyFitnessData>(
      appConfig.fitnessDataUrl + userId
    );

    const weeklyFitnessData = response.data;
    return weeklyFitnessData;
  }

  public async getWeeklyFitnessDataByDateRange(
    userId: string,
    startDate: Date,
    endDate: Date
  ): Promise<WeeklyFitnessData> {
    const response = await axios.get<WeeklyFitnessData>(
      `${appConfig.fitnessDataUrl}date-range/${userId}`,
      {
        data: { startDate, endDate },
      }
    );
    const weeklyFitnessData = response.data;
    return weeklyFitnessData;
  }
}

export const fitnessDataService = new FitnessDataService();
