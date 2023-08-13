import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { ComprarTicketsComponent } from './pages/comprar-tickets/comprar-tickets.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'comprar-tickets/:id', component: ComprarTicketsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
