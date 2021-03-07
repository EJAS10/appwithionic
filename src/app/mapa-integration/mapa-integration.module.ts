import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaIntegrationPageRoutingModule } from './mapa-integration-routing.module';

import { MapaIntegrationPage } from './mapa-integration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaIntegrationPageRoutingModule
  ],
  declarations: [MapaIntegrationPage]
})
export class MapaIntegrationPageModule {}
