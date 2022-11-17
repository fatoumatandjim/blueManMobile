import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColiPage } from './coli.page';

const routes: Routes = [
  {
    path: '',
    component: ColiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColiPageRoutingModule {}
