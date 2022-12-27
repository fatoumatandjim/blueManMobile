import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-trajetutilisateurattente',
  templateUrl: './trajetutilisateurattente.page.html',
  styleUrls: ['./trajetutilisateurattente.page.scss'],
})
export class TrajetutilisateurattentePage implements OnInit {
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
    
     });
    this.TrajetAllAttente();
  }
  TrajetAllAttente(){
    this.monservice.trajetAllAttente().subscribe((data)=>{
      console.log(this.loginData.idUtilisateur)
    this.listTrajetAttente= data
    console.log(this.listTrajetAttente)
    })
  }


detailsTrajetatente(dat:any){
  this.monservice.trajetById(dat).subscribe((data)=>{
  this.isOpen=true
    this.DetailAttente= data
    console.log(this.DetailAttente)
    })

}
}
