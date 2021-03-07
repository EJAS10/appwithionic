import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioReprodPage } from './audio-reprod.page';

const routes: Routes = [
  {
    path: '',
    component: AudioReprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioReprodPageRoutingModule {}
