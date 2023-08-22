import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { ContainerLeftComponent } from './container/container-left/container-left.component';
import { ContainerRightComponent } from './container/container-right/container-right.component';
import { ContainerMiddleComponent } from './container/container-middle/container-middle.component';
import { TabComponent } from './tab/tab.component';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { UsersListService } from './services/user-list.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    ContainerLeftComponent,
    ContainerRightComponent,
    ContainerMiddleComponent,
    TabComponent,
    WeatherComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
