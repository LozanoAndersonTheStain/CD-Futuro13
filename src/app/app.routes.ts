import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/about/history/history.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotContentPageComponent } from './pages/not-content-page/not-content-page.component';
import { JoinUsComponent } from './pages/join-us/join-us.component';
import { MissionComponent } from './pages/about/mission/mission.component';
import { VisionComponent } from './pages/about/vision/vision.component';
import { TeamComponent } from './pages/team/team.component';
import { TeachersComponent } from './pages/team/teachers/teachers.component';
import { AdministratorsComponent } from './pages/team/administrators/administrators.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/history', component: HistoryComponent },
  { path: 'about/mission', component: MissionComponent },
  { path: 'about/vision', component: VisionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/teachers', component: TeachersComponent },
  { path: 'team/administrators', component: AdministratorsComponent },
  { path: 'testimonials', component: NotContentPageComponent },
  { path: 'testimonials/testimonials-fathers', component: NotContentPageComponent },
  { path: 'testimonials/testimonials-players', component: NotContentPageComponent },
  { path: 'trophy_room', component: NotContentPageComponent },
  { path: 'tournaments', component: NotContentPageComponent },
  { path: 'corporation', component: NotContentPageComponent },
  { path: 'contact', component: NotContentPageComponent },
  { path: '**', component: ErrorPageComponent }
];
