import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Profile } from 'src/app/model/profile.model';
import { ImageProcessingService } from 'src/app/Services/image-processing.service';
import { ProfileService } from 'src/app/Services/profile.service';
import { ShowProfileDialogComponent } from '../show-profile-dialog/show-profile-dialog.component';

@Component({
  selector: 'app-show-profile-details',
  templateUrl: './show-profile-details.component.html',
  styleUrls: ['./show-profile-details.component.css']
})
export class ShowProfileDetailsComponent implements OnInit {

  profileDetails:Profile[]=[];
  displayedColumns: string[] = ['FullName', 'Age', 'Gender', 'Height','ContactNumber',
'Caste','Religion','Star','MotherTongue','Residence','Income',
'Citizenship','Education','Description','Images','Edit','Delete'];
  

  
  constructor(private profileService:ProfileService,
    public imagesDialog: MatDialog,
    private imageProcessingService : ImageProcessingService,
    private router : Router){}

  ngOnInit():void{
    this.getAllProfiles(

    );
   
  }
  public getAllProfiles(){
    this.profileService.getAllProfiles()
    .pipe(
      map((x:Profile[],i)=> x.map((profile:Profile)=>this.imageProcessingService.createImages(profile))
      ))
    .subscribe(
      (resp:Profile[])=>{
        console.log(resp);
        this.profileDetails=resp;
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  deleteProfile(pId: any){
    this.profileService.deleteProduct(pId).subscribe(
      (resp)=>{
        this.getAllProfiles()
;      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
    
  }
  showImages(profile:Profile){
    console.log(profile);
    this.imagesDialog.open(ShowProfileDialogComponent, {
      data:{
        images:profile.profileImages
      }
      ,height:'500px',
      'width': '800px'
    });
    
  }
  editProfileDetails(pId: any){
    this.router.navigate(['/addNewProfile',{pId:pId}])
  }
}
