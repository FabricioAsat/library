import { IBoardgame } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";

export const CreateBoardgame = ({
  item,
  handleChange,
}: {
  item: IBoardgame;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <div className="flex flex-col px-4 pt-10 pb-20 overflow-x-hidden gap-y-6 gap-x-5">
      <LabelAndImput
        label="Title"
        id="Title"
        name="Title"
        value={item.Title}
        onChange={handleChange}
      />

      <div className="flex gap-x-5">
        <LabelAndImput
          label="Designers"
          id="Designers"
          name="Designers"
          value={item.Designers}
          onChange={handleChange}
          tinyInfo="Separate actors with commas."
        />

        <LabelAndImput
          label="Actors"
          id="Actors"
          name="Actors"
          value={item.Artists}
          onChange={handleChange}
          tinyInfo="Separate actors with commas."
        />
      </div>

      <LabelAndTextArea
        label="Description"
        id="Description"
        name="Description"
        value={item.Description}
        onChange={handleChange}
      />

      <LabelAndImput
        label="Studio"
        id="Studio"
        name="Studio"
        value={item.Studio}
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
            value={item.Year}
            onChange={handleChange}
          />
          <LabelAndImput
            label="Month"
            placeholder="MM"
            id="Month"
            name="Month"
            value={item.Month}
            onChange={handleChange}
          />
          <LabelAndImput
            label="Days"
            placeholder="DD"
            id="Days"
            name="Days"
            value={item.Days}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex w-full gap-x-5">
        <LabelAndImput
          label="EAN"
          id="EAN"
          name="EAN"
          value={item.EAN}
          tinyInfo="Numbers only."
          onChange={handleChange}
        />
        <LabelAndImput
          label="UPC"
          id="UPC"
          name="UPC"
          value={item.UPC}
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
          value={item.PlayTime?.toString()}
          onChange={handleChange}
        />

        <LabelAndImput
          label="# of players"
          placeholder="1-4"
          id="NumberPlayers"
          name="NumberPlayers"
          value={item.NumberPlayers?.toString()}
          onChange={handleChange}
        />
      </div>

      <div className="flex w-full gap-x-5">
        <LabelAndImput
          label="Price"
          placeholder="0.00"
          id="Price"
          name="Price"
          value={item.Price?.toString()}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Age group"
          placeholder="+12"
          id="Age"
          name="Age"
          value={item.Age?.toString()}
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
            value={item.Tags}
            onChange={handleChange}
            tinyInfo="Separate tags with commas."
          />
          <LabelAndImput
            label="Group"
            id="Group"
            name="Group"
            value={item.Group}
            onChange={handleChange}
          />
        </div>
        <LabelAndTextArea
          label="Notes"
          id="Gotes"
          name="Notes"
          value={item.Notes}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="Create book"
        className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-40"
      />
    </div>
  );
};
