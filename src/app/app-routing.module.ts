import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule )
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule), canActivate: [GuardGuard]
  },
  {
    path: 'trajet',
    loadChildren: () => import('./trajet/trajet.module').then( m => m.TrajetPageModule)
  },
  {
    path: 'coli',
    loadChildren: () => import('./coli/coli.module').then( m => m.ColiPageModule)
  },
  {
    path: 'coli-utilisateur',
    loadChildren: () => import('./coli-utilisateur/coli-utilisateur.module').then( m => m.ColiUtilisateurPageModule)
  },
  {
    path: 'utlilisateur',
    loadChildren: () => import('./utlilisateur/utlilisateur.module').then( m => m.UtlilisateurPageModule) ,canActivate: [GuardGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
