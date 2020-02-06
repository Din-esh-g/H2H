import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MyjobComponent } from './Components/myjob/myjob.component';
import { MynewsComponent } from './Components/mynews/mynews.component';
import { MakeafriendComponent } from './Components/makeafriend/makeafriend.component';
import { MycommunityComponent } from './Components/mycommunity/mycommunity.component';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path: 'myjob',component:MyjobComponent},
{path:'mynews', component:MynewsComponent},
{path: 'makeafriend',component:MakeafriendComponent},
{path:'mycommunity',component:MycommunityComponent},
{path:'**',redirectTo:'home',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
