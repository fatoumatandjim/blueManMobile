import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetmodifiePage } from './trajetmodifie.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetmodifiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetmodifiePageRoutingModule {}
