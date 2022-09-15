import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../util/model/games';
import { UtilService } from '../util/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  games$: Observable<Games[]>;
  games!: Games[];

  constructor(private utilService: UtilService) {
    this.games$ = this.utilService.listGames();
    this.utilService.listGames().subscribe(
      (result) => this.games = result
    );

    console.log(this.games);
  }

  ngOnInit(): void {
  }
}

// FIXME: imagem do lol
// FIXME: numero de anuncio