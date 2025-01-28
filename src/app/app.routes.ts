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
  { path: '', redirectTo: 'CD-Futuro13/home', pathMatch: 'full' },
  { path: 'CD-Futuro13/home', component: HomeComponent },
  { path: 'CD-Futuro13/join-us', component: JoinUsComponent },
  { path: 'CD-Futuro13/about', component: AboutComponent },
  { path: 'CD-Futuro13/about/history', component: HistoryComponent },
  { path: 'CD-Futuro13/about/mission', component: MissionComponent },
  { path: 'CD-Futuro13/about/vision', component: VisionComponent },
  { path: 'CD-Futuro13/team', component: TeamComponent },
  { path: 'CD-Futuro13/team/teachers', component: TeachersComponent },
  { path: 'CD-Futuro13/team/administrators', component: AdministratorsComponent },
  { path: 'CD-Futuro13/testimonials', component: NotContentPageComponent },
  { path: 'CD-Futuro13/testimonials/testimonials-fathers', component: NotContentPageComponent },
  { path: 'CD-Futuro13/testimonials/testimonials-players', component: NotContentPageComponent },
  { path: 'CD-Futuro13/trophy_room', component: NotContentPageComponent },
  { path: 'CD-Futuro13/tournaments', component: NotContentPageComponent },
  { path: 'CD-Futuro13/corporation', component: NotContentPageComponent },
  { path: 'CD-Futuro13/contact', component: NotContentPageComponent },
  { path: '**', component: ErrorPageComponent }
];
