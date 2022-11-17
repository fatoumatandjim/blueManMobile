import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColiUtilisateurPage } from './coli-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ColiUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColiUtilisateurPageRoutingModule {}
