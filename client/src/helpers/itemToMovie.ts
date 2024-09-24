import { toast } from "sonner";
import { IMovie } from "../types/items";

export function itemToMovie(item: IMovie, collectionId: string): object {
  const regexUpc = /^\d{1,12}$/;
  const regexEan = /^\d{1,13}$/;

  if (
    (item.UPC && !regexUpc.test(item.UPC)) ||
    (item.EAN && !regexEan.test(item.EAN))
  ) {
    toast.error("Invalid UPC or EAN values");
    return {};
  }

  const bodyData = {
    title: item.Title,
    description: item.Description,
    collectionId: collectionId,
    upc: item.UPC,
    ean: item.EAN,
    director: item.Director,
    studio: item.Studio,
    actors: item?.Actors?.split(", ").map((nombre) => nombre.trim()) || [],
    image: item.Image,
    duration: Number(item.Duration),
    price: Number(item.Price),
    aspectRatio: item.AspectRatio,
    publishedAt: new Date(
      Number(item.Year || 0),
      Number(item.Month || 0),
      Number(item.Days || 0)
    ).toISOString(),
    tags: item?.Tags?.split(", ").map((nombre) => nombre.trim()) || [],
    group: item.Group,
    notes: item.Notes,
  };

  return { type: "movie", data: bodyData };
}
