import { toast } from "sonner";
import { IMusic } from "../types/items";

export function itemToMusic(item: IMusic): object {
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
    upc: item.UPC,
    ean: item.EAN,
    studio: item.Studio,
    artist: item.Artist,
    image: item.Image,
    length: Number(item.Length),
    price: Number(item.Price),
    publishedAt: new Date(
      Number(item.Year || 0),
      Number(item.Month || 0),
      Number(item.Days || 0)
    ).toISOString(),
    tags: item?.Tags?.split(", ").map((nombre) => nombre.trim()) || [],
    group: item.Group,
    notes: item.Notes,
  };

  return { type: "music", data: bodyData };
}
