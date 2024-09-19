import bookImg from "../../assets/logo.svg";
import musicImg from "../../assets/music.svg";
import videogameImg from "../../assets/videogame.svg";
import boardgameImg from "../../assets/boardgame.svg";
import movieImg from "../../assets/movie.svg";

import { Item } from "../Item";
import {
  IBoardgame,
  IBook,
  IMovie,
  IMusic,
  IVideogame,
} from "../../types/items";

export const Items = ({
  books,
  music,
  videogames,
  boardGames,
  movies,
}: {
  books: IBook[];
  music: IMusic[];
  videogames: IVideogame[];
  boardGames: IBoardgame[];
  movies: IMovie[];
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
      {books.map((book) => (
        <Item
          key={book.ID}
          id={book.ID}
          title={book.Title}
          subtitle={book.Author}
          image={book.Image}
          alternativeImage={bookImg}
        />
      ))}
      {music.map((music) => (
        <Item
          key={music.ID}
          id={music.ID}
          title={music.Title}
          subtitle={music.Artist}
          image={music.Image}
          alternativeImage={musicImg}
        />
      ))}
      {videogames.map((videogame) => (
        <Item
          key={videogame.ID}
          id={videogame.ID}
          title={videogame.Title}
          subtitle={videogame.Studio}
          image={videogame.Image}
          alternativeImage={videogameImg}
        />
      ))}
      {boardGames.map((boardGame) => (
        <Item
          key={boardGame.ID}
          id={boardGame.ID}
          title={boardGame.Title}
          subtitle={boardGame.Designer}
          image={boardGame.Image}
          alternativeImage={boardgameImg}
        />
      ))}
      {movies.map((movie) => (
        <Item
          key={movie.ID}
          id={movie.ID}
          title={movie.Title}
          subtitle={movie.Director}
          image={movie.Image}
          alternativeImage={movieImg}
        />
      ))}
    </div>
  );
};
