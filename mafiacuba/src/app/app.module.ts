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
import {MatIconModule} from '@angular/material/icon';
import { ArticleCarouselComponent } from './article-carousel/article-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TokensCarouselComponent,
    ObserveVisibilityDirective,
    ArticleCarouselComponent,
    FooterComponent,
    ProfilComponent,
    HeaderComponent
  ],
  imports: [
    ScrollingModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
