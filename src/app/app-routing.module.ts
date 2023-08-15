import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginPageComponent } from './login/login.component';


const routes: Routes = [
  {path:"",redirectTo:'/login', pathMatch:'full'},
  { path:"container", component:ContainerComponent},
  {path:'login', component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
