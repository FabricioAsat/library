import { useEffect, useState } from "react";
import { IMovie } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";
import { putItem } from "../../api/itemsReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import closeImg from "../../assets/close.svg";
import { itemToMovie } from "../../helpers/itemToMovie";

export const EditMovie = ({
  item,
  setShowEdit,
}: {
  item: IMovie;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigateTo = useNavigate();
  const [movie, setMovie] = useState<IMovie>(item);

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
          setMovie({ ...movie, [e.target.name]: base64 });
        };
        reader.readAsDataURL(file);
      }
      return;
    }
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = itemToMovie(movie, movie.CollectionID);
    if (!body) return;

    async function request() {
      const req = await putItem(body, movie.ID);

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
    console.log(movie.PublishedAt);
    setMovie({
      ...movie,
      Days: new Date(movie.PublishedAt).getDay().toString() || "",
      Month: new Date(movie.PublishedAt).getMonth().toString() || "",
      Year: new Date(movie.PublishedAt).getFullYear().toString() || "",
      Tags: movie.Tags.join(","),
      Actors: movie.Actors.join(","),
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
          value={movie.Title}
          onChange={handleChange}
        />

        <div className="flex gap-x-5">
          <LabelAndImput
            label="Director"
            id="Director"
            name="Director"
            value={movie.Director}
            onChange={handleChange}
          />

          <LabelAndImput
            label="Actors"
            id="Actors"
            name="Actors"
            value={movie.Actors}
            onChange={handleChange}
            tinyInfo="Separate actors with commas."
          />
        </div>

        <LabelAndTextArea
          label="Description"
          id="Description"
          name="Description"
          value={movie.Description}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Studio"
          id="Studio"
          name="Studio"
          value={movie.Studio}
          onChange={handleChange}
        />

        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Released date</h3>
          <div className="flex w-full gap-x-5">
            <LabelAndImput
              label="Year"
              placeholder="YYYY"
              id="Year"
              name="Year"
              value={movie.Year}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Month"
              placeholder="MM"
              id="Month"
              name="Month"
              value={movie.Month}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Days"
              placeholder="DD"
              id="Days"
              name="Days"
              value={movie.Days}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="EAN"
            id="EAN"
            name="EAN"
            value={movie.EAN}
            tinyInfo="Numbers only."
            onChange={handleChange}
          />
          <LabelAndImput
            label="UPC"
            id="UPC"
            name="UPC"
            value={movie.UPC}
            onChange={handleChange}
            tinyInfo="Numbers only (check digit allowed)."
          />
        </div>

        <div className="flex gap-x-5">
          <LabelAndImput
            label="Aspect ratio"
            placeholder="16:9"
            id="AspectRatio"
            name="AspectRatio"
            value={movie.AspectRatio}
            onChange={handleChange}
          />

          <LabelAndImput
            label="Duration"
            placeholder="120 (minutes)"
            id="Duration"
            name="Duration"
            value={movie.Duration?.toString()}
            onChange={handleChange}
          />
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="Price"
            placeholder="0.00"
            id="Price"
            name="Price"
            value={movie.Price?.toString()}
            onChange={handleChange}
          />

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
              value={movie.Tags}
              onChange={handleChange}
              tinyInfo="Separate tags with commas."
            />
            <LabelAndImput
              label="Group"
              id="Group"
              name="Group"
              value={movie.Group}
              onChange={handleChange}
            />
          </div>
          <LabelAndTextArea
            label="Notes"
            id="Notes"
            name="Notes"
            value={movie.Notes}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Update movie"
          className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-40"
        />
      </form>
    </aside>
  );
};
