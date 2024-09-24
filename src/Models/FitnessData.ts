import { User } from "./User";

export class DailyData {
  _id: string;
  date: Date;
  calories: number;
  protein: number;
  weight: number;
  steps: number;
}

export class WeeklyFitnessData {
  _id: string;
  userId: User;
  weekStartDate: Date;
  weekEndDate: Date;
  dailyData: DailyData[];
  totalCalories: number;
  totalProtein: number;
  averageWeight: number;
  totalSteps: number;
  createdAt: Date;
  updatedAt: Date;
}
