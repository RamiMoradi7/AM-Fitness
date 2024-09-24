import { TrainingPlan } from "./TrainingPlan";

export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  birthday: Date;
  age?: number;
  photo?: string;
  notificationsEnabled: boolean;
  isActive?: boolean;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  roleId: number;
  image: File;
  imageUrl: string;
  trainingPlans?: { _id: string; name: string }[];
}
