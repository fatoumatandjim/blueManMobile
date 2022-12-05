import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonserviceService } from '../monservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-trajetcours',
  templateUrl: './trajetcours.page.html',
  styleUrls: ['./trajetcours.page.scss'],
})
export class TrajetcoursPage implements OnInit {
  id:any;
  loginData:any;
  trajetArrive:any;
  listTrajetcours:any;
  listTrajet:any;
  trajetcours:any;
  isOpen = false;
  searchText:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private alertController: AlertController) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.trajetArrive=data
      console.log(this.trajetArrive)
     });
     this. TrajetParChaufeur();
  }
  TrajetParChaufeur(){
    this.monservice.trajetByChauffeur(this.loginData.idUtilisateur).subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajet= data
    console.log(this.listTrajet)
    })
  }

  detailsTrajetcours(dat:any){
    this.monservice.trajetById(dat).subscribe((data)=>{
      this.isOpen=true
      this.trajetcours= data
      console.log(this.trajetcours)
      })
  
  }

  supCofirm(id:any){
    this.monservice.deleteTrajet(id).subscribe(() =>{

      this.ngOnInit()
    })
  }


  async presentAlert(idu: number) {
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
            this.supCofirm(idu);
          }

        },
      ],
    });

    await alert.present();
  }
}
