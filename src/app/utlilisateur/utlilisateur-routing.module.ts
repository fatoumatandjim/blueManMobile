import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtlilisateurPage } from './utlilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: UtlilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtlilisateurPageRoutingModule {}
