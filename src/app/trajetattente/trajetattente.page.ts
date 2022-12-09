import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-trajetattente',
  templateUrl: './trajetattente.page.html',
  styleUrls: ['./trajetattente.page.scss'],
})
export class TrajetattentePage implements OnInit {
  isOpen = false;
  searchText:any;
  id:any;
  loginData:any;
  trajetAttente:any;
  listTrajetAttente:any;
  DetailAttente:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private alertController: AlertController) { }

  ngOnInit() {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.trajetAttente=data
      console.log(this.trajetAttente)
     });
     this.TrajetParChaufeurAttente();
  }

  TrajetParChaufeurAttente(){
    this.monservice.trajetAtttenteByChauffeur(this.loginData.idUtilisateur).subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajetAttente= data
    console.log(this.listTrajetAttente)
    })
  }

  supCofirm(id:any){
    this.monservice.demareTrajet(id).subscribe(() =>{

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
    alert.present()

}

detailsTrajetatente(dat:any){
  this.monservice.trajetById(dat).subscribe((data)=>{
  this.isOpen=true
    this.DetailAttente= data
    console.log(this.DetailAttente)
    })

}
}
