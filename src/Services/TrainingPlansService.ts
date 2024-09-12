import axios from "axios";
import { SetDetails, TrainingPlan } from "../Models/TrainingPlan";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import {
  deletePlan,
  initPlans,
  updateSetDetails,
  updateWeek,
} from "../Redux/TrainingPlansSlice";

class TrainingPlansService {
  public async getTrainingPlan(trainingPlanId: string): Promise<TrainingPlan> {
    const response = await axios.get<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlanId
    );

    const trainingPlan = response.data;
    return trainingPlan;
  }

  public async getTrainingPlans(userId: string): Promise<TrainingPlan[]> {
    const response = await axios.get<TrainingPlan[]>(
      appConfig.trainingPlansUrl + `user/${userId}`
    );
    const fetchedTrainingPlans = response.data;
    appStore.dispatch(initPlans(fetchedTrainingPlans));
    return fetchedTrainingPlans;
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
    trainingPlan: TrainingPlan,
    weekId: string
  ): Promise<void> {
    const response = await axios.put<TrainingPlan>(
      `${appConfig.trainingPlansUrl + trainingPlan._id}/week/${weekId}`,
      trainingPlan
    );
    const updatedTrainingPlan = response.data;

    if (updatedTrainingPlan) {
      appStore.dispatch(
        updateWeek({ weekId, updatedWeek: updatedTrainingPlan })
      );
    }
    console.log(updatedTrainingPlan);
  }

  public async deleteTrainingPlan(trainingPlanId: string): Promise<void> {
    await axios.delete<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlanId
    );
    appStore.dispatch(deletePlan(trainingPlanId));
  }

  public async updateSetDetails(
    setDetails: Partial<SetDetails>
  ): Promise<void> {
    const response = await axios.put(
      appConfig.setDetailsUrl + setDetails._id,
      setDetails
    );

    const { updatedSetDetails, planId } = response.data;
    appStore.dispatch(updateSetDetails(updatedSetDetails));
    console.log(updatedSetDetails);
  }
}

export const trainingPlansService = new TrainingPlansService();
