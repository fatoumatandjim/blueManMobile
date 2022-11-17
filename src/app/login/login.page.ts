import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MonserviceService } from '../monservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginInfo :any;
  
  type = true;
  submitted = false;
  constructor(private router :Router,private monservice:MonserviceService) { }

  ngOnInit() {
  }
  inscription(){
    this.router.navigate(['/inscription']) 
   }

   connexion(fg: NgForm){
    this.submitted = true;
    
    this.monservice.login(fg.value["login"],fg.value["password"]).subscribe((data)=>{
      console.log(fg.value.login);
      
      if(data){
        
        this.loginInfo = data;
        localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
        // location.replace("/tabs/tabs/tab1");
       
        this.router.navigate(['/accueil'])
        
    }else{
      // this.toast.error("Login ou mot de passe incorrect");
    
    }
  
  },
    )}



}