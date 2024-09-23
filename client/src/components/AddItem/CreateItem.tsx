import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  IBoardgame,
  IBook,
  IMovie,
  IMusic,
  IVideogame,
} from "../../types/items";

import { postItem } from "../../api/itemsReq";
import { CreateMovie } from "./CreateMovie";
import { CreateBook } from "./CreateBook";
import { CreateBoardgame } from "./CreateBoardgame";
import { itemToBook } from "../../helpers/itemToBook";
import { itemToMovie } from "../../helpers/itemToMovie";
import { itemToBoardgame } from "../../helpers/itemToBoardgame";
import { itemToMusic } from "../../helpers/itemToMusic";
import { itemToVideogame } from "../../helpers/itemToVideogame";
import { CreateVideogame } from "./CreateVideogame";
import { CreateMusic } from "./CreateMusic";

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
  const navigateTo = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!item.Title) {
      toast.error("El campo 'title' es requerido");
      return;
    }

    let bodyData: object = {};

    bodyData = itemToBook(item as IBook);

    switch (currentType) {
      case itemTypes[0]:
        bodyData = itemToBook(item as IBook);
        break;
      case itemTypes[1]:
        bodyData = itemToBoardgame(item as IBoardgame);
        break;
      case itemTypes[2]:
        bodyData = itemToMovie(item as IMovie);
        break;
      case itemTypes[3]:
        bodyData = itemToMusic(item as IMusic);
        break;
      case itemTypes[4]:
        bodyData = itemToVideogame(item as IVideogame);
        break;
    }

    if (!bodyData) {
      toast.error("Check your data");
      return;
    }

    async function request() {
      const response = await postItem(bodyData);

      if (!response.status) {
        toast.error(response.message);
        return;
      }
      toast.success("Item creado correctamente");
      navigateTo("/");
    }

    request();
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

        {currentType === itemTypes[0] && (
          <CreateBook item={item as IBook} handleChange={handleChange} />
        )}
        {currentType === itemTypes[1] && (
          <CreateBoardgame
            item={item as IBoardgame}
            handleChange={handleChange}
          />
        )}
        {currentType === itemTypes[2] && (
          <CreateMovie item={item as IMovie} handleChange={handleChange} />
        )}
        {currentType === itemTypes[3] && (
          <CreateMusic item={item as IMusic} handleChange={handleChange} />
        )}
        {currentType === itemTypes[4] && (
          <CreateVideogame
            item={item as IVideogame}
            handleChange={handleChange}
          />
        )}
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
