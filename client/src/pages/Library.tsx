import { useEffect, useState } from "react";

import searchImg from "../assets/search.svg";

import { Container } from "../components/Container";
import { CollectionSelector } from "../components/Library/CollectionSelector";
import { Items } from "../components/Library/Items";
import { getAllItems, getItemsByCollection } from "../api/itemsReq";
import { getCollections } from "../api/collectionReq";
import { IBoardgame, IBook, IMovie, IMusic, IVideogame } from "../types/items";
import { ICollection } from "../types/collections";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Library = () => {
  const [isFetchingItems, setIsFetchingItems] = useState(false);
  const [isFetchingCollections, setIsFetchingCollections] = useState(false);

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<IBook[]>([]);
  const [music, setMusic] = useState<IMusic[]>([]);
  const [videogames, setVideogames] = useState<IVideogame[]>([]);
  const [boardGames, setBoardGames] = useState<IBoardgame[]>([]);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [currentCollection, setCurrentCollection] = useState<ICollection>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Fetch items from the API
  useEffect(() => {
    if (currentCollection) return;
    const fetchItems = async () => {
      const data = await getAllItems();

      if (!data.status) {
        setIsFetchingItems(false);
        toast.error(data.message);
        return;
      }
      setBooks(data.data?.books || []);
      setMusic(data.data?.musics || []);
      setVideogames(data.data?.videogames || []);
      setBoardGames(data.data?.boardGames || []);
      setMovies(data.data?.movies || []);
      setIsFetchingItems(false);
    };
    setIsFetchingItems(true);
    fetchItems();
  }, [currentCollection]);

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

  // Fetch items by collectionID
  useEffect(() => {
    if (!currentCollection) return;
    const fetchItems = async () => {
      const data = await getItemsByCollection(currentCollection.ID);

      if (!data.status) {
        setIsFetchingItems(false);
        toast.error(data.message);
        return;
      }
      setBooks(data.data?.books || []);
      setMusic(data.data?.musics || []);
      setVideogames(data.data?.videogames || []);
      setBoardGames(data.data?.boardGames || []);
      setMovies(data.data?.movies || []);
      setIsFetchingItems(false);
    };
    setIsFetchingItems(true);
    fetchItems();
  }, [currentCollection]);

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full gap-2 max-w-[768px]"
      >
        <label htmlFor="search">
          <img src={searchImg} alt="search" className="w-8 h-8" />
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Start searching..."
          className="w-full p-2 text-lg font-bold rounded-md outline-none placeholder:italic"
          autoComplete="off"
        />
      </form>

      <CollectionSelector
        collections={collections}
        isFetchingCollections={isFetchingCollections}
        setCurrentCollection={setCurrentCollection}
        currentCollection={currentCollection}
        undefinedValue=""
      />

      {isFetchingItems && isFetchingCollections ? (
        <span className="w-16 h-16 mx-auto border-4 border-t-4 rounded-full border-t-blue-500 animate-spin"></span>
      ) : books.length > 0 ||
        music.length > 0 ||
        videogames.length > 0 ||
        boardGames.length > 0 ||
        movies.length > 0 ? (
        <Items
          books={books}
          music={music}
          videogames={videogames}
          boardGames={boardGames}
          movies={movies}
        />
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-2xl font-bold text-center">
            No hay items en la biblioteca
          </p>
          <nav className="flex gap-5 mt-5">
            <Link
              to="/additem"
              className="px-4 py-2 font-bold text-white rounded-md bg-neutral-800"
            >
              Agregar item
            </Link>
            <Link
              to="/addcollection"
              className="px-4 py-2 font-bold text-white rounded-md bg-neutral-800"
            >
              Agregar colección
            </Link>
          </nav>
        </div>
      )}
    </Container>
  );
};
