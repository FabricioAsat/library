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
    <div className="flex flex-col gap-10">
      {books.length > 0 && (
        <section className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold">Books</h2>
          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {books.map((book) => (
              <Item
                type="book"
                key={book.ID}
                id={book.ID}
                title={book.Title}
                subtitle={book.Author}
                image={book.Image}
                alternativeImage={bookImg}
              />
            ))}
          </div>
        </section>
      )}

      {music.length > 0 && (
        <section className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold">Musics</h2>
          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {music.map((music) => (
              <Item
                type="music"
                key={music.ID}
                id={music.ID}
                title={music.Title}
                subtitle={music.Artist}
                image={music.Image}
                alternativeImage={musicImg}
              />
            ))}
          </div>
        </section>
      )}

      {videogames.length > 0 && (
        <section className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold">Videogames</h2>
          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {videogames.map((videogame) => (
              <Item
                type="videogame"
                key={videogame.ID}
                id={videogame.ID}
                title={videogame.Title}
                subtitle={videogame.Studio}
                image={videogame.Image}
                alternativeImage={videogameImg}
              />
            ))}
          </div>
        </section>
      )}

      {boardGames.length > 0 && (
        <section className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold">Boardgames</h2>
          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {boardGames.map((boardGame) => (
              <Item
                type="boardgame"
                key={boardGame.ID}
                id={boardGame.ID}
                title={boardGame.Title}
                subtitle={
                  boardGame?.Designers?.length > 0
                    ? boardGame.Designers[0]
                    : "Desconocido"
                }
                image={boardGame.Image}
                alternativeImage={boardgameImg}
              />
            ))}
          </div>
        </section>
      )}

      {movies.length > 0 && (
        <section className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold">Movies</h2>
          <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
            {movies.map((movie) => (
              <Item
                type="movie"
                key={movie.ID}
                id={movie.ID}
                title={movie.Title}
                subtitle={movie.Director}
                image={movie.Image}
                alternativeImage={movieImg}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
