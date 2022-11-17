import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MonserviceService } from '../monservice.service';
@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.page.html',
  styleUrls: ['./trajet.page.scss'],
})
export class TrajetPage implements OnInit {
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

  id:any;
  loginData:any;
  trajetParChauffeur:any;
  trajetArrive:any;
  listTrajet:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData)
    // this.id = this.route.snapshot.params['id'];
    // this.monservice.trajetByChauffeur(this.id).subscribe(data => {
    //   this.trajetParChauffeur=data
    //   console.log(this.trajetParChauffeur)
    //  });
    //  this.AlltrajetArriver();
    this.TrajetParChaufeur();
  }

  TrajetParChaufeur(){
    this.monservice.trajetByChauffeur(this.loginData.idUtilisateur).subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajet= data
    console.log(this.listTrajet)
    })
  }

  // AlltrajetArriver(){
  //   console.log("ok")
  //   this.monservice.getTrajetArrive().subscribe((data)=>{
  //     console.log(data)
  //     this.trajetArrive= data
   
  //   })
  // }

}
