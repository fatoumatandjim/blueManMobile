import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private monservice:MonserviceService,private route:ActivatedRoute ,private router:Router) { }

  ngOnInit() {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    console.log(this.loginData.idUtilisateur)
    this.monservice.utilisateurById(this.loginData.idUtilisateur).subscribe(data => {
      
     });
this.allTrajet();
  }
  allTrajet(){
   
    this.monservice.getTrajet().subscribe((data)=>{
      console.log(data)
      this.trajet= data
   
    })
  }

  onSubmit(form:NgForm){
    // console.log(form.value)
    this.monservice.ajoutColi(form.value.idTrajet,form.value).subscribe((data)=>{
 console.log(data)
 form.reset()
 this.router.navigateByUrl('/coli')
 this.ngOnInit()
      // if(data){
      //   console.log("ajouter")
      //   this.ngOnInit();
      // }
    })
      
    }
}
