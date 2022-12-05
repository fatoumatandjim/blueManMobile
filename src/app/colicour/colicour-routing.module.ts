import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColicourPage } from './colicour.page';

const routes: Routes = [
  {
    path: '',
    component: ColicourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColicourPageRoutingModule {}
