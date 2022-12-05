import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-modifie',
  templateUrl: './modifie.page.html',
  styleUrls: ['./modifie.page.scss'],
})
export class ModifiePage implements OnInit {
  loginData:any;
  id:any;
  constructor(private monservice:MonserviceService,private route:ActivatedRoute, private router:Router,private alertController: AlertController) { }

  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);

    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
    
     
     });
  }

  onUpdate(){
    this.monservice.updateProfil(this.loginData.idUtilisateur,this.loginData).subscribe((data)=>{
     
     if(data){
      console.log(data);
       console.log("modification");
       localStorage.setItem('isLogin', JSON.stringify(data));
     
 this.router.navigateByUrl('/profil')
 this.ngOnInit()
      //  this.ngOnInit();
     }
    }, err => {
      // this.errorMessage = err.error.message
      
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
