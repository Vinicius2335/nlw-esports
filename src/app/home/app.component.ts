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

  constructor(private utilService: UtilService) {
    this.games$ = this.utilService.listGames();
  }

  ngOnInit(): void {
  }

}
