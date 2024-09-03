import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Exercise } from "../Models/Exercise";
import { TrainingPlan } from "../Models/TrainingPlan";
import { exerciseService } from "../Services/ExerciseService";

export const useTrainingPlanForm = (initialValues?: TrainingPlan) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
    getValues,
    reset,
  } = useForm<TrainingPlan>({
    defaultValues: { days: [{ dayOfWeek: "", exercises: [] }] },
  });

  const {
    fields: dayFields,
    append: appendDay,
    remove: removeDay,
    replace: replaceDays,
  } = useFieldArray({ control, name: "days" });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
      const updatedSelectedExercises = initialValues.days.reduce(
        (acc, day, index) => {
          acc[index] = day.exercises;
          return acc;
        },
        {} as { [key: number]: Exercise[] }
      );
      setSelectedExercisesByDay(updatedSelectedExercises);

      if (initialValues.days) {
        replaceDays(initialValues.days);
      }
    }
  }, [initialValues, reset]);

  const [filteredExercisesByDay, setFilteredExercisesByDay] = useState<{
    [key: number]: Exercise[];
  }>({});
  const [selectedExercisesByDay, setSelectedExercisesByDay] = useState<{
    [key: number]: Exercise[];
  }>({});

  const isExerciseSelected = (excId: string, dayIndex: number) => {
    const exercises = selectedExercisesByDay[dayIndex] || [];
    return exercises.some((exc) => exc._id === excId);
  };

  const handleSelectExercise = (exercise: Exercise, dayIndex: number) => {
    if (isExerciseSelected(exercise._id, dayIndex)) {
      toast.error("תרגיל זה כבר נבחר, בחר אחד אחר.");
      return;
    }
    const updatedExercises = [
      ...(selectedExercisesByDay[dayIndex] || []),
      exercise,
    ];

    setSelectedExercisesByDay((prev) => ({
      ...prev,
      [dayIndex]: [...(prev[dayIndex] || []), exercise],
    }));
    setValue(`days.${dayIndex}.exercises`, updatedExercises);
  };

  const removeExercise = (excId: string, dayIndex: number) => {
    const exercises = selectedExercisesByDay[dayIndex] || [];
    const updatedExercises = exercises.filter((exc) => exc._id !== excId);

    setSelectedExercisesByDay((prev) => ({
      ...prev,
      [dayIndex]: updatedExercises,
    }));

    setValue(`days.${dayIndex}.exercises`, updatedExercises);
  };

  const fetchExercisesByCategory = async (
    selectedCategory: string,
    dayIndex: number
  ) => {
    try {
      const exercises = await exerciseService.getExercisesByCategory(
        selectedCategory
      );
      setFilteredExercisesByDay((prev) => ({
        ...prev,
        [dayIndex]: exercises,
      }));
    } catch (err: any) {
      const errMsg = err.response?.data || "Error fetching exercises.";
      toast.error(errMsg);
    }
  };

  const handleCategoryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    dayIndex: number
  ) => {
    const selectedCategory = e.target.value;
    await fetchExercisesByCategory(selectedCategory, dayIndex);
  };

  return {
    control,
    handleSubmit,
    isSubmitting,
    getValues,
    dayFields,
    appendDay,
    removeDay,
    filteredExercisesByDay,
    selectedExercisesByDay,
    handleSelectExercise,
    handleCategoryChange,
    removeExercise,
  };
};
