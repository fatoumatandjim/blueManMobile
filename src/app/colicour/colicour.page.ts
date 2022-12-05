import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-colicour',
  templateUrl: './colicour.page.html',
  styleUrls: ['./colicour.page.scss'],
})
export class ColicourPage implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  isOpen = false;
  loginData:any;
  id:any;
  listcolie:any;
  colicours:any;
  listcolicour:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private alertController: AlertController) { }

  ngOnInit() {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    // console.log(this.loginData.idUtilisateur)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.listcolie=data
      console.log(this.listcolie)
     });
     this.coliParChauffeurCours();
  }


  detailsColiecours(dat:any){
    this.monservice.colieById(dat).subscribe((data)=>{
      this.isOpen=true
      this.colicours= data
      console.log(this.colicours)
      })
  
  }
  
    coliParChauffeurCours(){
      this.monservice.colieByChauffeurCour(this.loginData.idUtilisateur).subscribe((data)=>{
      
      this.listcolicour= data
      console.log(this.listcolicour)
      })
    }

    supprimer(id:any){
      
    }
    supCofirm(idu: number){
      this.monservice.deleteColie(idu).subscribe((data) =>{         
        console.log('ok ok success');
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
