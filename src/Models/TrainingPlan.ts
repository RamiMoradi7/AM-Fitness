import { Exercise } from "./Exercise";
import { User } from "./User";

interface Day {
  dayOfWeek: string;
  exercises: Exercise[];
}

export class TrainingPlan {
  _id: string;
  user: Partial<User>;
  name: string;
  description?: string;
  days: Day[];
  duration: number;
  goal?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
