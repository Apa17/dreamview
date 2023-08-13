import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { johnWickMovie } from 'src/app/mocks/movie';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import {
  generateAsientos,
  generateFunciones,
  randomizeNumber
} from 'src/app/shared/helper';

@Component({
  selector: 'app-comprar-tickets',
  templateUrl: './comprar-tickets.component.html',
  styleUrls: ['./comprar-tickets.component.scss']
})
export class ComprarTicketsComponent implements OnInit, OnDestroy {
  movies: Movie[];
  funciones: string[][];
  asientos: string[][][];
  indexPelicula = 0;
  indexFuncion = 0;
  continuarPresionado = false;
  firstFormVisible = true;
  secondFormVisible = false;
  ticketComprado = false;
  persona = 'Matias';
  dateticket = '30/01/2021';
  hourticket = '19:00';
  subtext = 'Selecciona una funcion';
  popVisible = true;
  s: Subscription = new Subscription();

  comprarTicketsForm = this.fb.group({
    pelicula: new FormControl<number | null>(null, [Validators.required]),
    funcion: new FormControl<number | null>(null, [Validators.required]),
    asiento: new FormControl<string | null>(null, [Validators.required])
  });

  personaForm = this.fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private movieservice: MoviesService
  ) {
    this.movies = [johnWickMovie];
    this.funciones = [];
    this.asientos = [];
  }

  ngOnInit() {
    this.s.add(
      this.movieservice.getMovies().subscribe((peliculas) => {
        this.movies = this.movies.concat(peliculas);
        for (let i = 0; i < this.movies.length; i++) {
          const asientosxfunciones: string[][] = [];
          const aux = generateFunciones(
            randomizeNumber(1, 10),
            randomizeNumber(1, 5)
          );
          this.funciones.push(aux);
          for (let i = 0; i < aux.length; i++)
            asientosxfunciones.push(generateAsientos());
          this.asientos.push(asientosxfunciones);
        }
      })
    );
    this.s.add(
      this.route.params.subscribe((params) => {
        if ('' === params['id']) return;
        this.indexPelicula = Number(params['id']);
        this.comprarTicketsForm.get('pelicula')?.patchValue(this.indexPelicula);
      })
    );
  }

  get pelicula() {
    return this.comprarTicketsForm.get('pelicula');
  }

  get funcion() {
    return this.comprarTicketsForm.get('funcion');
  }

  get asiento() {
    return this.comprarTicketsForm.get('asiento');
  }

  get nombre() {
    return this.personaForm.get('nombre');
  }

  get email() {
    return this.personaForm.get('email');
  }

  get telefono() {
    return this.personaForm.get('telefono');
  }

  updateIndexPelicula() {
    if (this.pelicula?.value) this.indexPelicula = this.pelicula?.value;
  }

  updateIndexFuncion() {
    if (this.funcion?.value) this.indexFuncion = this.funcion?.value;
  }

  continuar() {
    this.continuarPresionado = true;
    if (this.comprarTicketsForm.invalid) return;
    this.firstFormVisible = false;
    this.secondFormVisible = true;
    this.subtext = 'Completa tu información personal';

    this.popVisible = false;
  }

  public findInvalidControls() {
    const controls = this.personaForm.controls;
    console.log(controls);
  }

  finalizar() {
    console.log(this.personaForm);
    this.findInvalidControls();
    if (this.personaForm.invalid) return;
    this.secondFormVisible = false;
    this.ticketComprado = true;
    this.persona = this.nombre?.value?.split(' ')[0] || '';
    this.dateticket =
      this.funciones[this.indexPelicula][this.indexFuncion].split(' ')[0];
    this.hourticket =
      this.funciones[this.indexPelicula][this.indexFuncion].split(' ')[2];
  }

  volver() {
    this.firstFormVisible = true;
    this.secondFormVisible = false;
    this.subtext = 'Selecciona una funcion';
    this.popVisible = false;
  }

  comparePeliculaId(object1: number, object2: number) {
    console.log('comparePeliculaId', object1, object2);
    return (
      (object1 && object2 && object1 === object2) ||
      (object1 === 0 && object2 === 0)
    );
  }

  ngOnDestroy() {
    this.s.unsubscribe();
  }
}
