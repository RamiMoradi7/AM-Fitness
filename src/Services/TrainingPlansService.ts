import axios from "axios";
import { IWeek, SetDetails, TrainingPlan } from "../Models/TrainingPlan";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import {
  deletePlan,
  initPlans,
  setCurrentWeek,
  updateSetDetails,
  updateWeek,
} from "../Redux/TrainingPlansSlice";

export type GetTrainingPlanProps = {
  trainingPlan: TrainingPlan;
  weeks: IWeek[];
  totalWeeks: number;
  currentPage: number;
  totalPages: number;
};

class TrainingPlansService {
  public async getTrainingPlan(
    trainingPlanId: string,
    page: number = 1,
    limit: number = 4
  ): Promise<GetTrainingPlanProps> {
    const url = `${
      appConfig.trainingPlansUrl + trainingPlanId
    }?page=${page}&limit=${limit}`;
    const response = await axios.get<GetTrainingPlanProps>(url);

    const trainingPlan = response.data;
    appStore.dispatch(initPlans(trainingPlan));
    return trainingPlan;
  }

  public async getPlanWeek(weekId: string): Promise<IWeek> {
    const response = await axios.get<IWeek>(
      appConfig.trainingPlanWeekUrl + weekId
    );
    return response.data;
  }

  public async getPlanWeekByDateRange(
    userId: string,
    planId: string,
    startDate: Date,
    endDate: Date
  ): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 350));
    const response = await axios.post(
      appConfig.trainingPlansUrl + `date-range`,
      {
        data: {
          userId,
          planId,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
      }
    );
    const week = response.data;
    appStore.dispatch(setCurrentWeek(week));
  }

  public async getCurrentWeeklyData(
    userId: string,
    trainingPlanId: string
  ): Promise<void> {
    const response = await axios.get<IWeek>(
      appConfig.currentWeeklyData + userId + `/trainingPlan/${trainingPlanId}`
    );
    const weeklyData = response.data;
    if (weeklyData) {
      appStore.dispatch(setCurrentWeek(weeklyData));
    }
  }

  public async addTrainingPlan(trainingPlan: TrainingPlan): Promise<void> {
    const response = await axios.post<TrainingPlan>(
      appConfig.trainingPlansUrl,
      trainingPlan
    );
    const addedTrainingPlan = response.data;
    console.log(addedTrainingPlan);
  }

  public async editTrainingPlan(
    trainingPlan: Partial<TrainingPlan>,
    weekId: string
  ): Promise<void> {
    const response = await axios.put<TrainingPlan>(
      `${appConfig.trainingPlansUrl + trainingPlan._id}`,
      trainingPlan
    );
    const updatedTrainingPlan = response.data;
    console.log(updatedTrainingPlan);
  }

  public async editTrainingPlanWeek(
    weekId: string,
    weekData: Partial<IWeek>
  ): Promise<void> {
    const response = await axios.put<IWeek>(
      appConfig.trainingPlanWeekUrl + weekId,
      weekData
    );
    const updatedWeek = response.data;
    if (updatedWeek) {
      appStore.dispatch(updateWeek({ weekId, updatedWeek: updatedWeek }));
    }
  }

  public async deleteTrainingPlan(trainingPlanId: string): Promise<void> {
    await axios.delete<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlanId
    );
    appStore.dispatch(deletePlan(trainingPlanId));
  }

  public async updateSetDetails(
    weekId: string,
    exerciseId: string,
    setDetails: Partial<SetDetails>
  ): Promise<void> {
    const response = await axios.put(
      `${appConfig.setDetailsUrl + weekId}/set-details/${exerciseId}`,
      setDetails
    );
    const updatedSetDetails = response.data;
    appStore.dispatch(
      updateSetDetails({ weekId, exerciseId, updatedSetDetails })
    );
    console.log(updatedSetDetails);
  }
}

export const trainingPlansService = new TrainingPlansService();
