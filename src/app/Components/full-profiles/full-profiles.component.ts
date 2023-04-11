import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Profile } from 'src/app/model/profile.model';
import { ImageProcessingService } from 'src/app/Services/image-processing.service';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-full-profiles',
  templateUrl: './full-profiles.component.html',
  styleUrls: ['./full-profiles.component.css']
})
export class FullProfilesComponent implements OnInit {
  profileDetails:any = [];
  constructor(private profileService :ProfileService,
    private imageProcessingService :ImageProcessingService){

  }
  ngOnInit(): void {
    this.getAllProfiles();
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

}
