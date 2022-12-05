import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrajetPageRoutingModule } from './trajet-routing.module';

import { TrajetPage } from './trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TrajetPage]
})
export class TrajetPageModule {}
