import { useEffect, useState } from "react";
import { IVideogame } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";
import { putItem } from "../../api/itemsReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import closeImg from "../../assets/close.svg";
import { itemToVideogame } from "../../helpers/itemToVideogame";

export const EditVideogame = ({
  item,
  setShowEdit,
}: {
  item: IVideogame;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigateTo = useNavigate();
  const [videogame, setVideogame] = useState<IVideogame>(item);

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
          setVideogame({ ...videogame, [e.target.name]: base64 });
        };
        reader.readAsDataURL(file);
      }
      return;
    }
    setVideogame({ ...videogame, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = itemToVideogame(videogame, videogame.CollectionID);
    console.log(body);
    if (!body) return;

    async function request() {
      const req = await putItem(body, videogame.ID);

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
    console.log(videogame.PublishedAt);
    setVideogame({
      ...videogame,
      Days: new Date(videogame.PublishedAt).getDay().toString() || "",
      Month: new Date(videogame.PublishedAt).getMonth().toString() || "",
      Year: new Date(videogame.PublishedAt).getFullYear().toString() || "",
      Tags: videogame.Tags.join(","),
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
          value={videogame.Title}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Platform"
          id="Platform"
          name="Platform"
          value={videogame.Platform}
          onChange={handleChange}
        />

        <LabelAndTextArea
          label="Description"
          id="Description"
          name="Description"
          value={videogame.Description}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Studio"
          id="Studio"
          name="Studio"
          value={videogame.Studio}
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
              value={videogame.Year}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Month"
              placeholder="MM"
              id="Month"
              name="Month"
              value={videogame.Month}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Days"
              placeholder="DD"
              id="Days"
              name="Days"
              value={videogame.Days}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="EAN"
            id="EAN"
            name="EAN"
            value={videogame.EAN}
            tinyInfo="Numbers only."
            onChange={handleChange}
          />
          <LabelAndImput
            label="UPC"
            id="UPC"
            name="UPC"
            value={videogame.UPC}
            onChange={handleChange}
            tinyInfo="Numbers only (check digit allowed)."
          />
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="ESRB"
            id="ESRB"
            name="ESRB"
            value={videogame.ESRB}
            onChange={handleChange}
          />

          <LabelAndImput
            label="Price"
            placeholder="0.00"
            id="Price"
            name="Price"
            value={videogame.Price?.toString()}
            onChange={handleChange}
          />
        </div>
        <LabelAndImage
          label="Image"
          id="Image"
          name="Image"
          onChange={handleChange}
        />

        <div className="flex flex-col w-full gap-y-1 gap-x-5">
          <div className="flex w-full gap-y-1 gap-x-5">
            <LabelAndImput
              label="Tags"
              id="Tags"
              name="Tags"
              value={videogame.Tags}
              onChange={handleChange}
              tinyInfo="Separate tags with commas."
            />
            <LabelAndImput
              label="Group"
              id="Group"
              name="Group"
              value={videogame.Group}
              onChange={handleChange}
            />
          </div>
          <LabelAndTextArea
            label="Notes"
            id="Notes"
            name="Notes"
            value={videogame.Notes}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Update videogame"
          className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-60"
        />
      </form>
    </aside>
  );
};
