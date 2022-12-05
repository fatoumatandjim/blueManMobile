import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrajetcoursPageRoutingModule } from './trajetcours-routing.module';

import { TrajetcoursPage } from './trajetcours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetcoursPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TrajetcoursPage]
})
export class TrajetcoursPageModule {}
