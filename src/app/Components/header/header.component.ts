import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(private userAuthService:UserAuthService, private router:Router,
  public userService:UserService){

}
ngOnInit():void{

}

public isLoggedIn(){
  return this.userAuthService.isLoggedIn();
}
public logout(){
  this.userAuthService.clear();
  this.router.navigate(['/home']);
}
public isAdmin(){
 return this.userAuthService.isAdmin();
}
public isUser(){
  return this.userAuthService.isUser();
}
}

