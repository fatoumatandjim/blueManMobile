import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TrajetutilisateurattentePageRoutingModule } from './trajetutilisateurattente-routing.module';

import { TrajetutilisateurattentePage } from './trajetutilisateurattente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetutilisateurattentePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [TrajetutilisateurattentePage]
})
export class TrajetutilisateurattentePageModule {}
