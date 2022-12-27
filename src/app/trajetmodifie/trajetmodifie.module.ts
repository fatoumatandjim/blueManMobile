import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajetmodifiePageRoutingModule } from './trajetmodifie-routing.module';

import { TrajetmodifiePage } from './trajetmodifie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetmodifiePageRoutingModule
  ],
  declarations: [TrajetmodifiePage]
})
export class TrajetmodifiePageModule {}
