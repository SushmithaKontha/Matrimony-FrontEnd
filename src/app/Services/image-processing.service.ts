import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../model/file-handle.model';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) { }

  public createImages(profile:Profile){
const profileImages:any[]=profile.profileImages;

const profileImagesToFileHandle: FileHandle[]=[];

for(let i=0;i<profileImages.length;i++){
  const imageFileData =profileImages[i];

  const imageBlob =this.dataURItoBlob(imageFileData.picByte,imageFileData.type);
   const imageFile = new File([imageBlob],imageFileData.name, {type:imageFileData.type});

   const finalFileHandle: FileHandle={
    file:imageFile,
    url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
   };
   profileImagesToFileHandle.push(finalFileHandle);
}
profile.profileImages=profileImagesToFileHandle;
return profile;
  }
  public dataURItoBlob(picBytes:any, imageType:any){
const byteString = window.atob(picBytes);
const arrayBuffer = new ArrayBuffer(byteString.length);
const int8Array = new Uint8Array(arrayBuffer);

for(let i=0;i<byteString.length;i++){
 int8Array[i]= byteString.charCodeAt(i);
}
const blob = new Blob([int8Array],{type:imageType});
return blob;
  }
}
