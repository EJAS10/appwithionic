import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageGaleryPageRoutingModule } from './image-galery-routing.module';

import { ImageGaleryPage } from './image-galery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageGaleryPageRoutingModule
  ],
  declarations: [ImageGaleryPage]
})
export class ImageGaleryPageModule {}
