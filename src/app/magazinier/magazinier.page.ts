import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MonserviceService } from '../monservice.service';

@Component({
  selector: 'app-magazinier',
  templateUrl: './magazinier.page.html',
  styleUrls: ['./magazinier.page.scss'],
})
export class MagazinierPage implements OnInit {
 selectedSegment: string = 'livre'
  listcoliMagazin:any;
  searchText:any;
  listcoliMagazinLivrer:any;
  constructor(private monservice:MonserviceService,private alertController: AlertController) { }

  ngOnInit() {
    this.AllColiMagazin();
    this.AllColiMagazinLivrer();
  }
  segmentChanged(event: any) {
    console.log(event.target.value);
    this.selectedSegment = event.target.value
  }


  AllColiMagazin(){
    this.monservice.AllcoliMagazin().subscribe((data)=>{
    
    this.listcoliMagazin= data
    console.log(this.listcoliMagazin)
    })
  }
  

  AllColiMagazinLivrer(){
    this.monservice.AllcoliMagazinLivrer().subscribe((data)=>{
    
    this.listcoliMagazinLivrer= data
    console.log(this.listcoliMagazinLivrer)
    })
  }

  supCofirm(idu: number){
    this.monservice.deleteColieEtatMagazinLivrer(idu).subscribe((data) =>{         
      console.log('ok ok success');
      this.ngOnInit()
    })
  }

  async presentAlert(idu: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          role: 'Cancel'
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () =>{
            this.supCofirm(idu);
          }

        },
      ],
    });

    await alert.present();
  }
  
}

