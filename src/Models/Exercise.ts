export class Exercise {
  _id: string;
  name: string;
  sets: number;
  reps: number;
  rest: number;
  category: string;
  weight?: number;
  notes?: { text: string }[];
}
