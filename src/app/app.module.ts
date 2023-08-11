import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CarteleraComponent } from './pages/cartelera/cartelera.component';
import { RouterModule } from '@angular/router';
import { ComprarTicketsComponent } from './pages/comprar-tickets/comprar-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CarteleraComponent,
    ComprarTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
