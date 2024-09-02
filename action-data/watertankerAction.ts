import { Axios } from "@/lib/axios";

export const getAllWatertanker = async () => {
  try {
    const axiosResponse = await Axios.get("/water-tankers");
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const getAllWatertankerByUser = async (data: any) => {
  try {
    const axiosResponse = await Axios.post("/user/filter", data);
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const createWatertanker = async (data: any) => {
  console.log(data);
  try {
    const axiosResponse = await Axios.post("/water-tankers", data);
    console.log(axiosResponse);
    return axiosResponse;
  } catch (error: any) {

    return error?.response!.data;
  }
};
export const updateWatertanker = async (id: string, data: any) => {
  try {
    const axiosResponse = await Axios.patch(`/water-tankers/${id}`, data);
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
export const deleteWatertanker = async (id: string) => {
  try {
    const axiosResponse = await Axios.delete(`/water-tankers/${id}`);
    const value = axiosResponse.data;
    return value;
  } catch (error: any) {
    return error?.response!.data;
  }
};
