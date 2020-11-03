import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Serie } from './serie-list/Serie';

@Injectable({
  providedIn: 'root'
})


export class SerieCartService {

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
}