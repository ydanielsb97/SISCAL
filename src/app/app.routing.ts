// Clases y modulos necesarios

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";

// Componentes a enrutar

import { HomeComponent } from "./component/home/home.component";
import { RegisterComponent } from "./component/register/register.component";
import { LoginComponent } from "./component//login/login.component";
import { ProfileComponent } from "./component//profile/profile.component";

const appRoutes : Routes = [
	{path: '', component: HomeComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'profile', component: ProfileComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);


