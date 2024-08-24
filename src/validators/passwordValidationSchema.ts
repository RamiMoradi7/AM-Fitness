import { z } from "zod";

export const passwordValidationSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "סיסמא חייבת להכיל לפחות 8 תווים.")
      .regex(/[a-z]/, "סיסמא חייבת להכיל לפחות אות אחת קטנה.")
      .regex(/[A-Z]/, "סיסמא חייבת להכיל לפחות אות אחת גדולה")
      .regex(/[0-9]/, "סיסמא חייבת להכיל לפחות מספר אחד")
      .regex(
        /[!@#$%^&*()_+{}\[\]:;"\'<>,.?~`]/,
        "סיסמא חייבת להכיל לפחות תו אחד מיוחד (@#$%)"
      )
      .nonempty("שדה זה הוא חובה."),
    confirmPassword: z.string().nonempty("שדה זה הוא חובה."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "הסיסמאות שהזנת אינן תואמות.",
    path: ["confirmPassword"],
  });
