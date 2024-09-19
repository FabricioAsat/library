import axios, { AxiosError } from "axios";
import { IResponseCollections } from "../types/response";

export async function getCollections(): Promise<IResponseCollections> {
  try {
    const { data } = await axios.get<IResponseCollections>(
      `${import.meta.env.VITE_API_URL}/collections`
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
