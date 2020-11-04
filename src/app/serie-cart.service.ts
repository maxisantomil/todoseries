import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Serie } from './serie-list/Serie';

@Injectable({
  providedIn: 'root'
})


export class SerieCartService {

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
  },
  {
    titulo: 'The Mandalorian' ,
    genero: 'Drama, Ciencia Ficcion' ,
    anio: 2019 ,
    plataforma: 'Disney +' ,
    image: 'assets/img/mando-1.jpg',
    disponible: true ,
    gusta: 0.80,
  },
  {
    titulo: 'Peaky Blinders' ,
    genero: 'Drama' ,
    anio: 2013 ,
    plataforma: 'BBC' ,
    image: 'assets/img/peaky-1.jpg',
    disponible: true ,
    gusta: 0.80,

  }
];

  private _favoriteList: Serie[]= [];

  favoriteList: BehaviorSubject<Serie[]> = new BehaviorSubject([]);

  constructor() { }

  agregarfavorito(serie: Serie) {
    let item:Serie = this._favoriteList.find(x => x.titulo == serie.titulo);
    if (!item){
      this._favoriteList.push({...serie});
    }
   console.log(this._favoriteList.length);
   this.favoriteList.next(this._favoriteList); //equivalente al emitt de eventos
  }


  getSerie( idx: string){
    return this.series[idx];
  }

}