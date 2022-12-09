import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { TrajetattentePageRoutingModule } from './trajetattente-routing.module';

import { TrajetattentePage } from './trajetattente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetattentePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TrajetattentePage]
})
export class TrajetattentePageModule {}
