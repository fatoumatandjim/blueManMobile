import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilisateurcolicourPage } from './utilisateurcolicour.page';

const routes: Routes = [
  {
    path: '',
    component: UtilisateurcolicourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilisateurcolicourPageRoutingModule {}
