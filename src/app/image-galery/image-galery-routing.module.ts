import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGaleryPage } from './image-galery.page';

const routes: Routes = [
  {
    path: '',
    component: ImageGaleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageGaleryPageRoutingModule {}
