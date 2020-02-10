import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MyjobComponent } from './Components/myjob/myjob.component';
import { MynewsComponent } from './Components/mynews/mynews.component';
import { MakeafriendComponent } from './Components/Memebers/makeafriend/makeafriend.component';
import { MycommunityComponent } from './Components/mycommunity/mycommunity.component';
import { BuyandsaleComponent } from './Components/buyandsale/buyandsale.component';
import { MyeventsComponent } from './Components/myevents/myevents.component';
import { AuthGuard } from './_guard/auth.guard';
import { FriendsComponent } from './Components/Memebers/friends/friends.component';
import { MembersdetailsComponent } from './Components/Memebers/membersdetails/membersdetails.component';
import { MDetailResolver } from './_resolver/m-detail-resolver';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path: 'myjob',component:MyjobComponent},
{path:'mynews', component:MynewsComponent},
{path: 'makeafriend',component:MakeafriendComponent,canActivate:[AuthGuard]},
{path:'mycommunity',component:MycommunityComponent},
{ path: 'buyandsale', component: BuyandsaleComponent, canActivate:[AuthGuard]},
{ path: 'myevents', component: MyeventsComponent },
{ path: 'friends', component: FriendsComponent },
  { path: 'friends/:id', component: MembersdetailsComponent,resolve:{user: MDetailResolver}},
{path:'**',redirectTo:'home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
