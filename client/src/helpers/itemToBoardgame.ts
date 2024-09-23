import { toast } from "sonner";
import { IBoardgame } from "../types/items";

export function itemToBoardgame(item: IBoardgame): object {
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
    designers:
      item?.Designers?.split(", ").map((nombre) => nombre.trim()) || [],
    artists: item?.Artists?.split(", ").map((nombre) => nombre.trim()) || [],
    play_time: Number(item.PlayTime),
    age: Number(item.Age),
    number_players: Number(item.NumberPlayers),
    image: item.Image,
    price: Number(item.Price),
    studio: item.Studio,
    published_at: new Date(
      Number(item.Year || 0),
      Number(item.Month || 0),
      Number(item.Days || 0)
    ),
    tags: item?.Tags?.split(", ").map((nombre) => nombre.trim()) || [],
    group: item.Group,
    notes: item.Notes,
  };

  return { type: "boardgame", data: bodyData };
}
