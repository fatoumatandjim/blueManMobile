import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
  url='http://localhost:8080/api/users/';
  urlTrajet='http://localhost:8080/api/trajet/';
  urlColi='http://localhost:8080/api/colis/';
  urlPark='http://localhost:8080/api/parc/';
  constructor(private http:HttpClient) { }

  
  login(login :String,password : String){
    return this.http.get(this.url+"login/"+login+"&"+password)
  }
  inscription(data:any){
    return this.http.post(this.url+"AddUser",data);
  }

  parcById(id:any){
    return this.http.get(this.urlPark+"ParcById/"+id);
  }
  getParc(){
    return this.http.get(this.urlPark+"AllParc");
  }
  getTrajet(){
    return this.http.get(this.urlTrajet+"AllTrajetEncours");
  }
  getColi(){
    return this.http.get(this.urlColi+"AllColis");
  }
  colieByChauffeurCour(id:any){
    return this.http.get(this.urlColi+"ColisByChauffeurEncours/"+id);
  }
  colieByChauffeurarrive(id:any){
    return this.http.get(this.urlColi+"ColisByChauffeurLivrer/"+id);
  }
  colieByUtilisateur(id:any){
    return this.http.get(this.urlColi+"ColisByUserLivrer/"+id);
  }
  colieById(id:any){
    return this.http.get(this.urlColi+"ColisById/"+id);
  }
  trajetById(id:any){
    return this.http.get(this.urlTrajet+"TrajetById/"+id);
  }
  
  colieByUtilisateurCours(id:any){
    return this.http.get(this.urlColi+"ColisByUserEncours/"+id);
  }
  utilisateurById(id:any){
    return this.http.get(this.url+"UserById/"+id);
  }
  
  getTrajetArrive(){
    return this.http.get(this.urlTrajet+"AllTrajetArrive");
  }

  trajetByChauffeur(id:any){
    return this.http.get(this.urlTrajet+"TrajetByUtilisateur/"+id);
  }
  deleteTrajet(id:any){
    return this.http.delete(this.urlTrajet+"OutTrajet/"+id);
  }
  deleteColie(id:any){
    return this.http.delete(this.urlColi+"LivrerColis/"+id);
  }
  trajetByChauffeurCours(id:any){
    return this.http.get(this.urlTrajet+"TrajetOutByUtilisateur/"+id);
  }
  ajoutTrajet(id:any,idParc:any,data: any,){
    return this.http.post(this.urlTrajet+"AddTrajet/"+id+"/"+idParc,data);
  }
  ajoutColi(id:any,data: any,){
    return this.http.post(this.urlColi+"AddColis/"+id,data);
  }

  updateProfil(id: number, data: any){
    return this.http.put(this.url+"UpdateUser/"+id,data);
  }
}
