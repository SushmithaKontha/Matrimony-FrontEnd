import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { ForbiddenComponent } from './Components/forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './Services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddNewProfileComponent } from './Components/add-new-profile/add-new-profile.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './directives/drag.directive';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FrontendFooterComponent } from './Components/frontend-footer/frontend-footer.component';
//import { ShowProfileDetailsComponent } from './Components/show-product-details/show-profile-details.component';
//import { ShowProductDetailsComponent } from './Components/show-product-details/show-product-details.component';
//import {MatTable, MatTableModule,MatTableDataSource,} from '@angular/material/table';
//import { DataSource } from "@angular/cdk/collections";
//import {CdkTableModule} from '@angular/cdk/table';
import {MatDialogModule} from '@angular/material/dialog';
//import { DataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { ShowProfileDetailsComponent } from './Components/show-profile-details/show-profile-details.component';
import { ShowProfileDialogComponent } from './Components/show-profile-dialog/show-profile-dialog.component';
import { ViewProfilesComponent } from './Components/view-profiles/view-profiles.component';
import { FullProfilesComponent } from './Components/full-profiles/full-profiles.component';
import { UpdatePaymentComponent } from './Components/update-payment/update-payment.component';
import { AddPaymentComponent } from './Components/add-payment/add-payment.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ViewPaymentDetailsComponent } from './Components/view-payment-details/view-payment-details.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
//cdimport { MatCarouselModule } from '@ngmodule/material-carousel';
  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    ForbiddenComponent,
    SignupComponent,
    AddNewProfileComponent,
    DragDirective,
    ContactUsComponent,
    AboutUsComponent,
    FrontendFooterComponent,
    ShowProfileDetailsComponent,
    ShowProfileDialogComponent,
    ViewProfilesComponent,
    FullProfilesComponent,
    UpdatePaymentComponent,
    AddPaymentComponent,
    PaymentComponent,
    ViewPaymentDetailsComponent,
    SubscriptionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatGridListModule,
    CdkTableModule,
MatTableModule,
MatDialogModule
    
   
    
  ],
  providers: [
    AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    UserService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
