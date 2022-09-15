import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Games } from '../model/games';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  listGames(){
    return this.http.get<Games[]>('http://localhost:3333/games').pipe(
      first(),
      tap((game) => console.log('game :>> ', game)),
      );
  }
}
