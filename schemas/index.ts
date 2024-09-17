import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  password: z.string().min(6, {
    message: "Last name is  required.",
  }),
});
export const RegisterFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address." }),
  password: z.string().min(6, {
    message: "Password is required.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirm password.",
  }),
});
