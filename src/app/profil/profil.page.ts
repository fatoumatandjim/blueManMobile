import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  loginData : any

  constructor(private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);

  }
  logOut(){
    localStorage.removeItem('isLogin');


    this.router.navigateByUrl("/login")

}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Are you sure?',
    cssClass: 'custom-alert',
    buttons: [
      {
        text: 'No',
        cssClass: 'alert-button-cancel',
        role: 'Cancel'
      },
      {
        text: 'Yes',
        cssClass: 'alert-button-confirm',
        handler: () =>{
          this.logOut();
        }

      },
    ],
  });

  await alert.present();
}
}
