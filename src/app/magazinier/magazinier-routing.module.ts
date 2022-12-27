import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazinierPage } from './magazinier.page';

const routes: Routes = [
  {
    path: '',
    component: MagazinierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazinierPageRoutingModule {}
