import { Axios } from "@/lib/axios";

export const getAllUser = async () => {
  try {
    const axiosResponse = await Axios.get("/user/");
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const getAllUserByFilter = async (data: any) => {
  try {
    const axiosResponse = await Axios.post("/user/filter", data);
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const createUser = async (data: any) => {
  console.log(data);
  try {
    const axiosResponse = await Axios.post("/user/", data);
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const getSingleUser = async (id: string) => {
  try {
    const axiosResponse = await Axios.get(`/user/${id}`);
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const updateUser = async (id: string, data: any) => {
  try {
    const axiosResponse = await Axios.patch(`/user/${id}`, data);
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const deleteUser = async (id: string) => {
  try {
    const axiosResponse = await Axios.delete(`/user/${id}`);
    const allUser = axiosResponse.data;
    return allUser;
  } catch (error: any) {
    return error?.response!.data;
  }
};
