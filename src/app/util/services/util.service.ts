import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Games } from '../model/games';
import { Anuncio } from './../model/anuncio';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  listGames(){
    return this.http.get<Games[]>('http://localhost:3333/games')
    .pipe(first());
  }

  createAnuncio(anuncio: Partial<Anuncio>){
    return this.http.post(`http://localhost:3333/games/${anuncio.game}/ads`, anuncio)
  }
}
