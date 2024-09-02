import { Axios } from "@/lib/axios";

export const getAllVechilepass = async () => {
  try {
    const axiosResponse = await Axios.get("/vehicle-passes");
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const getAllVechilepassByUser = async (data: any) => {
  try {
    const axiosResponse = await Axios.post("/user/filter", data);
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const createVechilepass = async (data: any) => {
  console.log(data);
  try {
    const axiosResponse = await Axios.post("/vehicle-passes", data);
    console.log( axiosResponse.data)
    return  axiosResponse;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const updateVechilepass = async (id: string, data: any) => {
  try {
    const axiosResponse = await Axios.patch(`/vehicle-passes/${id}`, data);
    const value = axiosResponse;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const deleteVechilepass = async (id: string) => {
  try {
    const axiosResponse = await Axios.delete(`/vehicle-passes/${id}`);
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
