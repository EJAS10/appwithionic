import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BluetoothinterationPage } from './bluetoothinteration.page';

const routes: Routes = [
  {
    path: '',
    component: BluetoothinterationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BluetoothinterationPageRoutingModule {}
