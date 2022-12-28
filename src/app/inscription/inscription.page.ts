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
  patternMax(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres max`;
  }
  patternMin(inputLength: number, minLength: number) {
    return `${minLength - inputLength} caracteres min`;
  }
  type = true;
  
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
      form.reset()
      this.router.navigateByUrl('/login')
      this.ngOnInit()
      if(result){
       
      //  location.replace("/auth");
     
   
       
        
        
      }
    }, err => {
      // this.errorMessage = err.error.message
      
    })


}
changeType() {
  this.type = !this.type;
}
}
