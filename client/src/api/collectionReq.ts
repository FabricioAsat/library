import axios, { AxiosError } from "axios";
import { IResponseCollections } from "../types/response";
import { ICollection } from "../types/collections";

export async function getCollections(): Promise<IResponseCollections> {
  try {
    const { data } = await axios.get<IResponseCollections>(
      `${import.meta.env.VITE_API_URL}/collections`
    );
    return { data: data.data, message: data.message, status: true };
  } catch (err) {
    const axiosError = err as AxiosError;
    if (
      axiosError.response &&
      "data" in axiosError.response &&
      typeof axiosError.response.data === "object" &&
      axiosError.response.data !== null &&
      "error" in axiosError.response.data
    ) {
      return {
        message: String(axiosError.response.data.error),
        data: null,
        status: false,
      };
    }
    return { message: "Sin conexión al servidor", data: null, status: false };
  }
}

export async function createCollection(
  collection: ICollection
): Promise<IResponseCollections> {
  try {
    const { data } = await axios.post<IResponseCollections>(
      `${import.meta.env.VITE_API_URL}/collections`,
      collection
    );
    return { data: data.data, message: data.message, status: true };
  } catch (err) {
    const axiosError = err as AxiosError;
    if (
      axiosError.response &&
      "data" in axiosError.response &&
      typeof axiosError.response.data === "object" &&
      axiosError.response.data !== null &&
      "error" in axiosError.response.data
    ) {
      return {
        message: String(axiosError.response.data.error),
        data: null,
        status: false,
      };
    }
    return { message: "Sin conexión al servidor", data: null, status: false };
  }
}
