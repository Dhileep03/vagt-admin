import { db } from "@/lib/db";
import * as bcrypt from "bcryptjs";

export const createUser = async (values: any) => {
  const { password, ...data } = values;
  console.log("values",values);
  const hashedPassword = await bcrypt.hash(password, 10);
  return await db.user.create({
    data: { ...values, password: hashedPassword },
  });
};
//GET ALL USER
export const getAllUser = async () => {
  return await db.user.findMany();
};

export const userFindByUserName = async (username: string) => {
    return await db.user.findUnique({
      where: {
        username: username,
      },
    });
  };


  export const userFindByFilterOption = async (data: any) => {
    return await db.user.findMany({
      where: data,
    });
  };
  //GET USER BY ID
  
  export const userFindById = async (id: string) => {
    return await db.user.findUnique({
      where: {
        id: id,
      }
    });
  };
  //DELETE USER BY NAME
  
  export const userDeleteById = async (id: string) => {
    return await db.user.delete({
      where: {
        id: id,
      },
    });
  };
  //UPDATE USER BY NAME
  
  export const userUpdateById = async (id: string, values: any) => {
    const { password, ...data } = values;
    const payLoad = { ...values };
  
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      payLoad.password = hashedPassword;
    }
    return await db.user.update({
      where: {
        id: id,
      },
      data: payLoad,
    });
  };