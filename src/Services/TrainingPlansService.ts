import axios from "axios";
import { TrainingPlan } from "../Models/TrainingPlan";
import { appConfig } from "../Utils/AppConfig";

class TrainingPlansService {
  public async getTrainingPlan(trainingPlanId: string): Promise<TrainingPlan> {
    const response = await axios.get<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlanId
    );

    const trainingPlan = response.data;
    return trainingPlan;
  }

  public async addTrainingPlan(trainingPlan: TrainingPlan): Promise<void> {
    const response = await axios.post<TrainingPlan>(
      appConfig.trainingPlansUrl,
      trainingPlan
    );
    const addedTrainingPlan = response.data;
    console.log(addedTrainingPlan);
  }

  public async editTrainingPlan(trainingPlan: TrainingPlan): Promise<void> {
    const response = await axios.put<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlan._id,
      trainingPlan
    );
    const updatedTrainingPlan = response.data;
    console.log(updatedTrainingPlan);
  }

  public async deleteTrainingPlan(trainingPlanId: string): Promise<void> {
    await axios.delete<TrainingPlan>(
      appConfig.trainingPlansUrl + trainingPlanId
    );
  }
}

export const trainingPlansService = new TrainingPlansService();
