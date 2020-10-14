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
    disponible: 'si ',

  },
  {
    titulo: 'Ozark' ,
    genero: 'Drama, Suspenso' ,
    anio: 2017 ,
    plataforma: 'Netflix' ,
    image: 'assets/img/oz-1.jpg',
    disponible: 'si' ,

  },
  {
    titulo: 'Game of Thrones' ,
    genero: 'Aventura, Drama' ,
    anio: 2022 ,
    plataforma: 'Hbo' ,
    image: 'assets/img/gm-1.jpg',
    disponible: 'si' ,

  }
];
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
