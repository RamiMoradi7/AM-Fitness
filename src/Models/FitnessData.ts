import { User } from "./User";

export class DailyData {
  date: Date;
  calories: number;
  protein: number;
  weight: number;
  steps: number;
}

export class WeeklyFitnessData {
  userId: User;
  weekStartDate: Date;
  dailyData: DailyData[];
  totalCalories: number;
  totalProtein: number;
  averageWeight: number;
  totalSteps: number;
  createdAt: Date;
  updatedAt: Date;
}
