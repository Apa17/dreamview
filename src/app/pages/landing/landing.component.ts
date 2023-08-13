import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { johnWickMovie } from 'src/app/mocks/movie';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  photo = '../../../assets/landing-background.png';
  movies: Movie[] = [];
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

  goToComprarTickets() {
    this.router.navigate(['/comprar-tickets']);
  }

  previousMovie() {
    this.index--;
  }

  nextMovie() {
    this.index++;
    console.log(this.movies);
  }
}
