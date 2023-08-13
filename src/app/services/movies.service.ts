import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movies';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private httpClient: HttpClient) {}
  movies: BehaviorSubject<Movie[]> | undefined;

  getMovies(): Observable<Movie[]> {
    //https://raw.githubusercontent.com/wtuydev/test-json/main/films.json
    if (this.movies) {
      return this.movies.asObservable();
    }
    return this.httpClient
      .get<{ movies: Movie[]; length: number }>(
        'https://raw.githubusercontent.com/wtuydev/test-json/main/films.json'
      )
      .pipe(
        map((data: { movies: Movie[]; length: number }) => {
          this.movies = new BehaviorSubject<Movie[]>(data.movies);
          return data.movies;
        })
      );
  }
}
