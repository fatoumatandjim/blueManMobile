import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MonserviceService {
  url='http:// 255.255.255.0:8080/api/users/';
  urlTrajet='http:// 255.255.255.0:8080/api/trajet/';
  urlColi='http:// 255.255.255.0:8080/api/colis/';
  urlPark='http:// 255.255.255.0:8080/api/parc/';
  urlRegion='http:// 255.255.255.0:8080/api/';
  constructor(private http:HttpClient) { }

  getCercleByregion(region: any){
    return this.http.get(this.urlRegion +"CercleByRegion/"+ region);
  }
  getRegion(){
    return this.http.get(this.urlRegion+"AllRegion");
  }
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
  getTrajetcour(){
    return this.http.get(this.urlTrajet+"AllTrajetEncours");
  }
  getTrajet(){
    return this.http.get(this.urlTrajet+"AllTrajetAttente");
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

  AllcoliMagazin(){
    return this.http.get(this.urlColi+"AllColisMagasin");
  }
  colieByUserMagazin(id:any){
    return this.http.get(this.urlColi+"ColisByUserMagasin/"+id);
  }
  colieByChauffeurMagazin(id:any){
    return this.http.get(this.urlColi+"ColisByChauffeurMagasin/"+id);
  }
  AllcoliMagazinLivrer(){
    return this.http.get(this.urlColi+"AllColisLivrer");
  }
  colieById(id:any){
    return this.http.get(this.urlColi+"ColisById/"+id);
  }
  updateColi(id: number, data: any){
    return this.http.put(this.urlColi+"UpdateColis/"+id,data);
  }
  trajetById(id:any){
    return this.http.get(this.urlTrajet+"TrajetById/"+id);
  }
  updateTrajetAttente(id: number, data: any){
    return this.http.put(this.urlTrajet+"UpdateTrajet/"+id,data);}
  
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
  
  trajetAtttenteByChauffeur(id:any){
    return this.http.get(this.urlTrajet+"TrajetAttenteByUtilisateur/"+id);
  }

  demareTrajet(id:any){
    return this.http.delete(this.urlTrajet+"DemarrerTrajet/"+id);
  }
  deleteTrajet(id:any){
    return this.http.delete(this.urlTrajet+"OutTrajet/"+id);
  }
  SupprimerTrajetParChauffeur(id:any){
    return this.http.delete(this.urlTrajet+"SuppTrajetForChauffeur/"+id);
  }
  deleteColie(id:any){
    return this.http.delete(this.urlColi+"MagasinColis/"+id);
  }
  deleteColiemagazin(id:any){
    return this.http.delete(this.urlColi+"SuppColisUtilisateur/"+id);
  }
  deleteColieEtatMagazinLivrer(id:any){
    return this.http.delete(this.urlColi+"LivrerColis/"+id);
  }
  ChangecolieEtatMagazin(id:any){
    return this.http.delete(this.urlColi+"MagasinColis/"+id);
  }
  SupprimerColieParChauffeur(id:any){
    return this.http.delete(this.urlColi+"SuppColisChauffeur/"+id);
  }
  trajetByChauffeurArrive(id:any){
    return this.http.get(this.urlTrajet+"TrajetOutByUtilisateur/"+id);
  }
  trajetAllAttente(){
    return this.http.get(this.urlTrajet+"AllTrajetAttente");
  }
  ajoutTrajet(id:any,idParc:any,data: any,){
    return this.http.post(this.urlTrajet+"AddTrajet/"+id+"/"+idParc, data);
  }
  
  ajoutColi(id:any,data: any,){
    return this.http.post(this.urlColi+"AddColis/"+id,data);
  }

  updateProfil(id: number, data: any){
    return this.http.put(this.url+"UpdateUser/"+id,data);
  }
}
