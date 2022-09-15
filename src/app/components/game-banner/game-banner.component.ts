import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-banner',
  templateUrl: './game-banner.component.html',
  styleUrls: ['./game-banner.component.scss']
})
export class GameBannerComponent implements OnInit {
  @Input() bannerUrl!: string;
  @Input() title!: string;
  @Input() adsCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
