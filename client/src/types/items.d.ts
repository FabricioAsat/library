interface IBaseItem {
  ID: string;
  CollectionID: string;
  Title: string;
  Description: string;
  PublishedAt: Date;
  Image: string;
  Tags: string[];
  Group: string;
  Notes: string;
  Price: number;
}

export interface IBook extends IBaseItem {
  Author: string;
  ISBN13: string;
  ISBN10: string;
  Pages: number;
}

export interface IMovie extends IBaseItem {
  Director: string;
  Actors: string[];
  EAN: string;
  UPC: string;
  AspectRatio: string;
  Duration: number;
  Age: number;
}

export interface IMusic extends IBaseItem {
  Artist: string;
  Studio: string;
  Length: number;
  Discs: number;
  EAN: string;
  UPC: string;
}

export interface IVideogame extends IBaseItem {
  Platform: string;
  Studio: string;
  EAN: string;
  UPC: string;
  ESRB: string;
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
