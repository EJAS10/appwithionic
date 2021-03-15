import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource} from '@capacitor/core';
import { Photo } from '../Modulos/Photo.interface';
import {FilemanagerService} from '../filemanager.service'

const {Camera, Filesystem, Storage}= Plugins;
@Injectable({
  providedIn: 'root'
})
export class GalleryPhotoService {
  private photosArray: Photo[] = [];
  private PHOTO_STORAGE : string = "photos";
  private platform: Platform;

  constructor(platform: Platform,FilemanagerService: FilemanagerService ) {
    this.platform = platform;
  }
  
  public async addnuevagalery(){
    const CapturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    FilemanagerService.fileWriteImage(this.GetNamePhoto(), CapturedPhoto)
    
  }

  private GetNamePhoto(): string{
        return new Date().getTime() + '.jpeg';
      }

   // const saveImageFile = 
    // await this.Savephoto(CapturedPhoto);

    // this.photosArray.unshift(saveImageFile); 
    
    // Storage.set({
    //   key: this.PHOTO_STORAGE ,
    //   value: JSON.stringify(this.photosArray)
    // });

    // this.photo.unshift({
    //   filepath:'soon ...',
    //   webviewPath: CapturedPhoto.webPath
    // });  

    // Storage.set({
    //   key: this.PHOTO_Storage,
    //   value: JSON.stringify(this.photo.map( p => {
    //     const photoCopy = { ... p};
    //     delete photoCopy.base64;
    //     return photoCopy;
    //   }))
    // })

//   public async loadSaved(){
//     const photosList = await Storage.get({
//       key: this.PHOTO_STORAGE 
//     });
//     this.photosArray =  JSON.parse(photosList.value) || [];
   
//     if (!this.platform.is('hybrid')) {
//       for (let photo of this.photosArray) {
//         const readFile = await Filesystem.readFile({
//             path: photo.filepath,
//             directory: FilesystemDirectory.Data
//         });
//         photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
//       }
//     }
//   }

//   public getPhotos(){
//     return this.photosArray;
//   }

//   private GetNamePhoto(): string{
//     return new Date().getTime() + '.jpeg';
//   }

//   private async Savephoto(cameraPhoto: CameraPhoto){
//     //const base64Data = await this.readAsBase64(cameraPhoto);
//     const photoInTempStorage = await Filesystem.readFile({ path: cameraPhoto.path });
//     const fileName = this.GetNamePhoto()

//     const savedFile =  await Filesystem.writeFile({
//       path:fileName,
//       data: photoInTempStorage.data,
//       directory: FilesystemDirectory.Data
//     });

//     const finalPhotoUri = await Filesystem.getUri({
//       directory: FilesystemDirectory.Data,
//       path: fileName
//     });

//     let photoPath = Capacitor.convertFileSrc(finalPhotoUri.uri);
//     console.log(photoPath);

// //     if (this.platform.is('hybrid')) {
// //       return {
// //         filepath: savedFile.uri,
// //         webviewPath: Capacitor.convertFileSrc(savedFile.uri),
// //       };
// //     }
// //     else {
// //       return await this.getPhotosFile(cameraPhoto, fileName);   
// //  }
// }

  // private async getPhotosFile(cameraPhoto:CameraPhoto, fileName: string): Promise<Photo> {
  //   return {
  //     filepath: fileName,
  //     webviewPath: cameraPhoto.webPath
  //   }
  // }

  // private async readAsBase64(cameraPhoto: CameraPhoto){
  //   if (this.platform.is('hybrid')) {

  //       const file = await Filesystem.readFile({
  //         path: cameraPhoto.path
  //       });
    
  //       return file.data;
  //     }
  //     else {
  //       const response = await await fetch(cameraPhoto.webPath)
  //       const blob = await response.blob();
  //       return await this.convertBlobToBase64(blob) as string;
  //     }   
  // }

  // convertBlobToBase64 = (blob:Blob) => new Promise( (resolve, reject) => {
  //   const reader = new FileReader;
  //   reader.onerror = reject;
  //   reader.onload = () => {
  //     resolve(reader.result);
  //   };
  //   reader.readAsDataURL(blob);
  // });
}
