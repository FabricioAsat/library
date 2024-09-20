interface IBaseItem {
  collection_id: string;
  title: string;
  description: string;
  published_at: Date;
  days: string;
  month: string;
  year: string;
  image: string;
  tags: string;

  group: string;
  notes: string;
  price: number;
}

export interface IBook extends IBaseItem {
  author: string;
  isbn13: string;
  isbn10: string;
  pages: number;
}

export interface IMovie extends IBaseItem {
  director: string;
  actors: string[];
  ean: string;
  upc: string;
  aspect_ratio: string;
  duration: number;
  age: number;
}

export interface IMusic extends IBaseItem {
  artist: string;
  studio: string;
  length: number;
  discs: number;
  ean: string;
  upc: string;
}

export interface IVideogame extends IBaseItem {
  platform: string;
  studio: string;
  ean: string;
  upc: string;
  esrb: string;
}

export interface IBoardgame extends IBaseItem {
  Designer: string;
  Artist: string;
  PlayTime: number;
  Age: number;
  NumberPlayers: number;
  EAN: string;
  UPC: string;
}
