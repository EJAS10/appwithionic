import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.page.html',
  styleUrls: ['./image-galery.page.scss'],
})
export class ImageGaleryPage implements OnInit {
//  image: any;
 private image: string[] = [];
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
     const item = this.getPositionItem(this.image.length);
      this.image[item] = "data:image/jpeg;base64,"+ resultado
    }).catch(error => {
      console.log(error)
    })
  }

  private getPositionItem(image) {
    if (image == 0) {
      return 0;
    } else {
      return image + 1;
    }
  }
  tomarGaleria(){

  }

  // loadSaved() {
  //   this.storage.get('photos').then((photos) => {
  //     this.photos = photos || [];
  //   });
  }
  ngOnInit() {

  }

}
