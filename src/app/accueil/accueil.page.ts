import { Component, OnInit } from '@angular/core';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  trajetCour:any;
  loginData:any;
  constructor(private monservice:MonserviceService) { }

  ngOnInit() {
    this.AlltrajetCours();
    this.loginData=JSON.parse(localStorage["isLogin"]);
  }
  AlltrajetCours(){
    this.monservice.getTrajet().subscribe((data)=>{
      console.log(data)
      this.trajetCour= data
   
    })
  }
}
