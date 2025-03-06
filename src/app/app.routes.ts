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
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FathersComponent } from './pages/testimonials/fathers/fathers.component';
import { PlayersComponent } from './pages/testimonials/players/players.component';
import { TrophyRoomComponent } from './pages/awards/trophy-room/trophy-room.component';
import { PlayerAwardsComponent } from './pages/awards/player-awards/player-awards.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { TournamentDetailsComponent } from './pages/tournament-details/tournament-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/history', component: HistoryComponent },
  { path: 'about/mission', component: MissionComponent },
  { path: 'about/vision', component: VisionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'team/teachers', component: TeachersComponent },
  { path: 'team/administrators', component: AdministratorsComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'testimonials/fathers', component: FathersComponent },
  { path: 'testimonials/players', component: PlayersComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'awards/trophy-room', component: TrophyRoomComponent },
  { path: 'awards/player-awards', component: PlayerAwardsComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'tournament-details', component: TournamentDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorPageComponent },
];
