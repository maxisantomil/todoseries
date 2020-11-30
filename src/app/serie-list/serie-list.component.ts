import { Component, OnInit} from '@angular/core';
import { SerieCarritoComponent } from '../serie-carrito/serie-carrito.component';
import { Serie } from './Serie';
import { SerieCartService } from '../serie-cart.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [] ;
  anio: number;


  // tslint:disable-next-line: variable-name
  constructor(private _seriesService: SerieCartService,
              private router: Router) {
              this.anio = new Date().getFullYear();
   }

  ngOnInit(): void {

    this.series = this._seriesService.getSeries();
  }

  
  /*upQuantity(serie: Serie): void {
    if (serie.quantity < serie.stock ){
      serie.quantity ++ ;
    }
  }
  downQuantity(serie: Serie): void {
    if (serie.quantity > 0){
      serie.quantity -- ;
    }
  }*/


  agregarfavorito(serie): void{
    this._seriesService.agregarfavorito(serie);
  }

  verSerie(idx: number){
    this.router.navigate(['/serie', idx]);
  }

}
