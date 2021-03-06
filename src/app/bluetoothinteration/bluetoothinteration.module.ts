import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothinterationPageRoutingModule } from './bluetoothinteration-routing.module';

import { BluetoothinterationPage } from './bluetoothinteration.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothinterationPageRoutingModule
  ],
  declarations: [BluetoothinterationPage],
  providers:[
    BluetoothSerial
  ]
})
export class BluetoothinterationPageModule {}
