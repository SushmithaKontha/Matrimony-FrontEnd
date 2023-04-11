import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { map, of} from 'rxjs';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/profile.model';
import { ImageProcessingService } from './image-processing.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Profile>{

  constructor(private profileService:ProfileService,
    private imageProcessingService:ImageProcessingService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<Profile>
  {
    const id = route.paramMap.get("pId");
    if(id){
   return this.profileService.getProfileById(id).pipe(map(p=>this.imageProcessingService.createImages(p)))
   ;
    }
    else{
      return of(this.getProfileDetails());
    }
  }

  getProfileDetails(){
    return {
    pId:null,
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
    profileImages: []
    };
  }
}
