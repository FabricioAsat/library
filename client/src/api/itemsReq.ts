import axios, { AxiosError } from "axios";
import { IResponseAllItems } from "../types/response";

export async function getAllItems(): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.get<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items`
    );
    return data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (
      axiosError.response &&
      "data" in axiosError.response &&
      typeof axiosError.response.data === "object" &&
      axiosError.response.data !== null &&
      "error" in axiosError.response.data
    ) {
      return { message: String(axiosError.response.data.error), data: null };
    }
    return { message: "Error desconocido", data: null };
  }
}

export async function getItemsByCollection(
  collectionId: string
): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.get<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items/collection/${collectionId}`
    );
    return data;
  } catch (err) {
    const axiosError = err as AxiosError;
    if (
      axiosError.response &&
      "data" in axiosError.response &&
      typeof axiosError.response.data === "object" &&
      axiosError.response.data !== null &&
      "error" in axiosError.response.data
    ) {
      return { message: String(axiosError.response.data.error), data: null };
    }
    return { message: "Error desconocido", data: null };
  }
}
