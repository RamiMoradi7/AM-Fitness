import { useSearchParams } from "react-router-dom";
import { authService } from "../Services/AuthService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Status = "loading" | "success" | "error";

export const useValidateToken = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState<Status>("loading");

  const handleValidateToken = async (token: string) => {
    setStatus("loading");
    try {
      await authService.validateResetPasswordToken(token);
      setIsValid(true);
      setStatus("success");
    } catch (err: any) {
      const errMsg =
        err.response?.data || "An error occurred while checking the token.";
      setIsValid(false);
      setStatus("error");
      toast.error(errMsg);
    }
  };

  useEffect(() => {
    if (token) {
      handleValidateToken(token);
    }
  }, [token]);

  return { isValid, status, token };
};
