import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Router, RouterModule } from '@angular/router';
import { TokensCarouselComponent } from './tokens-carousel/tokens-carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TokensCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
