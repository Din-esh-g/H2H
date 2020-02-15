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
import { EditprofileComponent } from './Components/Memebers/editprofile/editprofile.component';
import { MEditResolver } from './_resolver/m-edit-resolver';
import { MListResolver } from './_resolver/m-list-resolver';
import { PreventUnSavedChanges } from './_guard/prevent_unsaved_change';
import { RegisterComponent } from './Components/Memebers/register/register.component';
import { LikeListResolver } from './_resolver/list_like_resolver';
import { MessageComponent } from './Components/message/message.component';
import { MessageResolver } from './_resolver/message_resolver';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path: 'register', component: RegisterComponent },
{path: 'myjob',component:MyjobComponent},
{path:'mynews', component:MynewsComponent},
{ path: 'message', component: MessageComponent, resolve:{messages: MessageResolver} },
{ path: 'makeafriend', component: MakeafriendComponent, resolve: { users: LikeListResolver }},
{path:'mycommunity',component:MycommunityComponent},
{ path: 'buyandsale', component: BuyandsaleComponent, canActivate:[AuthGuard]},
  { path: 'myevents', component: MyeventsComponent },
  { path: 'friends/editprofile', component: EditprofileComponent, resolve: { user: MEditResolver }, canDeactivate:[PreventUnSavedChanges]},
{ path: 'friends', component: FriendsComponent, resolve: {users:MListResolver}},
{ path: 'friends/:id', component: MembersdetailsComponent,resolve:{user: MDetailResolver}},
{path:'**',redirectTo:'home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
