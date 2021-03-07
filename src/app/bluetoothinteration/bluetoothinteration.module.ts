import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BluetoothinterationPageRoutingModule } from './bluetoothinteration-routing.module';

import { BluetoothinterationPage } from './bluetoothinteration.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BluetoothinterationPageRoutingModule
  ],
  declarations: [BluetoothinterationPage],

})
export class BluetoothinterationPageModule {}
