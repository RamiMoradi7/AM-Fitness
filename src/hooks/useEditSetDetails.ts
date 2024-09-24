import { useState } from "react";
import toast from "react-hot-toast";
import { SetDetails } from "../Models/TrainingPlan";
import { trainingPlansService } from "../Services/TrainingPlansService";

type EditableField = {
  _id: string;
  exerciseId: string;
  field: string;
  originalValue: string | number;
} | null;

type UseEditSetDetailsProps = {
  weekId: string;
};

export const useEditSetDetails = ({ weekId }: UseEditSetDetailsProps) => {
  const [editingField, setEditingField] = useState<EditableField>(null);
  const [fieldValue, setFieldValue] = useState<number>();

  const handleClickField = (
    _id: string,
    field: string,
    value: number,
    exerciseId: string
  ) => {
    setEditingField({ _id, field, exerciseId, originalValue: value });
    setFieldValue(value);
  };

  const handleBlur = () => {
    if (editingField) {
      if (
        fieldValue.toString().trim() !== "" &&
        fieldValue !== editingField.originalValue
      ) {
        editSetDetails(
          editingField._id,
          editingField.exerciseId,
          editingField.field as keyof SetDetails
        );
      } else {
        setEditingField(null);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && editingField) {
      editSetDetails(
        editingField._id,
        editingField.exerciseId,
        editingField.field as keyof SetDetails
      );
    }
  };

  const editSetDetails = async (
    setDetailId: string,
    exerciseId: string,
    field: keyof SetDetails
  ) => {
    try {
      const updatedSetDetail = { [field]: fieldValue, _id: setDetailId };
      await trainingPlansService.updateSetDetails(
        weekId,
        exerciseId,
        updatedSetDetail
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
    handleClickField,
    handleKeyDown,
  };
};
