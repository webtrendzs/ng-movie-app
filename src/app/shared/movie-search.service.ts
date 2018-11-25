import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';

import { MovieResourceService } from '../omdb-api/movie-resource.service';
import { Movie } from './movie';
import { catchError, flatMap, take } from 'rxjs/operators';

@Injectable()
export class MovieSearchService {
  public movie: Subject<Movie> = new Subject();

  constructor(protected movieResource: MovieResourceService) {
  }

  public searchMovie(term: string, plot: string): Observable<Movie | any> {
    return this.movieResource.getMovie(term, plot).pipe(
      catchError(this.handleError('searchMovie')),
      flatMap((row: any) =>  {
        // catch movie not found
        if (row.Error) {
          return throwError(row.Error);
        }
        return of(new Movie(row));
        }), take(1));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T | unknown> => {
      return of({Error: error, Response: false});
    };
  }
}
