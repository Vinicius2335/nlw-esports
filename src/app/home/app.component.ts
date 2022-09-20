import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of } from 'rxjs';
import SwiperCore, { SwiperOptions, Autoplay, Navigation, Pagination } from 'swiper';

import { Games } from '../util/model/games';
import { UtilService } from '../util/services/util.service';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  games$: Observable<Games[]>;
  
  config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      clickable: true,
    },
    navigation: true
  }

  constructor(private utilService: UtilService, private toastService: ToastrService) {
    this.games$ = this.utilService.listGames()
    .pipe(
      catchError(() => {
        this.toastService.error('Não foi possivel carregar a lista de games');
        return of([]);
      })
    );
  }

  ngOnInit(): void {
  }

}
