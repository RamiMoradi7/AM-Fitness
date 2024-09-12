import { AuthState } from "./AuthSlice";
import { TrainingPlansState } from "./TrainingPlansSlice";

export type AppState = {
  auth: AuthState;
  trainingPlans: TrainingPlansState;
};
