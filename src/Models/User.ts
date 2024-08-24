export class User {
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
  imageUrl: string;
  //   trainingPlans?: Schema.Types.ObjectId[];
  //   dietaryMenus?: Schema.Types.ObjectId[];
}
