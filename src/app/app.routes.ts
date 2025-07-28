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
import { YearTournamentsComponent } from './pages/tournaments/year-tournaments/year-tournaments.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryDetailsComponent } from './pages/gallery-details/gallery-details.component';

export const routes: Routes = [
  // Redirigir la raíz exacta a /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rutas principales
  { path: 'home', component: HomeComponent },
  { path: 'join-us', component: JoinUsComponent },

  // Rutas de "Sobre Nosotros"
  { path: 'about', component: AboutComponent },
  { path: 'about/history', component: HistoryComponent },
  { path: 'about/mission', component: MissionComponent },
  { path: 'about/vision', component: VisionComponent },

  // Rutas del equipo
  { path: 'team', component: TeamComponent },
  { path: 'team/teachers', component: TeachersComponent },
  { path: 'team/administrators', component: AdministratorsComponent },

  // Rutas de testimonios
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'testimonials/fathers', component: FathersComponent },
  { path: 'testimonials/players', component: PlayersComponent },

  // Rutas de premios (temporalmente deshabilitadas)
  { path: 'awards', component: NotContentPageComponent },
  { path: 'awards/trophy-room', component: NotContentPageComponent },
  { path: 'awards/player-awards', component: NotContentPageComponent },

  // Rutas de torneos
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'tournaments/:year', component: YearTournamentsComponent },
  { path: 'tournament-details', component: TournamentDetailsComponent },

  // Otras rutas
  { path: 'categories', component: CategoriesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:year', component: GalleryDetailsComponent },
  { path: 'contact', component: ContactComponent },

  // Ruta catch-all para manejar 404s - DEBE SER LA ÚLTIMA
  { path: '**', component: ErrorPageComponent },
];
