import { IBook } from "../../types/items";
import {
  LabelAndImage,
  LabelAndImput,
  LabelAndTextArea,
} from "../LabelAndImput";

export const CreateBook = ({
  item,
  handleChange,
}: {
  item: IBook;
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
        id="title"
        name="title"
        value={item.title}
        onChange={handleChange}
      />

      <LabelAndImput
        label="Author"
        id="author"
        name="author"
        value={item.author}
        onChange={handleChange}
      />

      <LabelAndTextArea
        label="Description"
        id="description"
        name="description"
        value={item.description}
        onChange={handleChange}
      />

      <div className="flex flex-col">
        <h3 className="text-xl font-bold">Published at</h3>
        <div className="flex w-full gap-x-5">
          <LabelAndImput
            label="Year"
            placeholder="YYYY"
            id="year"
            name="year"
            value={item.year}
            onChange={handleChange}
          />
          <LabelAndImput
            label="Month"
            placeholder="MM"
            id="month"
            name="month"
            value={item.month}
            onChange={handleChange}
          />
          <LabelAndImput
            label="Days"
            placeholder="DD"
            id="days"
            name="days"
            value={item.days}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex w-full gap-x-5">
        <LabelAndImput
          label="ISBN 13"
          id="isbn13"
          name="isbn13"
          value={item.isbn13}
          tinyInfo="Numbers only. Max 13 digits."
          onChange={handleChange}
        />
        <LabelAndImput
          label="ISBN 10"
          id="isbn10"
          name="isbn10"
          value={item.isbn10}
          onChange={handleChange}
          tinyInfo="Max 12 characters."
        />
      </div>

      <div className="flex flex-col w-full gap-x-5 lg:flex-row">
        <div className="flex w-full gap-y-1 gap-x-5">
          <LabelAndImput
            label="Pages"
            id="pages"
            name="pages"
            value={item.pages?.toString()}
            onChange={handleChange}
          />

          <LabelAndImput
            label="Price"
            placeholder="0.00"
            id="price"
            name="price"
            value={item.price?.toString()}
            onChange={handleChange}
          />
        </div>

        <LabelAndImage
          label="Image"
          id="image"
          name="image"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col w-full gap-y-1 gap-x-5">
        <div className="flex w-full gap-y-1 gap-x-5">
          <LabelAndImput
            label="Tags"
            id="tags"
            name="tags"
            value={item.tags}
            onChange={handleChange}
            tinyInfo="Separate tags with commas."
          />
          <LabelAndImput
            label="Group"
            id="group"
            name="group"
            value={item.group}
            onChange={handleChange}
          />
        </div>
        <LabelAndTextArea
          label="Notes"
          id="notes"
          name="notes"
          value={item.notes}
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
