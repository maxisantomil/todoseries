import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieCartService } from '../serie-cart.service';

@Component({
  selector: 'app-serie-info',
  templateUrl: './serie-info.component.html',
  styleUrls: ['./serie-info.component.scss']
})
export class SerieInfoComponent {

  serie: any = {};

  constructor( private activatedRoute: ActivatedRoute,
                private _serieService: SerieCartService) { 
    this.activatedRoute.params.subscribe( params =>{
   
      this.serie = this._serieService.getSerie(params ['id']);
      return console.log(this.serie);
    })
  }


}
