import axios, { AxiosError } from "axios";
import { IResponseAllItems, IResponseItem } from "../types/response";

export async function getItem(
  itemId: string,
  type: string
): Promise<IResponseItem> {
  try {
    const { data } = await axios.get<IResponseItem>(
      `${import.meta.env.VITE_API_URL}/items/${itemId}?type=${type}`
    );
    return {
      data: data.data,
      message: data.message,
      status: true,
    };
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
    return { message: "Error desconocido", data: null, status: false };
  }
}

export async function getAllItems(): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.get<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items`
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

export async function getItemsByCollection(
  collectionId: string
): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.get<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items/collection/${collectionId}`
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
    return { message: "Error desconocido", data: null, status: false };
  }
}

export async function postItem(item: object): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.post<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items`,
      item
    );
    console.log(data.data);
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
    return { message: "Error desconocido", data: null, status: false };
  }
}

export async function deleteItem(
  itemId: string,
  type: string
): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.delete<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items/${itemId}?type=${type}`
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
    return { message: "Error desconocido", data: null, status: false };
  }
}

export async function putItem(
  item: object,
  itemId: string
): Promise<IResponseAllItems> {
  try {
    const { data } = await axios.put<IResponseAllItems>(
      `${import.meta.env.VITE_API_URL}/items/${itemId}`,
      item
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
    return { message: "Error desconocido", data: null, status: false };
  }
}
