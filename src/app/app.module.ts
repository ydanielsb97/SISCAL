import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { httpService } from './services/http.services';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { FichaComponent } from './component/profile/ficha/ficha.component';
import { CalComponent } from './component/profile/cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    FichaComponent,
    CalComponent
  ],
  imports: [
    routing,
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    httpService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
