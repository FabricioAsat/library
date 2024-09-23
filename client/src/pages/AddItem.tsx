import { useEffect, useState } from "react";
import { toast } from "sonner";

import { IBoardgame, IBook, IMovie, IMusic, IVideogame } from "../types/items";
import { ICollection } from "../types/collections";

import { Container } from "../components/Container";
import { CollectionSelector } from "../components/Library/CollectionSelector";
import { getCollections } from "../api/collectionReq";
import { NoCollections } from "../components/AddItem/NoCollections";
import { CreateItem } from "../components/AddItem/CreateItem";

export const AddItem = () => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [isFetchingCollections, setIsFetchingCollections] = useState(false);
  const [currentCollection, setCurrentCollection] = useState<
    ICollection | undefined
  >(undefined);
  const [item, setItem] = useState<
    IBook | IMovie | IMusic | IVideogame | IBoardgame | object
  >({});

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
          setItem({ ...item, [e.target.name]: base64 });
        };
        reader.readAsDataURL(file);
      }
      return;
    }
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // Fetch collections from the API
  useEffect(() => {
    const fetchCollections = async () => {
      const data = await getCollections();

      if (!data.status) {
        toast.error(data.message);
        setIsFetchingCollections(false);
        return;
      }
      setCollections(data.data || []);
      setIsFetchingCollections(false);
    };
    setIsFetchingCollections(true);
    fetchCollections();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold">Agregar un item</h1>
      <CollectionSelector
        collections={collections}
        isFetchingCollections={isFetchingCollections}
        setCurrentCollection={setCurrentCollection}
        currentCollection={currentCollection}
        undefinedValue=""
      />

      {collections.length === 0 ? <NoCollections /> : <></>}
      <CreateItem item={item as IBook} handleChange={handleChange} />
    </Container>
  );
};
