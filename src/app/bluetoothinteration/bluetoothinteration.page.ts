import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-bluetoothinteration',
  templateUrl: './bluetoothinteration.page.html',
  styleUrls: ['./bluetoothinteration.page.scss'],
})
export class BluetoothinterationPage implements OnInit {

  DevicesVinc
  constructor(private bluetoothSerial:BluetoothSerial, private alerts:AlertController) { }

  ActivBT(){
    this.bluetoothSerial.isEnabled().then(response=>{
     this.IsEnable("Esta activo");
      this.DevicesList()
    },error=>{
      this.IsEnable("NO esta activo");
    })
  }

  Connect(address) 
  {
    this.bluetoothSerial.connect(address).subscribe(succes=>{
      this.deviceConnected
      console.log("Conectado")
    },error =>{
      console.log("error connect")
    })
  }

  deviceConnected(){
    this.bluetoothSerial.subscribe('/n').subscribe(success=>{
      this.hundler(success)
    })
  }

  hundler(value){
    console.log(value)
  }
  
  Disconnected(){
    this.bluetoothSerial.disconnect()
    console.log("Dispositivo desconectado")
  }

  DevicesList(){
    this.bluetoothSerial.list().then(response =>{
      this.DevicesVinc=response
    }, error=>{
      console.log("error")
    })
  }

 async IsEnable(Mensage){
    const alert= await this.alerts.create({
      header:'Alerta',
      message:Mensage,
      buttons:[{
        text: 'Okay',
        handler: () => {
          console.log("Okay")
        }
      }]
    })
  }

  ngOnInit() {
  }

}
