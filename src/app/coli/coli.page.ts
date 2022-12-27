import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MonserviceService } from '../monservice.service';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-coli',
  templateUrl: './coli.page.html',
  styleUrls: ['./coli.page.scss'],
})
export class ColiPage implements OnInit {
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
  selectedSegment: string = 'livre'
  listcolimagazin:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private animationCtrl: AnimationController,private alertController: AlertController) { 
    const button = document.getElementById('open-custom-dialog');

    button?.addEventListener('click', function handleClick(event) {
      console.log('button clicked');
      console.log(event);
      console.log(event.target);
    });
  }
  coliArrive:any;
  loginData:any;
  id:any;
  listcolie:any;
  listcoli:any;
  listcolicour:any;
  coli:any;
  colicours:any;
  searchText:any;
  isOpen = false;
  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    // console.log(this.loginData.idUtilisateur)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.listcolie=data
      console.log(this.listcolie)
     });
    
    this.coliParChauffeurArrive();
    this.coliParChauffeurMagazin()

  }

  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }
 
  coliParChauffeurArrive(){
    this.monservice.colieByChauffeurarrive(this.loginData.idUtilisateur).subscribe((data)=>{
    
    this.listcoli= data
    console.log(this.listcoli)
    })
  }

  coliParChauffeurMagazin(){
    this.monservice.colieByChauffeurMagazin(this.loginData.idUtilisateur).subscribe((data)=>{
    
    this.listcolimagazin= data
    console.log(this.listcolimagazin)
    })
  }
  detailsColie(dat:any){
   
    this.monservice.colieById(dat).subscribe((data)=>{
      this.isOpen=true
      this.coli= data
      console.log(this.coli)
      
      })

}

supCofirm(idu: number){
  this.monservice.SupprimerColieParChauffeur(idu).subscribe((data) =>{         
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
