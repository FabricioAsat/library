import { useState } from "react";
import { ICollection } from "../../types/collections";

export const CollectionSelector = ({
  collections,
  isFetchingCollections,
  setCurrentCollection,
  currentCollection,
}: {
  collections: ICollection[];
  isFetchingCollections: boolean;
  setCurrentCollection: (collection: ICollection | undefined) => void;
  currentCollection: ICollection | undefined;
}) => {
  const [showCollection, setShowCollection] = useState(false);

  const handleCollection = (collection: ICollection | undefined) => {
    setCurrentCollection(collection);
    setShowCollection(false);
  };

  return (
    <div className="relative w-full gap-2 my-5 bg-neutral-100">
      {isFetchingCollections ? (
        <button className="flex items-center justify-start w-full gap-2 p-2 text-lg font-bold capitalize rounded-md cursor-default text-start">
          <div className="w-6 h-6 mx-auto border-4 border-t-4 rounded-full border-t-blue-500 animate-spin"></div>
          <p className="w-full italic text-gray-400 text-start">
            Cargando colecciones...
          </p>
        </button>
      ) : (
        <>
          <button
            onClick={() => setShowCollection(!showCollection)}
            className="w-full p-2 text-lg font-bold rounded-md text-start"
          >
            ▷ {currentCollection?.Name || "Todos mis items"}
          </button>
          {showCollection && (
            <div className="absolute flex flex-col w-full py-2 transition-opacity duration-300 gap-y-2 bg-neutral-100">
              <button
                onClick={() => handleCollection(undefined)}
                className={`w-full px-2 py-1 text-lg font-bold rounded-md text-start ${
                  currentCollection === undefined
                    ? "text-blue-500"
                    : "hover:text-gray-500"
                }`}
              >
                Todos mis items
              </button>
              {collections.map((collection) => (
                <button
                  key={collection.ID}
                  onClick={() => handleCollection(collection)}
                  className={`w-full px-2 py-1 text-lg font-bold rounded-md text-start ${
                    currentCollection === collection
                      ? "text-blue-500"
                      : "hover:text-gray-500"
                  }`}
                >
                  {collection.Name}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
