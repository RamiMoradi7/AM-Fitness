import axios from "axios";
import { Exercise } from "../Models/Exercise";
import { appConfig } from "../Utils/AppConfig";

class ExerciseService {
  public async getExercise(exerciseId: string): Promise<Exercise> {
    const response = await axios.get<Exercise>(
      appConfig.exercisesUrl + exerciseId
    );
    const exercise = response.data;
    return exercise;
  }

  public async getExercises(): Promise<Exercise[]> {
    const response = await axios.get<Exercise[]>(appConfig.exercisesUrl);
    const exercises = response.data;
    return exercises;
  }

  public async getExercisesByCategory(category: string): Promise<Exercise[]> {
    const response = await axios.get(
      appConfig.exercisesUrl + `category/${category}`
    );
    const exercises = response.data;
    return exercises;
  }

  public async addExercise(exercise: Exercise): Promise<void> {
    const response = await axios.post<Exercise>(
      appConfig.exercisesUrl,
      exercise
    );
    const addedExercise = response.data;
    console.log(addedExercise);
  }
  public async editExercise(exercise: Exercise): Promise<void> {
    const response = await axios.put<Exercise>(
      appConfig.exercisesUrl + exercise._id,
      exercise
    );
    const updatedExercise = response.data;
    console.log(updatedExercise);
  }
}

export const exerciseService = new ExerciseService();
