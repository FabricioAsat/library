import { toast } from "sonner";
import { IBook } from "../types/items";

export function itemToBook(item: IBook): object {
  const regexMonthsDays = /^\d{2}$/;
  const regexYear = /^\d{4}$/;
  const regexIsbn = /^\d{13}$|^\d{10}$/;
  // Check if the date is valid
  if (
    !regexMonthsDays.test(item.days) ||
    !regexMonthsDays.test(item.month) ||
    !regexYear.test(item.year)
  ) {
    toast.error("Invalid date values");
    return {};
  }

  if (
    (item.isbn13 && !regexIsbn.test(item.isbn13)) ||
    (item.isbn10 && !regexIsbn.test(item.isbn10))
  ) {
    toast.error("Invalid ISBN values");
    return {};
  }
  let tagsArray: string[] = [];

  if (item.tags) {
    tagsArray = item.tags.split(",").map((tag) => tag.trim());
  }

  const bodyData = {
    title: item.title,
    author: item.author,
    description: item.description,
    image: item.image,
    isbn13: item.isbn13,
    isbn10: item.isbn10,
    pages: item.pages,
    price: item.price,
    published_at: new Date(
      Number(item.year),
      Number(item.month),
      Number(item.days)
    ),
    tags: tagsArray,
    group: item.group,
    notes: item.notes,
  };
  return bodyData;
}

// {

//   "type":"book",
//   "data":{
//   "collection":"aaaa",
//   "title":"aaaa",
//   "description":"aaaa",
//   "publishedAt":"2006-01-02T15:04:05Z",
//   "image":"",
//   "tags":[],
//   "group":"",
//   "notes":"",
//   "price":1.0,
//   "author":"aaaa",
//   "isbn13":"aaa",
//   "isbn10":"aaa",
//   "pages":12}
// }
