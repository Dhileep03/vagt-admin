import * as z from "zod";

export const credentialLoginSchema = z.object({
  username: z
    .string()
    .min(1, "user name is required")
    .refine((val) => val.trim().length > 0, {
      message: "Please enter an username",
    }),
  password: z
    .string()
    .min(1, "Password is required")
    .refine((val) => val.trim().length > 0, {
      message: "Please enter a password",
    }),
});

export const UserSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phonenumber: z
    .string()
    .min(10, { message: "Mobile number is required" })
    .max(10, { message: "Mobile number is required" }),
  password: z.string().optional(),
});

export const phoneLoginSchema = z.object({
  phonenumber: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(10, "Enter a valid phone number"),
});