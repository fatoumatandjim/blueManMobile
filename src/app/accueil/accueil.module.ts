import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AccueilPageRoutingModule,
  
  ],
  providers:[CallNumber],
  declarations: [AccueilPage]
})
export class AccueilPageModule {}
