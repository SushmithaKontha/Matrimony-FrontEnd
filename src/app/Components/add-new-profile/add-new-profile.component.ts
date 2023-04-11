import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FileHandle } from 'src/app/model/file-handle.model';
import { Profile } from 'src/app/model/profile.model';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-add-new-profile',
  templateUrl: './add-new-profile.component.html',
  styleUrls: ['./add-new-profile.component.css']
})
export class AddNewProfileComponent implements OnInit {

  isNewProfile = true;

  profile: Profile = {
    pId: null,
    fullName: '',
    age: 0,
    gender: '',
    height: 0,
    contactNumber: 0,
    caste: '',
    religion: '',
    star: '',
    motherTongue: '',
    residence: '',
    income: 0,
    citizenship: '',
    education: '',
    description: '',
    profileImages: [],
    
  }
  constructor(private profileService: ProfileService,
    private sanitizer: DomSanitizer, private activatedRoute:ActivatedRoute) {

  }
  ngOnInit(): void {
 this.profile=this.activatedRoute.snapshot.data['profile'];
 if(this.profile && this.profile.pId){
  this.isNewProfile=false;
 }
  }
  addProfile(profileForm: NgForm) {
   const productFormData =  this.prepareFormData(this.profile);
    this.profileService.addProfile(productFormData).subscribe(
      (response: Profile) => {
        profileForm.reset();
        this.profile.profileImages=[];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  prepareFormData(profile: Profile):FormData {
    const formData = new FormData();

    formData.append('profile',
      new Blob([JSON.stringify(profile)],
        { type: 'application/json' })
    );
    
    for(var i =0;i<profile.profileImages.length;i++){
      formData.append(
        'imageFile',
        profile.profileImages[i].file,
        profile.profileImages[i].file.name
      );
    }
    return formData;
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      }

      this.profile.profileImages.push(fileHandle);
    }


  }
  removeImages(i:number){
this.profile.profileImages.splice(i,1);
  }
  fileDropped(fileHandle:FileHandle){
        this.profile.profileImages.push(fileHandle);
  }
}
