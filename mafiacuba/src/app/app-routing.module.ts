import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '' ,pathMatch: 'full' , redirectTo: 'homepage'},
  { path: 'homepage' , component: HomepageComponent },
  { path: 'profil' , component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
