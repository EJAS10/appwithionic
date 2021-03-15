import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.page.html',
  styleUrls: ['./image-galery.page.scss'],
})
export class ImageGaleryPage implements OnInit {
 image: any;
  constructor(public Camera: Camera) { }

  sacarCamara(){
    this.Camera.getPicture({
      destinationType: this.Camera.DestinationType.DATA_URL,
      sourceType: this.Camera.PictureSourceType.CAMERA,
      mediaType: this.Camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.Camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = "data:image/jpeg;base64,"+ resultado
    }).catch(error => {
      console.log(error)
    })
  }

  tomarGaleria(){

  }

  ngOnInit() {
  }

}
