import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColiUtilisateurPageRoutingModule } from './coli-utilisateur-routing.module';

import { ColiUtilisateurPage } from './coli-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColiUtilisateurPageRoutingModule
  ],
  declarations: [ColiUtilisateurPage]
})
export class ColiUtilisateurPageModule {}
