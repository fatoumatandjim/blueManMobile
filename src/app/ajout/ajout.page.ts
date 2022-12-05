import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  constructor(private monservice:MonserviceService,private route:ActivatedRoute,private router:Router) { }
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
  }


  allparc(){
   
    this.monservice.getParc().subscribe((data)=>{
      console.log(data)
      this.park= data
   
    })
  }
  
  onSubmit(form:NgForm){
    // console.log(form.value)
    this.monservice.ajoutTrajet(this.loginData.idUtilisateur,form.value.idParc,form.value).subscribe((data)=>{
 console.log(data)
 form.reset()
 this.router.navigateByUrl('/trajet')
 this.ngOnInit()
      // if(data){
      //   console.log("ajouter")
      //   this.ngOnInit();
      // }
    })
      
    }
}
