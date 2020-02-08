import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MyjobComponent } from './Components/myjob/myjob.component';
import { MyeventsComponent } from './Components/myevents/myevents.component';
import { MynewsComponent } from './Components/mynews/mynews.component';
import { MycommunityComponent } from './Components/mycommunity/mycommunity.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MakeafriendComponent } from './Components/Memebers/makeafriend/makeafriend.component';
import { FormsModule } from '@angular/forms';
import { MyjobsService } from './_Services/myjobs.service';
import { AuthenticationService } from './_Services/authentication.service';
import { DropdownModule } from "ngx-dropdown";
import { BuyandsaleComponent } from './Components/buyandsale/buyandsale.component';
import { FriendsComponent } from './Components/Memebers/friends/friends.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DispalycardComponent } from './Components/Memebers/dispalycard/dispalycard.component';
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
    DispalycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
  
    //BsDropdownModule.forRoot()
  ],
  providers: [
    MyjobsService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
