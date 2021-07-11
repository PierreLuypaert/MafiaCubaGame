import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Router, RouterModule } from '@angular/router';
import { TokensCarouselComponent } from './tokens-carousel/tokens-carousel.component';
import { ObserveVisibilityDirective } from '../shared/directive/observe-visibility.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { ArticleCarouselComponent } from './article-carousel/article-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PlayComponent } from './play/play.component';
import { PlayHeaderComponent } from './play-header/play-header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TokensCarouselComponent,
    ObserveVisibilityDirective,
    ConnexionComponent,
    ArticleCarouselComponent,
    FooterComponent,
    ProfilComponent,
    HeaderComponent,
    InscriptionComponent,
    AuthenticationComponent,
    PlayComponent,
    PlayHeaderComponent,
    MainpageComponent
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
  providers: [
    ObserveVisibilityDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }