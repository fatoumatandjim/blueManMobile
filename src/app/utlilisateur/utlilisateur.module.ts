import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { UtlilisateurPageRoutingModule } from './utlilisateur-routing.module';

import { UtlilisateurPage } from './utlilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtlilisateurPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [UtlilisateurPage]
})
export class UtlilisateurPageModule {}
