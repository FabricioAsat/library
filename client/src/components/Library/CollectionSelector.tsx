import { useState } from "react";

const collections = [
  "collection1",
  "collection2",
  "collection3",
  "collection4",
  "collection5",
  "collection6",
  "collection7",
  "collection8",
  "collection9",
  "collection10",
];

export const CollectionSelector = () => {
  const [showCollection, setShowCollection] = useState(false);
  const [currentCollection, setCurrentCollection] = useState(collections[0]);

  const handleCollection = (collection: string) => {
    setCurrentCollection(collection);
    setShowCollection(false);
  };

  return (
    <div className="relative gap-2 my-5 bg-neutral-100 w-full max-w-[768px]">
      <button
        onClick={() => setShowCollection(!showCollection)}
        className="w-full p-2 text-lg font-bold capitalize rounded-md text-start"
      >
        {currentCollection}
      </button>
      {showCollection && (
        <div className="absolute w-full max-w-[768px] transition-opacity duration-300 bg-neutral-100">
          {collections.slice(0, 5).map((collection) => (
            <button
              key={collection}
              onClick={() => handleCollection(collection)}
              className={`w-full p-2 text-lg font-bold capitalize rounded-md text-start ${
                currentCollection === collection ? "text-blue-500" : ""
              }`}
            >
              {collection}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
