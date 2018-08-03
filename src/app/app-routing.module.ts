import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ClassComponent } from './class/class.component'


const routes: Routes = [
  { 
    path: "",
    component: LoginComponent
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "setting",
    component: SettingComponent
  },

  {
    path: "class",
    component: ClassComponent
  },

  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
