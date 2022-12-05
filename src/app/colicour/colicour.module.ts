import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColicourPageRoutingModule } from './colicour-routing.module';

import { ColicourPage } from './colicour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColicourPageRoutingModule
  ],
  declarations: [ColicourPage]
})
export class ColicourPageModule {}
