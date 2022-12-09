import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetattentePage } from './trajetattente.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetattentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetattentePageRoutingModule {}
