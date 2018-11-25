import { Component, OnInit } from '@angular/core';

import { Movie } from '../shared/movie';
import { combineLatest, Observable } from 'rxjs';
import { MovieSearchService } from '../shared/movie-search.service';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  public featured: string[] = [
    'Bridge of Spies',
    'The Shawshank Redemption'
  ];
  public movies: Observable<Movie[]>;
  loading = false;

  constructor(private movieSearchService: MovieSearchService) {
  }

  ngOnInit() {
    this.loading = true;
    this.movies = this.getFeaturedMovies();
  }

  getFeaturedMovies(): Observable<Movie[]> {
    const batch: Observable<Movie>[] = [];
    this.featured.forEach((title: string) => {
      batch.push(this.movieSearchService.searchMovie(title, 'full'));
    });
    return combineLatest(batch);
  }

}
