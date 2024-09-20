export interface IResponseAllItems {
  status: boolean;
  message: string;
  data: {
    books: IBook[];
    musics: IMusic[];
    videogames: IVideogame[];
    boardGames: IBoardgame[];
    movies: IMovie[];
  } | null;
}

export interface IResponseItem {
  message: string;
  data: IBook | IMusic | IVideogame | IBoardgame | IMovie | null;
}

export interface IResponseItems {
  message: string;
  data: (IBook | IMusic | IVideogame | IBoardgame | IMovie)[] | null;
  status: boolean;
}

export interface IResponseCollections {
  message: string;
  data: ICollection[] | null;
  status: boolean;
}
