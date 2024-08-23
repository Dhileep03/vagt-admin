"use server";

import { db } from "@/lib/db";
import * as bcrypt from "bcryptjs";

export const passwordVerify = async (
  password: string,
  hasedPassword: string
) => {
  const passwordsMatch = await bcrypt.compare(password, hasedPassword);
  return passwordsMatch;
};
