import { Imovie } from './imovie';
import { Rating } from './rating';

export class Movie implements Imovie {
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

  constructor(row: any) {
    if (!row) {
      throw new Error('Error creating movie. No data');
    } else {
      this.title = row.Title;
      this.year = row.Year;
      this.rated = row.Rated;
      this.released = row.Released;
      this.runtime = row.Runtime;
      this.genre = (row.Genre || '').split(',');
      this.director = (row.Director || '').split(',');
      this.writer = (row.Writer || '').split(',');
      this.actors = (row.Actors || '').split(',');
      this.plot = row.Plot;
      this.language = (row.Language || '').split(',');
      this.awards = row.Awards;
      this.poster = row.Poster;
      this.imdbRating = row.imdbRating;
      this.imdbVotes = row.imdbVotes;
      this.type = row.Type;
      this.setRatings(row.Ratings);
    }

  }

  setRatings(ratings) {
    if (Array.isArray(ratings) && ratings.length > 0) {
      this.ratings = ratings.map((rating) => new Rating(rating));
    } else {
      this.ratings = [];
    }
  }
}
