import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ClassComponent } from './class/class.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassinfoComponent } from './classinfo/classinfo.component';

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
    path: "profile",
    component: ProfileComponent
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
    path: "classinfo",
    component: ClassinfoComponent
  },

  {
    path: "registration",
    component: RegistrationComponent
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
