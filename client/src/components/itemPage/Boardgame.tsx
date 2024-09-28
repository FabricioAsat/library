import { useEffect, useState } from "react";
import { getItem } from "../../api/itemsReq";
import { IBoardgame } from "../../types/items";
import { toast } from "sonner";

import boardgameImg from "../../assets/boardgame.svg";
import itemImg from "../../assets/item.svg";
import { EditBoardgame } from "./EditBoardgame";

interface IInfoShown {
  current: string;
  info: string;
}

export const Boardgame = ({
  id,
  setIsLoading,
  showEdit,
  setShowEdit,
}: {
  id: string;
  showEdit: boolean;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [item, setItem] = useState<IBoardgame | null>(null);
  const [infoShown, setInfoShown] = useState<IInfoShown>();

  useEffect(() => {
    setIsLoading(true);
    const fetchItem = async () => {
      const res = await getItem(id, "boardgame");
      if (!res.status || !res.data) {
        toast.error(res.message);
        setIsLoading(false);
        return;
      }
      setItem((res.data as IBoardgame) || null);
      setIsLoading(false);
    };

    fetchItem();
    setInfoShown({ current: "description", info: item?.Description || "" });
  }, [id]);

  const handleInfoShown = (current: string, info: string) => {
    setInfoShown({ current, info });
  };

  return (
    <>
      {!item ? (
        <div className="w-20 h-20 mx-auto my-10 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full h-full pt-6 pl-3 mb-16 md:pl-10 md:items-start md:flex-row gap-x-10">
            <img
              src={item.Image || boardgameImg}
              alt={item.Title}
              className="object-cover w-48 my-10 rounded-2xl h-60"
            />

            <div className="flex flex-col w-full md:pt-10 gap-y-5">
              <div className="flex items-center gap-x-3">
                <img src={itemImg} alt="Item img" className="h-10" />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold">{item.Title}</h2>
                  <h3 className="text-lg italic">
                    {item.Artists[0] || "Unknown"}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <section className="flex flex-col gap-y-3">
                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      {new Date(item.PublishedAt || "").getFullYear() ||
                        "Unknown year"}
                    </p>
                    <p className="italic">
                      {item.Studio + "" || "Unknown studio"}
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      Tags:{" "}
                      <i className="font-normal">
                        {item.Designers.map(
                          (tag: string, index: number) =>
                            tag + (index !== item.Tags.length - 1 ? " - " : "")
                        ) || "Unknown designers"}
                      </i>
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      Tags:{" "}
                      <i className="font-normal">
                        {item.Artists.map(
                          (tag: string, index: number) =>
                            tag + (index !== item.Tags.length - 1 ? " - " : "")
                        ) || "Unknown artists"}
                      </i>
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      EAN:{" "}
                      <i className="font-normal">{item.EAN || "Unknown EAN"}</i>
                    </p>
                    <p className="font-bold">
                      UPC:{" "}
                      <i className="font-normal">{item.UPC || "Unknown UPC"}</i>
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      Price:{" "}
                      <i className="font-normal">
                        {item.Price === 0
                          ? "0 (Free)"
                          : `$${item.Price || "Unknown price"}`}
                      </i>
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      Group:{" "}
                      <i className="font-normal">
                        {item.Group || "Unknown group"}
                      </i>
                    </p>
                  </span>

                  <span className="flex items-center gap-x-5">
                    <p className="font-bold">
                      Tags:{" "}
                      <i className="font-normal">
                        {item.Tags.map(
                          (tag: string, index: number) =>
                            tag + (index !== item.Tags.length - 1 ? " - " : "")
                        ) || "Unknown tags"}
                      </i>
                    </p>
                  </span>
                </section>

                <aside className="flex flex-col mt-10">
                  <div className="flex items-center overflow-x-auto border-b gap-x-5 border-neutral-200">
                    <button
                      onClick={() =>
                        handleInfoShown("description", item.Description)
                      }
                      disabled={item.Description.length === 0}
                      className={`text-2xl font-bold border-b-2 disabled:opacity-50 hover:bg-neutral-200 px-5 py-2 transition-colors duration-200 ease-in-out ${
                        infoShown?.current === "description"
                          ? "border-blue-500"
                          : "border-transparent opacity-50 hover:opacity-75"
                      }`}
                    >
                      Description
                    </button>

                    <button
                      onClick={() => handleInfoShown("notes", item.Notes)}
                      disabled={item.Notes.length === 0}
                      className={`text-2xl font-bold border-b-2 disabled:opacity-50 hover:bg-neutral-200 px-5 py-2 transition-colors duration-200 ease-in-out ${
                        infoShown?.current === "notes"
                          ? "border-blue-500"
                          : "border-transparent opacity-50 hover:opacity-75"
                      }`}
                    >
                      Notes
                    </button>
                  </div>

                  <p className="my-5 text-base italic">
                    {infoShown?.info || "There is no information to show"}
                  </p>
                </aside>
              </div>
            </div>
          </div>

          {showEdit && <EditBoardgame item={item} setShowEdit={setShowEdit} />}
        </>
      )}
    </>
  );
};
