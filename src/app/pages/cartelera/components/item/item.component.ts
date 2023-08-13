import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { johnWickMovie } from 'src/app/mocks/movie';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() movie: Movie = johnWickMovie;
  @Input() number = 0;

  constructor(private router: Router) {}
  goToComprarTickets() {
    this.router.navigate(['/comprar-tickets', this.number]);
  }
}
