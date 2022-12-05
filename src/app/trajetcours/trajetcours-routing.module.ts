import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetcoursPage } from './trajetcours.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetcoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetcoursPageRoutingModule {}
