import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { ComprarTicketsComponent } from './pages/comprar-tickets/comprar-tickets.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'comprar-tickets', component: ComprarTicketsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
