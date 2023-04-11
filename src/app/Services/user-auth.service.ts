import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): any[] {
    const roles = localStorage.getItem("roles");
    return roles ? JSON.parse(roles) : [];
  }
  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    const token = localStorage.getItem("jwtToken");
    return token ? token : "";
  }

  
  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
  public isAdmin(){
   const roles:any[] = this.getRoles();
   return roles[0].roleName=='Admin';
  }
  public isUser(){
    const roles:any[] = this.getRoles();
   return roles[0].roleName=='User';
  }

}
