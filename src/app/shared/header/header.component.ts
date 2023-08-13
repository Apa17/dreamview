import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('');
  }

  goToComprarTickets() {
    this.router.navigateByUrl('comprar-tickets/');
  }
}
