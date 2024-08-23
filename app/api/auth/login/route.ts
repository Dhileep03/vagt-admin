"use server";

import { userFindByUserName } from "../../../../dbconnector/userconnector";
import { passwordVerify } from "../../../../dbconnector/loginconnector";
import { credentialLoginSchema } from "../../../../schemas/intex";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validatedFields = credentialLoginSchema.safeParse(data);
    if (!validatedFields.success) {
      return Response.json(
        {
          success: false,
          data: null,
          message: `Enter a valid credential`,
        },
        { status: 400 }
      );
    }
    const { password, username } = validatedFields.data;
    const findUser = await userFindByUserName(username);
    if (!findUser) {
      return Response.json(
        {
          success: false,
          data: null,
          message: `User not found!`,
        },
        { status: 404 }
      );
    }
    const passwordsMatch = await passwordVerify(password, findUser?.password!);
    if (!passwordsMatch) {
      return Response.json(
        {
          success: false,
          data: null,
          message: `Password does not match!`,
        },
        { status: 401 }
      );
    }
    const { password: passwordData, ...user } = findUser;
    return Response.json(
      {
        success: true,
        data: user,
        message: "Loged In",
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === "P1001") {
      return Response.json(
        {
          success: false,
          data: null,
          message: `Network error`,
        },
        { status: 502 }
      );
    }
    return Response.json(
      {
        success: true,
        data: null,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
