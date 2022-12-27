import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  
// region =  [
//   {
//   nom: "Kayes",
//   cercle: [
//       {
//         nomCercle: "Bafoulabé"
//       },
//       {
//         "nomCercle": "Diéma"
//       },
//       {
//         "nomCercle": "Kéniéba"
//       },
//       {
//         "nomCercle": "Kita"
//       },
//       {
//         "nomCercle": "nioro du Sahel"
//       },
//       {
//         "nomCercle": "Yélimané"
//       }
//     ]

// },
// {
//   "nom": "Koulikoro",
//   cercle: [
//     {
//       "nomCercle": "Bafoulabé"
//     },
//     {
//       "nomCercle": "Diéma"
//     },
//     {
//       "nomCercle": "Kéniéba"
//     },
//     {
//       "nomCercle": "Kita"
//     },
//     {
//       "nomCercle": "nioro du Sahel"
//     },
//     {
//       "nomCercle": "Yélimané"
//     }
//   ]
// },
// {
//   "nom": "Sikasso",

// },
// {
//   "nom": "Ségou",

// },
// {
//   "nom": "Mopti",

// },
// {
//   "nom": "Tombouctou",

// },
// {
//   "nom": "Gao",

// },
// {
//   "nom": "Kidal",

// },
// {
//   "nom": "Ménaka",

// },
// {
//   "nom": "Taoudénit",

// },
// ]

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
  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private router:Router,private loadingCtrl: LoadingController,public toastController: ToastController) { }
  park:any;
  loginData:any;
  id:any;
  idParc:any;
  ngOnInit() {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      
     });

    //  this.idParc = this.route.snapshot.params['idParc'];
    
    //  this.monservice.parcById(this.loginData.idParc).subscribe(data => {
       
    //   });
    this.allparc();
    this. allRegion()
  }


  allparc(){
   
    this.monservice.getParc().subscribe((data)=>{
      console.log(data)
      this.park= data
   
    })
  }

    allRegion(){
   
    this.monservice.getRegion().subscribe((data)=>{
  
      this.region= data
   
    })
  }
  allCercle(){
   
    this.monservice.getRegion().subscribe((data)=>{
  
      this.region= data
   
    })
  }
  Change(){  
    this.monservice.getCercleByregion(this.selectedRegion).subscribe((data)=>{
      this.ListCercle =data
      this.selectedCercle=this.ListCercle[0]
      console.log(this.ListCercle);
      
    })
  }
  Changearrive(){  
    this.monservice.getCercleByregion(this.selectedRegionarrive).subscribe((data)=>{
      this.ListCerclearrive =data
      this.selectedCerclearrive=this.ListCerclearrive[0]
      console.log(this.ListCerclearrive);
      
    })
  }
  onSubmit(form: NgForm){
    // console.log(form.value)
    this.monservice.ajoutTrajet(this.loginData.idUtilisateur,form.value.idParc,form.value).subscribe((data)=>{
    console.log(form.value)
     form.reset()
     this.router.navigateByUrl('/trajet')
     this.ngOnInit()
      if(data){
        this.presentToast("Trajet Ajouter avec Success!")
        console.log("ajouter")
       this.ngOnInit();
       }else{
        this.presentToaste("Echec d'Ajout du Trajet!")
       }
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
