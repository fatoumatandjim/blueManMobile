import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {
  trajet:any;
  loginData:any;
  id:any;
  trajetcour:any;
  patternMax(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres max`;
  }
  patternMin(inputLength: number, minLength: number) {
    return `${minLength - inputLength} caracteres min`;
  }
  
  constructor(private monservice:MonserviceService,private route:ActivatedRoute ,private router:Router,private loadingCtrl: LoadingController,public toastController: ToastController) { }

  ngOnInit() {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      
     });
// this.allTrajet();
  this.allTrajetcour();
  }
  // allTrajet(){
   
  //   this.monservice.getTrajet().subscribe((data)=>{
  //     console.log(data)
  //     this.trajet= data
   
  //   })
  // }
  allTrajetcour(){
   
    this.monservice.getTrajetcour().subscribe((data)=>{
      console.log(data)
      this.trajetcour= data
   
    })
  }
  onSubmit(form:NgForm){
    // console.log(form.value)
    this.monservice.ajoutColi(form.value.idTrajet,form.value).subscribe((data)=>{
 console.log(data)
 form.reset()
 if(data){
  this.router.navigateByUrl('/coli')
  this.presentToast("Coli Ajouter avec Success!")
  this.ngOnInit()
 }else{
  this.presentToaste("Echec D'ajout du Coli!")
 }

      // if(data){
      //   console.log("ajouter")
      //   this.ngOnInit();
      // }
    })
      
    }
    async presentToast(message : string) {
      const toast = await this.toastController.create({
        message,
        color: 'success',
        position: 'top',
        duration: 2000,
      });
      toast.present();
    }
    async presentToaste(message : string) {
      const toast = await this.toastController.create({
        message,
        color: 'danger',
        position: 'top',
        duration: 2000,
      });
      toast.present();
    }
}
