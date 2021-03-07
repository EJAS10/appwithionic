import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioReprodPageRoutingModule } from './audio-reprod-routing.module';

import { AudioReprodPage } from './audio-reprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioReprodPageRoutingModule
  ],
  declarations: [AudioReprodPage]
})
export class AudioReprodPageModule {}
