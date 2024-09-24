import { useState } from "react";
import { DailyData, WeeklyFitnessData } from "../Models/FitnessData";
import { fitnessDataService } from "../Services/FitnessDataService";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { AppState } from "../Redux/AppState";
import { appStore } from "../Redux/Store";
import {
  setCurrentWeek,
  updateDayInCurrentWeek,
} from "../Redux/TrainingPlansSlice";

type UseDailyEditableFieldsProps = {
  weeklyFitnessId: string;
};

type EditableField = {
  _id: string;
  field: string;
  originalValue: string | number;
} | null;

export const useDailyEditableFields = ({
  weeklyFitnessId,
}: UseDailyEditableFieldsProps) => {
  const [editingField, setEditingField] = useState<EditableField>(null);
  const [fieldValue, setFieldValue] = useState<number | string>("");

  const handleClick = (_id: string, field: string, value: number) => {
    setEditingField({ _id, field, originalValue: value });
    setFieldValue(value);
  };

  const handleBlur = () => {
    if (editingField) {
      if (
        fieldValue.toString().trim() !== "" &&
        fieldValue !== editingField.originalValue
      ) {
        editDailyFitnessData(
          editingField._id,
          editingField.field as keyof DailyData
        );
      } else {
        setEditingField(null);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && editingField) {
      editDailyFitnessData(
        editingField._id,
        editingField.field as keyof DailyData
      );
    }
  };

  const editDailyFitnessData = async (
    dayId: string,
    field: keyof DailyData
  ) => {
    try {
      const updatedFitnessData = { [field]: fieldValue };
      await fitnessDataService.editDailyFitnessData(
        weeklyFitnessId,
        dayId,
        updatedFitnessData
      );

      toast.success("עודכן בהצלחה");
      setEditingField(null);
    } catch (err: any) {
      const errMsg = err.response?.data || "נסה שנית מאוחר יותר.";
      toast.error(errMsg);
    }
  };

  return {
    editingField,
    fieldValue,
    setFieldValue,
    handleBlur,
    handleClick,
    handleKeyDown,
  };
};
