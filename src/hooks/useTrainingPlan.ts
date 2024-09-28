import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectAuthState } from "../Redux/AuthSlice";
import { trainingPlansService } from "../Services/TrainingPlansService";

type UseTrainingPlanProps = {
  mode?: "trainingPlans" | "weeklyFitnessData";
};

export const useTrainingPlan = ({ mode }: UseTrainingPlanProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useSelector(selectAuthState);
  const page = Number(searchParams.get("page")) || 1;
  const trainingPlanId = searchParams.get("trainingPlan") || "";

  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ trainingPlan: trainingPlanId, page: String(newPage) });
  };

  const handlePlanChange = (newPlanId: string) => {
    setSearchParams({ trainingPlan: newPlanId, page: "1" });
  };

  useEffect(() => {
    const fetchTrainingPlan = async () => {
      try {
        setIsLoading(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (trainingPlanId) {
          if (mode === "weeklyFitnessData") {
            trainingPlansService.getCurrentWeeklyData(
              user?._id,
              trainingPlanId
            );
          } else if (mode === "trainingPlans") {
            await trainingPlansService.getTrainingPlan(trainingPlanId, page);
          }
        }
      } catch (err: any) {
        const errMsg = err.response?.data || "נסה שנית מאוחר יותר.";
        toast.error(errMsg);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrainingPlan();
  }, [mode, trainingPlanId, page, user?.trainingPlans]);
  return {
    trainingPlanId,
    page,
    isLoading,
    handlePageChange,
    handlePlanChange,
  };
};
