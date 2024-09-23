import { IVideogame } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";

export const CreateVideogame = ({
  item,
  handleChange,
}: {
  item: IVideogame;
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

      <LabelAndImput
        label="Platform"
        id="Platform"
        name="Platform"
        value={item.Platform}
        onChange={handleChange}
      />

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
        <h3 className="text-xl font-bold">Released date</h3>
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

      <div className="flex w-full gap-x-5">
        <LabelAndImput
          label="ESRB"
          id="ESRB"
          name="ESRB"
          value={item.ESRB}
          onChange={handleChange}
        />

        <LabelAndImput
          label="Price"
          placeholder="0.00"
          id="Price"
          name="Price"
          value={item.Price?.toString()}
          onChange={handleChange}
        />
      </div>
      <LabelAndImage
        label="Image"
        id="image"
        name="image"
        onChange={handleChange}
      />

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
          id="Notes"
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
