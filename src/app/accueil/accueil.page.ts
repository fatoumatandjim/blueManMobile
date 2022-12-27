import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  trajetCour:any;
  loginData:any;
  searchText:any;
  constructor(private monservice:MonserviceService ,private callNumber: CallNumber) { }

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

 

  appel(dat:any){
    
this.callNumber.callNumber(dat, true)
.then(res => console.log('Launched dialer!', res))
.catch(err => console.log('Error launching dialer', err));
  }
  
}
