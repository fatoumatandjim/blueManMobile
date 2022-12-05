import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { ColiPageRoutingModule } from './coli-routing.module';

import { ColiPage } from './coli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColiPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ColiPage]
})
export class ColiPageModule {}
