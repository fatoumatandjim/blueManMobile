import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { MonserviceService } from '../monservice.service';
@Component({
  selector: 'app-coli',
  templateUrl: './coli.page.html',
  styleUrls: ['./coli.page.scss'],
})
export class ColiPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  constructor(private monservice:MonserviceService) { }
  coliArrive:any;
  ngOnInit() {
    this.AlltrajetArriver();
  }
  AlltrajetArriver(){
    console.log("ok")
    this.monservice.getColi().subscribe((data)=>{
      console.log(data)
      this.coliArrive= data
   
    })
  }
}
