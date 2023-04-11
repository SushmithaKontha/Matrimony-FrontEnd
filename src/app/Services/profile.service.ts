import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient : HttpClient) { }

  public addProfile(profile:FormData){
    return this.httpClient.post<Profile>("http://localhost:9090/profile/add",profile);

  }
  public getAllProfiles(){
    return this.httpClient.get<Profile[]>("http://localhost:9090/getAllProfiles");
  }

  public deleteProduct(pId:number){
    return this.httpClient.delete("http://localhost:9090/deleteProfileDetails/"+pId);
  }

  public getProfileById(pId:any){
    return this.httpClient.get<Profile>("http://localhost:9090/profile/"+pId);

  }
}
