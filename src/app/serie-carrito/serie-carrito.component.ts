import { Component, Input, OnInit} from '@angular/core';
import { SerieCartService } from '../serie-cart.service';
import { Serie } from '../serie-list/Serie';

@Component({
  selector: 'app-serie-carrito',
  templateUrl: './serie-carrito.component.html',
  styleUrls: ['./serie-carrito.component.scss']
})
export class SerieCarritoComponent implements OnInit {


  favoriteList: Serie[];

  constructor(private cart:SerieCartService) {
      cart.favoriteList.subscribe(c => this.favoriteList = c);

  }


  eliminar(index) {
    this.favoriteList.splice(index,1);
}


  ngOnInit(): void {
  }

}
