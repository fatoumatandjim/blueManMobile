import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UtilisateurcolicourPageRoutingModule } from './utilisateurcolicour-routing.module';

import { UtilisateurcolicourPage } from './utilisateurcolicour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtilisateurcolicourPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UtilisateurcolicourPage]
})
export class UtilisateurcolicourPageModule {}
