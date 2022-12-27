import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColimodifiePage } from './colimodifie.page';

const routes: Routes = [
  {
    path: '',
    component: ColimodifiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColimodifiePageRoutingModule {}
