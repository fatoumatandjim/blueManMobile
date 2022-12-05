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
  isOpen = false;


  searchText:any;
  id:any;
  loginData:any;
  trajetParChauffeur:any;
  trajetArrive:any;
  listTrajet:any;
  listTrajetcours:any;
  trajet:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    console.log(this.loginData)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.trajetArrive=data
      console.log(this.trajetArrive)
     });
   
    this.TrajetParChaufeur();
    this.TrajetParChaufeurCour();
  }

  TrajetParChaufeur(){
    this.monservice.trajetByChauffeur(this.loginData.idUtilisateur).subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajet= data
    console.log(this.listTrajet)
    })
  }
  TrajetParChaufeurCour(){
    this.monservice.trajetByChauffeurCours(this.loginData.idUtilisateur).subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajetcours= data
    console.log(this.listTrajetcours)
    })
  }



  detailsTrajet(dat:any){
    this.monservice.trajetById(dat).subscribe((data)=>{
    this.isOpen=true
      this.trajet= data
      console.log(this.trajet)
      })

}
  // AlltrajetArriver(){
  //   console.log("ok")
  //   this.monservice.getTrajetArrive().subscribe((data)=>{
  //     console.log(data)
  //     this.trajetArrive= data
   
  //   })
  // }
  supprimer(id:any){
    this.monservice.deleteTrajet(id).subscribe(() =>{

      this.ngOnInit()
    })
  }

}
