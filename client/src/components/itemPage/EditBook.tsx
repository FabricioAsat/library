import { useEffect, useState } from "react";
import { IBook } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";
import { putItem } from "../../api/itemsReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import closeImg from "../../assets/close.svg";
import { itemToBook } from "../../helpers/itemToBook";

export const EditBook = ({
  item,
  setShowEdit,
}: {
  item: IBook;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigateTo = useNavigate();
  const [book, setBook] = useState<IBook>(item);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.name === "Image" && e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          setBook({ ...book, [e.target.name]: base64 });
        };
        reader.readAsDataURL(file);
      }
      return;
    }
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = itemToBook(book, book.CollectionID);
    if (!body) return;

    async function request() {
      const req = await putItem(body, book.ID);

      if (!req.status) {
        toast.error(req.message);
        return;
      }

      toast.success(req.message);
      navigateTo("/");
    }

    request();
  };

  useEffect(() => {
    console.log(book.PublishedAt);
    setBook({
      ...book,
      Days: new Date(book.PublishedAt).getDay().toString() || "",
      Month: new Date(book.PublishedAt).getMonth().toString() || "",
      Year: new Date(book.PublishedAt).getFullYear().toString() || "",
      Tags: item.Tags.join(","),
    });
  }, []);

  return (
    <aside className="fixed z-40 left-0 lg:left-80 w-full h-full overflow-auto lg:max-w-[calc(100vw-320px)] max-h-[calc(100vh-128px)] lg:max-h-[calc(100vh-64px)] bg-white top-16">
      <nav className="flex items-end justify-end w-full px-10 mt-5">
        <button
          onClick={() => setShowEdit(false)}
          className="p-1 border-2 rounded-full border-neutral-800"
        >
          <img src={closeImg} alt="Close img" className="w-8 h-8" />
        </button>
      </nav>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-4 pt-5 pb-20 overflow-x-hidden gap-y-6 gap-x-5"
      >
        <LabelAndImput
          label="Title"
          id="Title"
          name="Title"
          value={book.Title}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Author"
          id="Author"
          name="Author"
          value={book.Author}
          onChange={handleChange}
        />

        <LabelAndTextArea
          label="Description"
          id="Description"
          name="Description"
          value={book.Description}
          onChange={handleChange}
        />

        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Published at</h3>
          <div className="flex w-full gap-x-5">
            <LabelAndImput
              label="Year"
              placeholder="YYYY"
              id="Year"
              name="Year"
              value={book.Year}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Month"
              placeholder="MM"
              id="Month"
              name="Month"
              value={book.Month}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Days"
              placeholder="DD"
              id="Days"
              name="Days"
              value={book.Days}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="ISBN 13"
            id="ISBN13"
            name="ISBN13"
            value={book.ISBN13}
            tinyInfo="Numbers only. Max 13 digits."
            onChange={handleChange}
          />
          <LabelAndImput
            label="ISBN 10"
            id="ISBN10"
            name="ISBN10"
            value={book.ISBN10}
            onChange={handleChange}
            tinyInfo="Max 12 characters."
          />
        </div>

        <div className="flex flex-col w-full gap-x-5 lg:flex-row">
          <div className="flex w-full gap-y-1 gap-x-5">
            <LabelAndImput
              label="Pages"
              id="Pages"
              name="Pages"
              value={book.Pages?.toString()}
              onChange={handleChange}
            />

            <LabelAndImput
              label="Price"
              placeholder="0.00"
              id="Price"
              name="Price"
              value={book.Price?.toString()}
              onChange={handleChange}
            />
          </div>

          <LabelAndImage
            label="Image"
            id="Image"
            name="Image"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-full gap-y-1 gap-x-5">
          <div className="flex w-full gap-y-1 gap-x-5">
            <LabelAndImput
              label="Tags"
              id="Tags"
              name="Tags"
              value={book.Tags}
              onChange={handleChange}
              tinyInfo="Separate tags with commas."
            />
            <LabelAndImput
              label="Group"
              id="Group"
              name="Group"
              value={book.Group}
              onChange={handleChange}
            />
          </div>
          <LabelAndTextArea
            label="Notes"
            id="Notes"
            name="Notes"
            value={book.Notes}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Update book"
          className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-40"
        />
      </form>
    </aside>
  );
};
