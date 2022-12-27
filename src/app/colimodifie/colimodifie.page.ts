import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-colimodifie',
  templateUrl: './colimodifie.page.html',
  styleUrls: ['./colimodifie.page.scss'],
})
export class ColimodifiePage implements OnInit {
  loginData:any;
  id:any;
  Coli:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute, private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);

    this.id = this.route.snapshot.params['id'];
   
    this.monservice.colieById(this.id).subscribe(data => {
      this.Coli=data;
    
     
     });
  }

  onUpdate(){
    this.monservice.updateColi(this.id,this.Coli).subscribe(data=>{
      console.log("modifier")
      this.router.navigateByUrl('/colicour')
      this.ngOnInit()
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

  

}
