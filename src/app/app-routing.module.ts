import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HOMEComponent} from "./pages/home-page/home.component";
import {MYGOALSComponent} from "./pages/mygoals-page/mygoals.component";
import {Page404Component} from "./pages/errors/page404/page404.component";
import {STRATEGYSComponent} from "./pages/strategys-page/strategys.component";
import {PROFILEComponent} from "./pages/profile-page/profile.component";



const routes: Routes = [
  {path: '', component: HOMEComponent},
  {path: 'home', component: HOMEComponent},
  {path: 'strategys', component: STRATEGYSComponent},
  {path: 'mygoals', component: MYGOALSComponent},
  {path: 'profile', component: PROFILEComponent},
  {path: '**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
