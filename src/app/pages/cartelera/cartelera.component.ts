import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { johnWickMovie } from 'src/app/mocks/movie';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {
  photo = '../../../assets/landing-background.png';
  movies: Movie[] = [];
  numbersTopRow = [0, 1, 2, 3, 4];
  numbersBottomRow = [5, 6, 7, 8, 9];
  index = 0;
  constructor(
    private router: Router,
    private movieservice: MoviesService
  ) {
    this.movies = [johnWickMovie];
  }

  ngOnInit() {
    this.movieservice
      .getMovies()
      .subscribe((peliculas) => (this.movies = this.movies.concat(peliculas)));
  }
}
