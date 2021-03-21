import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-image-galery',
  templateUrl: './image-galery.page.html',
  styleUrls: ['./image-galery.page.scss'],
})
export class ImageGaleryPage implements OnInit {
 private image: string[] = [];
  constructor(private Camera: Camera, private WebView: WebView) { 
    this.image[0] = 'assets/imagen/1.jpg';
    this.image[1] = 'assets/imagen/2.jpg';
  }

  sacarCamara(){
    this.Camera.getPicture({
      destinationType: this.Camera.DestinationType.FILE_URI,
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
      this.image[item] =  this.WebView.convertFileSrc(resultado);
      console.log(this.image[item]);
      //"data:image/jpeg;base64,"+ resultado
    }).catch(error => {
      console.log(error)
    })
  }

  tomarGaleria(){
    this.Camera.getPicture({
      destinationType: this.Camera.DestinationType.FILE_URI,
      sourceType: this.Camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.Camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.Camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true
    }).then(resultado => {
     const item = this.getPositionItem(this.image.length);
      this.image[item] =  this.WebView.convertFileSrc(resultado);
      console.log(this.image[item]);
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
    
  ngOnInit() {

  }

}
