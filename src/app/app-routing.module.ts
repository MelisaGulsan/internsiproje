import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {path:"", component:LoginPageComponent, pathMatch:'full'},
  { path:"content", component:ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
