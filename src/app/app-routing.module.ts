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
    path: 'login',
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
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule) , canActivate: [GuardGuard]
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then( m => m.AjouterPageModule) , canActivate: [GuardGuard]
  },
  {
    path: 'modifie/:id',
    loadChildren: () => import('./modifie/modifie.module').then( m => m.ModifiePageModule), canActivate: [GuardGuard]
  },
  {
    path: 'colicour',
    loadChildren: () => import('./colicour/colicour.module').then( m => m.ColicourPageModule)
  },
  {
    path: 'trajetcours',
    loadChildren: () => import('./trajetcours/trajetcours.module').then( m => m.TrajetcoursPageModule)
  },
  {
    path: 'utilisateurcolicour',
    loadChildren: () => import('./utilisateurcolicour/utilisateurcolicour.module').then( m => m.UtilisateurcolicourPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
