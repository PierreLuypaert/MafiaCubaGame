import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PlayComponent } from './play/play.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '' , component: HomepageComponent, data: {animation: 'HomePage'} },
  { path: '' , component: MainpageComponent, data: {animation: 'HomePage'},
    children : [
      { path: 'jouer' , component: PlayComponent},
      { path: 'profil' , component: ProfilComponent}
    ]
  },

  { path: 'auth' , component: AuthenticationComponent, data: {animation: 'HomePage'},
    children : [
      { path: 'connexion' , component: ConnexionComponent, data: {animation: 'Connexion'}},
      { path: 'inscription' , component: InscriptionComponent, data: {animation: 'Connexion'}}
    ]
  },
  { path: 'profil' , component: ProfilComponent },
  { path: '**' ,pathMatch: 'full' , redirectTo: ''},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
