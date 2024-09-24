import { Exercise } from "./Exercise";
import { WeeklyFitnessData } from "./FitnessData";
import { User } from "./User";

export interface SetDetails {
  _id?: string;
  weight: number;
  reps: number;
  effortLevel: number;
}

export interface Day {
  _id?: string;
  dayOfWeek: string;
  exercises: { exercise: Exercise; setDetails?: SetDetails[]; _id?: string }[];
}

export interface IWeek {
  _id: string;
  trainingPlan: string;
  weekNumber: number;
  days: Day[];
  startDate: Date;
  weeklyFitnessData?: WeeklyFitnessData;
  endDate: Date;
}

export class TrainingPlan {
  _id: string;
  user: User;
  name: string;
  description?: string;
  weeks: IWeek[];
  days: Day[];
  durationInMonths: number;
  goal?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

  