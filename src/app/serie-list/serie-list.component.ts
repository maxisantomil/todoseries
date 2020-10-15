import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [
    {
    titulo: 'Stranger Things' ,
    genero: 'Drama, Misterio, Ciencia Ficcion' ,
    anio: 2016 ,
    plataforma: 'Netflix' ,
    image: 'assets/img/str-1.jpg',
    disponible: true,
    gusta: 0.9,

  },
  {
    titulo: 'Ozark' ,
    genero: 'Drama, Suspenso' ,
    anio: 2020 ,
    plataforma: 'Netflix' ,
    image: 'assets/img/oz-1.jpg',
    disponible: true ,
    gusta: 0.75,

  },
  {
    titulo: 'Game of Thrones' ,
    genero: 'Aventura, Drama' ,
    anio: 2022 ,
    plataforma: 'Hbo' ,
    image: 'assets/img/gm-1.jpg',
    disponible: true ,
    gusta: 0.95,

  },
  {
    titulo: 'The Boys' ,
    genero: 'Drama, Ciencia Ficcion' ,
    anio: 2019 ,
    plataforma: 'Amazon Prime' ,
    image: 'assets/img/boys-1.jpg',
    disponible: true ,
    gusta: 0.80,

  }
];
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
