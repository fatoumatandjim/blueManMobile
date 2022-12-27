import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/accueil', icon: 'Home' },
    { title: 'profil', url: '/profil', icon: 'person' },
    { title: 'Colie', url: '/coli', icon: 'cube' },
    { title: 'Trajet', url: '/trajet', icon: 'thermometer' },

 
  ];
  public labels = [];
  constructor() {}


}
