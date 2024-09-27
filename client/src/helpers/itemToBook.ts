import { toast } from "sonner";
import { IBook } from "../types/items";

export function itemToBook(item: IBook, collectionId: string): object {
  const regexIsbn13 = /^\d{1,13}$/;
  const regexIsbn10 = /^\d{1,12}$/;

  if (
    (item.ISBN13 && !regexIsbn13.test(item.ISBN13)) ||
    (item.ISBN10 && !regexIsbn10.test(item.ISBN10))
  ) {
    toast.error("Invalid ISBN values");
    return {};
  }

  console.log(item);
  const bodyData = {
    title: item.Title,
    author: item.Author,
    description: item.Description,
    image: item.Image,
    isbn13: item.ISBN13,
    isbn10: item.ISBN10,
    collectionId: collectionId,
    pages: Number(item.Pages),
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

  return { type: "book", data: bodyData };
}
