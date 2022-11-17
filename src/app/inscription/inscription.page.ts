import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MonserviceService } from '../monservice.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(private router:Router,private monservice:MonserviceService) { }

  ngOnInit() {
  }
  // signUPUser(){
  //   this.router.navigate(['/accueil'])
  //  }
   signUPUser(form : NgForm){

  
    console.log(form.value)
    
    this.monservice.inscription(form.value).subscribe((result)=>{
      console.log(result)
      
      if(result){
        form.reset()
      //  location.replace("/auth");
     
          this.router.navigate(['/accueil'])
       this.ngOnInit()
       
        
        
      }
    }, err => {
      // this.errorMessage = err.error.message
      
    })


}
}
