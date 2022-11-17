import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
  url='http://localhost:8080/api/users/';
  urlTrajet='http://localhost:8080/api/trajet/';
  urlColi='http://localhost:8080/api/colis/';

  constructor(private http:HttpClient) { }

  
  login(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  inscription(data:any){
    return this.http.post(this.url+"inscription",data);
  }

  getTrajet(){
    return this.http.get(this.urlTrajet+"AllTrajetEncours");
  }
  getColi(){
    return this.http.get(this.urlColi+"AllColis");
  }

  colieByUtilisateur(id:any){
    return this.http.get(this.urlColi+"ColisByUserLivrer/"+id);
  }
  utilisateurById(id:any){
    return this.http.get(this.url+"UserById/"+id);
  }
  getTrajetArrive(){
    return this.http.get(this.urlTrajet+"AllTrajetArrive");
  }

  trajetByChauffeur(id:any){
    return this.http.get(this.urlTrajet+"TrajetOutByUtilisateur/"+id);
  }
}
