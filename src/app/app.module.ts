import { AppMaterialModule } from './util/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CreateAdsBannerComponent } from './components/create-ads-banner/create-ads-banner.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { GameBannerComponent } from './components/game-banner/game-banner.component';
import { AppComponent } from './home/app.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBannerComponent,
    CreateAdsBannerComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
