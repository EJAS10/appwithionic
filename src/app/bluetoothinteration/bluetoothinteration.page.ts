import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-bluetoothinteration',
  templateUrl: './bluetoothinteration.page.html',
  styleUrls: ['./bluetoothinteration.page.scss'],
})
export class BluetoothinterationPage implements OnInit {
  devices:any[] = [];
  constructor(private ble:BLE,private ngZone: NgZone) 
  {

   }
   Scan(){
    this.devices = [];
    this.ble.scan([],15).subscribe(      
      device => this.onDeviceDiscovered(device)
    );
  }
  onDeviceDiscovered(device){
    console.log('Discovered' + JSON.stringify(device,null,2));
    this.ngZone.run(()=>{
      this.devices.push(device)
      console.log(device)
    })
  }

  ngOnInit() {
  }
}
