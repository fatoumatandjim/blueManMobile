import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColimodifiePageRoutingModule } from './colimodifie-routing.module';

import { ColimodifiePage } from './colimodifie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColimodifiePageRoutingModule
  ],
  declarations: [ColimodifiePage]
})
export class ColimodifiePageModule {}
