import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { MagazinierPageRoutingModule } from './magazinier-routing.module';

import { MagazinierPage } from './magazinier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazinierPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MagazinierPage]
})
export class MagazinierPageModule {}
