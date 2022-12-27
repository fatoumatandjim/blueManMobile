import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MonserviceService } from '../monservice.service';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginInfo :any;
  
  type = true;
  submitted = false;
  constructor(private router :Router,private monservice:MonserviceService,private loadingCtrl: LoadingController,public toastController: ToastController) { }

  ngOnInit() {
  }
  inscription(){
    this.router.navigate(['/inscription']) 
   }

  //  connexion(fg: NgForm){
  //   this.submitted = true;
    
  //   this.monservice.login(fg.value["login"],fg.value["password"]).subscribe((data)=>{
  //     console.log(fg.value.login);
      
  //     if(data){
        
  //       this.loginInfo = data;
  //       localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
  //       // location.replace("/tabs/tabs/tab1");
       
  //       this.router.navigate(['/accueil'])
        
  //   }else{
  //     // this.toast.error("Login ou mot de passe incorrect");
    
  //   }
  
  // },
  //   )}

    changeType() {
      this.type = !this.type;
    }
    
    async presentToast(message : string) {
      const toast = await this.toastController.create({
        message,
        color: 'danger',
        position: 'top',
        duration: 2000,
      });
      toast.present();
    }
    
  
    connexion(fg: NgForm){
      this.submitted = true;    
      this.monservice.login(fg.value["login"],fg.value["password"]).subscribe((data)=>{    
        if(data){      
          this.loginInfo = data;
          localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));     
          this.router.navigate(['/accueil'])    
        }
        else{
        this.presentToast("Login ou mot de passe incorrect !")
        }
  
      })
    }


}