import { Component } from '@angular/core';
import { SerieCartService } from './serie-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'World Series';
  anio: number;



  constructor(  private _serieService: SerieCartService) {
     this.anio =  _serieService.getAnioActual();
   }

}
