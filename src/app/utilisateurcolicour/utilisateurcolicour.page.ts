import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-utilisateurcolicour',
  templateUrl: './utilisateurcolicour.page.html',
  styleUrls: ['./utilisateurcolicour.page.scss'],
})
export class UtilisateurcolicourPage implements OnInit {
  loginData:any;
  id:any;
  listcolieutlisateur:any;
  listcoliUtilisateurcour:any;
  searchText:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    // console.log(this.loginData.idUtilisateur)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.listcolieutlisateur=data
      console.log(this.listcolieutlisateur)
     });
    
  this.coliParUtilisateurCours();

  }

  coliParUtilisateurCours(){
    this.monservice.colieByUtilisateurCours(this.loginData.idUtilisateur).subscribe((data)=>{
    
    this.listcoliUtilisateurcour= data
    console.log(this.listcoliUtilisateurcour)
    })
  }

  supprimer(id:any){
    this.monservice.deleteTrajet(id).subscribe(() =>{
  // this.presentAlert();
      this.ngOnInit()
    })
  }

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Are you sure?',
  //     cssClass: 'custom-alert',
  //     buttons: [
  //       {
  //         text: 'No',
  //         cssClass: 'alert-button-cancel',
  //       },
  //       {
  //         text: 'Yes',
  //         cssClass: 'alert-button-confirm',
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }

  }


