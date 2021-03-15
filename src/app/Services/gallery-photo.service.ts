import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource} from '@capacitor/core';
import { Photo } from '../Modulos/Photo.interface';

const {Camera, Filesystem, Storage}= Plugins;
@Injectable({
  providedIn: 'root'
})
export class GalleryPhotoService {
  private photosArray: Photo[] = [];
  private PHOTO_STORAGE : string = "photos";
  private platform: Platform;

  constructor(platform: Platform ) {
    this.platform = platform;
  }
  
  public async addnuevagalery(){
    const CapturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  
    
  }

  private GetNamePhoto(): string{
        return new Date().getTime() + '.jpeg';
      }
}
