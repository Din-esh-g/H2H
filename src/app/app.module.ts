import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtModule } from '@auth0/angular-jwt'
import { TimeAgoPipe } from 'time-ago-pipe';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { HomeComponent } from './Components/home/home.component';
import { MyjobComponent } from './Components/myjob/myjob.component';
import { MyeventsComponent } from './Components/myevents/myevents.component';
import { MynewsComponent } from './Components/mynews/mynews.component';
import { MycommunityComponent } from './Components/mycommunity/mycommunity.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MakeafriendComponent } from './Components/Memebers/makeafriend/makeafriend.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyjobsService } from './_Services/myjobs.service';
import { AuthenticationService } from './_Services/authentication.service';
import { DropdownModule } from 'ngx-dropdown';
import {BsDropdownModule,TabsModule, BsDatepickerModule, PaginationModule} from 'ngx-bootstrap';
import { BuyandsaleComponent } from './Components/buyandsale/buyandsale.component';
import { FriendsComponent } from './Components/Memebers/friends/friends.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DispalycardComponent } from './Components/Memebers/dispalycard/dispalycard.component';
import { MembersdetailsComponent } from './Components/Memebers/membersdetails/membersdetails.component';
import { AuthGuard } from './_guard/auth.guard';
import { UserService } from './_Services/user.service';
import { MDetailResolver } from './_resolver/m-detail-resolver';
//import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { NgxGalleryModule } from 'ngx-gallery';
import { ErrorInterceptorService } from './_Services/error.interceptor.service';
import { EditprofileComponent } from './Components/Memebers/editprofile/editprofile.component';
import { AlertifyService } from './_Services/alertify.service';
import { MEditResolver } from './_resolver/m-edit-resolver';
import { MListResolver } from './_resolver/m-list-resolver';
import { PreventUnSavedChanges } from './_guard/prevent_unsaved_change';
import { PhotoeditorComponent } from './Components/Memebers/photoeditor/photoeditor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterComponent } from './Components/Memebers/register/register.component';
import { LikeListResolver } from './_resolver/list_like_resolver';
import { MessageResolver } from './_resolver/message_resolver';
import { MessageComponent } from './Components/message/message.component';
import { MessagethreadadComponent } from './Components/Memebers/messagethreadad/messagethreadad.component';



export function tokenGetter(){
  return localStorage.getItem('token');
}
export class CustomHammerConfig extends HammerGestureConfig{
  overrides={
    pinch:{enable:false},
    rotate:{enable:false}
  };
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyjobComponent,
    MyeventsComponent,
    MynewsComponent,
    MycommunityComponent,
    PropertiesComponent,
    NavbarComponent,
    MakeafriendComponent,
    BuyandsaleComponent,
    FriendsComponent,
    DispalycardComponent,
    MembersdetailsComponent,
    EditprofileComponent,
    PhotoeditorComponent,
    RegisterComponent,
    TimeAgoPipe,
    MessageComponent,
    MessagethreadadComponent
   
   
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AngularFontAwesomeModule,
    FontAwesomeModule,
    NgxGalleryModule,
    FileUploadModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
   // NgxNavbarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44346'],
        blacklistedRoutes: ['localhost:44346/api/auth']
      }
    })
  
    //BsDropdownModule.forRoot()
  ],
  providers: [
    MyjobsService,
    AuthenticationService,
    AuthGuard,
    UserService,
    ErrorInterceptorService,
    MDetailResolver,
    AlertifyService,
    MEditResolver,
    MListResolver,
    PreventUnSavedChanges,
    LikeListResolver,
    MessageResolver,
{provide:HAMMER_GESTURE_CONFIG, useClass:CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
