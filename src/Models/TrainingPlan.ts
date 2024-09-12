import { Exercise } from "./Exercise";
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
  exercises: { exercise: Exercise; setDetails?: SetDetails[] }[];
}

export interface IWeek {
  _id: string;
  weekNumber: number;
  days: Day[];
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
