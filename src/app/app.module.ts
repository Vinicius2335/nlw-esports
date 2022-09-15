import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CreateAdsBannerComponent } from './components/create-ads-banner/create-ads-banner.component';
import { GameBannerComponent } from './components/game-banner/game-banner.component';
import { AppComponent } from './home/app.component';


@NgModule({
  declarations: [AppComponent, GameBannerComponent, CreateAdsBannerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
