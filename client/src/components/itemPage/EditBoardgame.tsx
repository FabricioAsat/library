import { useEffect, useState } from "react";
import { IBoardgame } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";
import { putItem } from "../../api/itemsReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import closeImg from "../../assets/close.svg";
import { itemToBoardgame } from "../../helpers/itemToBoardgame";

export const EditBoardgame = ({
  item,
  setShowEdit,
}: {
  item: IBoardgame;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigateTo = useNavigate();
  const [boardgame, setBoardgame] = useState<IBoardgame>(item);

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
          setBoardgame({ ...boardgame, [e.target.name]: base64 });
        };
        reader.readAsDataURL(file);
      }
      return;
    }
    setBoardgame({ ...boardgame, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = itemToBoardgame(boardgame, boardgame.CollectionID);
    console.log(body);
    if (!body) return;

    async function request() {
      const req = await putItem(body, boardgame.ID);

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
    console.log(boardgame.PublishedAt);
    setBoardgame({
      ...boardgame,
      Days: new Date(boardgame.PublishedAt).getDay().toString() || "",
      Month: new Date(boardgame.PublishedAt).getMonth().toString() || "",
      Year: new Date(boardgame.PublishedAt).getFullYear().toString() || "",
      Tags: boardgame.Tags.join(","),
      Artists: boardgame.Artists.join(","),
      Designers: boardgame.Designers.join(","),
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
          value={boardgame.Title}
          onChange={handleChange}
        />

        <div className="flex gap-x-5">
          <LabelAndImput
            label="Designers"
            id="Designers"
            name="Designers"
            value={boardgame.Designers}
            onChange={handleChange}
            tinyInfo="Separate designers with commas."
          />

          <LabelAndImput
            label="Artists"
            id="Artists"
            name="Artists"
            value={boardgame.Artists}
            onChange={handleChange}
            tinyInfo="Separate artists with commas."
          />
        </div>

        <LabelAndTextArea
          label="Description"
          id="Description"
          name="Description"
          value={boardgame.Description}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Studio"
          id="Studio"
          name="Studio"
          value={boardgame.Studio}
          onChange={handleChange}
        />

        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Published date</h3>
          <div className="flex w-full gap-x-5">
            <LabelAndImput
              label="Year"
              placeholder="YYYY"
              id="Year"
              name="Year"
              value={boardgame.Year}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Month"
              placeholder="MM"
              id="Month"
              name="Month"
              value={boardgame.Month}
              onChange={handleChange}
            />
            <LabelAndImput
              label="Days"
              placeholder="DD"
              id="Days"
              name="Days"
              value={boardgame.Days}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="EAN"
            id="EAN"
            name="EAN"
            value={boardgame.EAN}
            tinyInfo="Numbers only."
            onChange={handleChange}
          />
          <LabelAndImput
            label="UPC"
            id="UPC"
            name="UPC"
            value={boardgame.UPC}
            onChange={handleChange}
            tinyInfo="Numbers only (check digit allowed)."
          />
        </div>

        <div className="flex gap-x-5">
          <LabelAndImput
            label="Play time"
            placeholder="120 (minutes)"
            id="PlayTime"
            name="PlayTime"
            value={boardgame.PlayTime?.toString()}
            onChange={handleChange}
          />

          <LabelAndImput
            label="# of players"
            placeholder="1-4"
            id="NumberPlayers"
            name="NumberPlayers"
            value={boardgame.NumberPlayers?.toString()}
            onChange={handleChange}
          />
        </div>

        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="Price"
            placeholder="0.00"
            id="Price"
            name="Price"
            value={boardgame.Price?.toString()}
            onChange={handleChange}
          />

          <LabelAndImput
            label="Age group"
            placeholder="+12"
            id="Age"
            name="Age"
            value={boardgame.Age?.toString()}
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
              value={boardgame.Tags}
              onChange={handleChange}
              tinyInfo="Separate tags with commas."
            />
            <LabelAndImput
              label="Group"
              id="Group"
              name="Group"
              value={boardgame.Group}
              onChange={handleChange}
            />
          </div>
          <LabelAndTextArea
            label="Notes"
            id="Gotes"
            name="Notes"
            value={boardgame.Notes}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Update boardgame"
          className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-60"
        />
      </form>
    </aside>
  );
};
