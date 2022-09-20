import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';

import { CreateAdsBannerComponent } from './components/create-ads-banner/create-ads-banner.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { GameBannerComponent } from './components/game-banner/game-banner.component';
import { AppComponent } from './home/app.component';
import { UtilModule } from './util/util.module';

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
    UtilModule,
    ReactiveFormsModule,
    SwiperModule,
    ToastrModule.forRoot({
      closeButton: true,
      disableTimeOut: true,
      positionClass: 'toast-top-center',
      tapToDismiss: false,
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
