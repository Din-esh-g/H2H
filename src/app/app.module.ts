import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MyjobComponent } from './Components/myjob/myjob.component';
import { MyeventsComponent } from './Components/myevents/myevents.component';
import { MynewsComponent } from './Components/mynews/mynews.component';
import { MycommunityComponent } from './Components/mycommunity/mycommunity.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MakeafriendComponent } from './Components/makeafriend/makeafriend.component';

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
    MakeafriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
