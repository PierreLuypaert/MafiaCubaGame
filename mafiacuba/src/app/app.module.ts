import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Router, RouterModule } from '@angular/router';
import { TokensCarouselComponent } from './tokens-carousel/tokens-carousel.component';
import { ObserveVisibilityDirective } from './directive/observe-visibility.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TokensCarouselComponent,
    ObserveVisibilityDirective
  ],
  imports: [
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
