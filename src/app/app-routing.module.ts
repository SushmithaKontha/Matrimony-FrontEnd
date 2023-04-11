import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AddNewProfileComponent } from './Components/add-new-profile/add-new-profile.component';
import { AddPaymentComponent } from './Components/add-payment/add-payment.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FullProfilesComponent } from './Components/full-profiles/full-profiles.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ShowProfileDetailsComponent } from './Components/show-profile-details/show-profile-details.component';
//import { ShowProfileDetailsComponent } from './Components/show-product-details/show-profile-details.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { UpdatePaymentComponent } from './Components/update-payment/update-payment.component';
import { UserComponent } from './Components/user/user.component';
import { ViewPaymentDetailsComponent } from './Components/view-payment-details/view-payment-details.component';
import { ViewProfilesComponent } from './Components/view-profiles/view-profiles.component';
import { ProfileResolverService } from './Services/profile-resolver.service';


const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard],data:{roles:['Admin']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path: 'forbidden',component:ForbiddenComponent},
  {path:'signup',component:SignupComponent},
  {path:'addNewProfile',component:AddNewProfileComponent,canActivate:[AuthGuard],data:{roles:['Admin','User']},
resolve:{
  profile:ProfileResolverService
}},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'showProfileDetails', component:ShowProfileDetailsComponent
,canActivate:[AuthGuard],data:{roles:['Admin']}},
{path:'viewProfiles',component:ViewProfilesComponent},
{path:'fullProfiles',component:FullProfilesComponent},
{ path: 'payments', component: PaymentComponent },
  { path: 'add-payment', component: AddPaymentComponent},
  // { path: '',redirectTo: 'payments', pathMatch: 'full' },
  { path: 'update-payment/:id', component: UpdatePaymentComponent},
  { path: 'payment-details/:id', component:ViewPaymentDetailsComponent},
  {path:'subscribe',component:SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
