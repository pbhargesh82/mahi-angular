import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainComponent}
];
