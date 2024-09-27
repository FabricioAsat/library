import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { Container } from "../components/Container";
import { Header } from "../components/itemPage/Header";
import { Book } from "../components/itemPage/Book";
import { Music } from "../components/itemPage/Music";
import { Movie } from "../components/itemPage/Movie";
import { Boardgame } from "../components/itemPage/Boardgame";
import { Videogame } from "../components/itemPage/Videogame";

export const ItemP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { id } = useParams();

  return (
    <Container>
      <div className="relative flex flex-col items-center w-full h-full md:items-start">
        <Header isLoading={isLoading} type={type} id={id as string} />

        {type === "book" ? (
          <Book id={id as string} setIsLoading={setIsLoading} />
        ) : type === "music" ? (
          <Music id={id as string} setIsLoading={setIsLoading} />
        ) : type === "videogame" ? (
          <Videogame id={id as string} setIsLoading={setIsLoading} />
        ) : type === "movie" ? (
          <Movie id={id as string} setIsLoading={setIsLoading} />
        ) : type === "boardgame" ? (
          <Boardgame id={id as string} setIsLoading={setIsLoading} />
        ) : null}
      </div>
    </Container>
  );
};
