import { Rating } from './rating';

export interface Imovie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string[];
  director: string[];
  writer: string[];
  actors: string[];
  plot: string;
  language: string[];
  awards: string;
  poster: string;
  ratings: Rating[];
  imdbRating: number;
  imdbVotes: string;
  type: string;
  setRatings(ratings: any[]);
}
