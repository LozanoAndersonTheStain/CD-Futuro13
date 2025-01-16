import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotContentPageComponent } from './pages/not-content-page/not-content-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/history', component: NotContentPageComponent },
  { path: '**', component: ErrorPageComponent }
];
