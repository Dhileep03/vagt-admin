"use server";
import * as z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { credentialLoginSchema } from "../schemas/intex";
import { DEFAULT_LOGIN_REDIRECT } from "../config/const";

interface responseData {
  status: boolean;
  message: string;
  data: string;
}

export const Login = async (data: z.infer<typeof credentialLoginSchema>) => {
  try {
    await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
    }

    throw error;
  }
};
