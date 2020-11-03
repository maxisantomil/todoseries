import { Component, OnInit} from '@angular/core';
import { SerieCarritoComponent } from '../serie-carrito/serie-carrito.component';
import { Serie } from './Serie';
import { SerieCartService } from '../serie-cart.service';

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
    stock: 1,
    quantity: 0,

  },
  {
    titulo: 'Ozark' ,
    genero: 'Drama, Suspenso' ,
    anio: 2020 ,
    plataforma: 'Netflix' ,
    image: 'assets/img/oz-1.jpg',
    disponible: true ,
    gusta: 0.75,
    stock: 4,
    quantity: 0,

  },
  {
    titulo: 'Game of Thrones' ,
    genero: 'Aventura, Drama' ,
    anio: 2022 ,
    plataforma: 'Hbo' ,
    image: 'assets/img/gm-1.jpg',
    disponible: true ,
    gusta: 0.95,
    stock: 0,
    quantity: 0,

  },
  {
    titulo: 'The Boys' ,
    genero: 'Drama, Ciencia Ficcion' ,
    anio: 2019 ,
    plataforma: 'Amazon Prime' ,
    image: 'assets/img/boys-1.jpg',
    disponible: true ,
    gusta: 0.80,
    stock: 0,
    quantity: 0,

  },
  {
    titulo: 'The Mandalorian' ,
    genero: 'Drama, Ciencia Ficcion' ,
    anio: 2019 ,
    plataforma: 'Disney +' ,
    image: 'assets/img/mando-1.jpg',
    disponible: true ,
    gusta: 0.80,
    stock: 0,
    quantity: 0,

  },
  {
    titulo: 'Peaky Blinders' ,
    genero: 'Drama' ,
    anio: 2013 ,
    plataforma: 'BBC' ,
    image: 'assets/img/peaky-1.jpg',
    disponible: true ,
    gusta: 0.80,
    stock: 0,
    quantity: 0,

  }
];
  anio: number;

  constructor(private cart: SerieCartService) {
    this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {


  }
  upQuantity(serie: Serie): void {
    if (serie.quantity < serie.stock ){
      serie.quantity ++ ;
    }
  }
  downQuantity(serie: Serie): void {
    if (serie.quantity > 0){
      serie.quantity -- ;
    }
  }


  agregarfavorito(serie): void{
    this.cart.agregarfavorito(serie);
  }
}
