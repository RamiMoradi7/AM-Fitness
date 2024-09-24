import axios from "axios";
import { DailyData, WeeklyFitnessData } from "../Models/FitnessData";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import {
  setCurrentWeek,
  updateDayInCurrentWeek,
} from "../Redux/TrainingPlansSlice";

class FitnessDataService {
  public async getRecentWeekFitnessData(
    userId: string
  ): Promise<WeeklyFitnessData> {
    await new Promise((resolve) => setTimeout(resolve, 350));

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

  public async editDailyFitnessData(
    fitnessDataId: string,
    dayId: string,
    fields: Partial<DailyData>
  ): Promise<void> {
    const response = await axios.put<Partial<DailyData>>(
      `${appConfig.fitnessDataUrl + fitnessDataId}/day/${dayId}`,
      fields
    );

    if (response.status === 200) {
      appStore.dispatch(
        updateDayInCurrentWeek({ dayId, updatedDay: response.data })
      );
    }
  }

  public async calculateWeeklyData(
    weeklyFitnessId: string
  ): Promise<WeeklyFitnessData> {
    const response = await axios.get<WeeklyFitnessData>(
      appConfig.fitnessDataUrl + weeklyFitnessId + "/total"
    );

    const weeklyFitnessData = response.data;
    appStore.dispatch(setCurrentWeek());
    return weeklyFitnessData;
  }
}

export const fitnessDataService = new FitnessDataService();
