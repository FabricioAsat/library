import { useState } from "react";
import { CreateBook } from "./CreateBook";
import {
  IBoardgame,
  IBook,
  IMovie,
  IMusic,
  IVideogame,
} from "../../types/items";
import { toast } from "sonner";

import { itemToBook } from "../../helpers/itemToBook";

const itemTypes = ["Book", "Board Game", "Movie", "Music", "Videogame"];
export const CreateItem = ({
  item,
  handleChange,
}: {
  item: IBook | IMovie | IMusic | IVideogame | IBoardgame;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}) => {
  const [currentType, setCurrentType] = useState<string>(itemTypes[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!item.title) {
      toast.error("El campo 'title' es requerido");
      return;
    }

    itemToBook(item as IBook);
  }

  return (
    <>
      <h2 className="pb-2 text-2xl font-bold text-center lg:text-start">
        Item type
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 lg:gap-x-5">
          {itemTypes.map((type) => (
            <ItemSelector
              key={type}
              type={type}
              currentType={currentType}
              setCurrentType={setCurrentType}
            />
          ))}
        </div>

        <CreateBook item={item as IBook} handleChange={handleChange} />
      </form>
    </>
  );
};

function ItemSelector({
  type,
  currentType,
  setCurrentType,
}: {
  type: string;
  currentType: string;
  setCurrentType: (type: string) => void;
}) {
  return (
    <div
      onClick={() => setCurrentType(type)}
      className="flex items-center cursor-pointer gap-x-2"
    >
      <div className="w-4 h-4 border-2 border-gray-500 rounded-full">
        <div className="w-full h-full p-0.5 bg-transparent rounded-full ">
          <div
            className={`w-full h-full rounded-full transition-colors duration-300 ease-in-out ${
              type === currentType ? "bg-sky-500" : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
      <p className="text-base font-bold">{type}</p>
    </div>
  );
}
