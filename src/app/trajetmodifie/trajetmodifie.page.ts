import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-trajetmodifie',
  templateUrl: './trajetmodifie.page.html',
  styleUrls: ['./trajetmodifie.page.scss'],
})
export class TrajetmodifiePage implements OnInit {
  id:any;
  trajet:any;
  loginData:any;
  
listRefgion: any
selected : any
ListRegion : any
selectedRegionarrive:any;
nomRegion : any
ListCercle : any
selectedRegion : String=""
selectedCercle : String=""
region:any;
ListCerclearrive:any
selectedCerclearrive:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private alertController: AlertController,private router:Router) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);

    this.id = this.route.snapshot.params['id'];
   
    this.monservice.trajetById(this.id).subscribe(data => {
      this.trajet=data;
    this.allRegion();
     
     });
  }

  onUpdate(){
    this.monservice.updateTrajetAttente(this.id,this.trajet).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('/trajet')

    })
  }
 
  async presentAlert() {
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
            this.onUpdate();
          }
  
        },
      ],
    });
  
    await alert.present();
  }

  allRegion(){
   
    this.monservice.getRegion().subscribe((data)=>{
  
      this.region= data
   
    })
  }
  Change(){  
    this.monservice.getCercleByregion(this.selectedRegion).subscribe((data)=>{
      this.ListCercle =data
      this.selectedCercle=this.ListCercle[0]

      
    })
  }
  Changearrive(){  
    this.monservice.getCercleByregion(this.selectedRegionarrive).subscribe((data)=>{
      this.ListCerclearrive =data
      this.selectedCerclearrive=this.ListCerclearrive[0]

      
    })
  }


}
