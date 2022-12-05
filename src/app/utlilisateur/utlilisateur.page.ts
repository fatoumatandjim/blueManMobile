import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-utlilisateur',
  templateUrl: './utlilisateur.page.html',
  styleUrls: ['./utlilisateur.page.scss'],
})
export class UtlilisateurPage implements OnInit {
  loginData:any;
  id:any;
  listcoli:any;
  listcolie:any;
  listcolicour:any;
  searchText:any;
  isOpen = false;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    // console.log(this.loginData.idUtilisateur)
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      this.listcolie=data
      console.log(this.listcolie)
     });
    
  this.coliParUtilisateurArrive();
  this. coliParUtilisateurCours();
  }


  coliParUtilisateurArrive(){
    this.monservice.colieByUtilisateur(this.loginData.idUtilisateur).subscribe((data)=>{
    
    this.listcoli= data
    console.log(this.listcoli)
    })
  }
  coliParUtilisateurCours(){
    this.monservice.colieByUtilisateurCours(this.loginData.idUtilisateur).subscribe((data)=>{
    
    this.listcolicour= data
    console.log(this.listcolicour)
    })
  }

}
