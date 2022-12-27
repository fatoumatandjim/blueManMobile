import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetutilisateurattentePage } from './trajetutilisateurattente.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetutilisateurattentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetutilisateurattentePageRoutingModule {}
