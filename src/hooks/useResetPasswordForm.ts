import { zodResolver } from "@hookform/resolvers/zod";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../Models/User";
import { appStore } from "../Redux/Store";
import { authService } from "../Services/AuthService";
import { passwordValidationSchema } from "../validators/passwordValidationSchema";

interface ResetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

type useResetPasswordFormProps = {
  token: string;
};

export const useResetPasswordForm = ({ token }: useResetPasswordFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(passwordValidationSchema),
  });

  const navigate = useNavigate();

  const handleResetPassword = async ({
    newPassword,
  }: ResetPasswordFormValues) => {
    try {
      const newToken = await authService.handleChangePassword(
        token,
        newPassword
      );
      const user = jwtDecode<{ user: User }>(newToken).user;
      await authService.login({ email: user.email, password: newPassword });
      const userName = appStore.getState().auth.user.firstName;
      toast.success(`ברוך שובך ${userName}, סיסמתך שונתה בהצלחה.`);
      navigate("/application");
    } catch (err: any) {
      const errMessage =
        err.response?.data || "Something went wrong, please try again later.";
      toast.error(errMessage);
    }
  };

  return { handleSubmit, control, errors, isSubmitting, handleResetPassword };
};
