import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MovieSearchService } from '../shared/movie-search.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './search.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  public movie: Movie;
  public searchText = '';
  public plot = 'short';
  public error = '';
  public searching = false;

  constructor(private movieSearchService: MovieSearchService) {
  }

  ngOnInit() {
  }

  public search() {
    this.searching = true;
    this.movieSearchService.searchMovie(this.searchText, this.plot).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
      }
      this.searching = false;
      this.error = undefined;
    }, (error) => {
      console.log(error);
      this.searching = false;
      this.error = error;
    });
  }

}
