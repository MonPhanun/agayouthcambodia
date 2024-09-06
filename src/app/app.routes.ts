import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { WorshipbandComponent } from './core/components/worshipband/worshipband.component';
import { WorshipteamComponent } from './core/components/worshipteam/worshipteam.component';
import { YouthComponent } from './core/components/youth/youth.component';
import { ContactComponent } from './core/components/contact/contact.component';

export const routes: Routes = [
   {
    path:"",
    component:HomeComponent
   },
   {
    path:"team",
    component:WorshipteamComponent
   },
   {
    path:"band",
    component:WorshipbandComponent
   },
   {
    path:"youth",
    component:YouthComponent
   },
   {
    path:"contact",
    component:ContactComponent
   }
];
