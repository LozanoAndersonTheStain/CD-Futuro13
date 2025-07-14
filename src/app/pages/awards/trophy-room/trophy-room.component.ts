import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Trophy } from '../../../interfaces/trophy.interface';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-trophy-room',
  imports: [CommonModule],
  templateUrl: './trophy-room.component.html',
  styleUrls: ['./trophy-room.component.scss'],
})
export class TrophyRoomComponent implements OnInit {
  trophies: Trophy[] = [
    {
      nameTrophy: 'Copa de Oro',
      nameCategory: 'Sub 12',
      nameTournament: 'Torneo Nacional de Fútbol Infantil',
      imageUrl: 'assets/img_trophies/trophy1.jpg',
      GamesWon: 10,
      GamesLost: 5,
      GamesTied: 3,
      GoalsScored: 20,
      FoulsCommitted: 30,
      cards: {
        yellow: 4,
        red: 1,
      },
      dateEarned: '2023-05-15',
      location: 'Estadio Nacional, Lima',
      description: 'Ganado en una emocionante final contra el equipo local.',
      coach: 'Juan Pérez',
      captain: 'Luis Gómez',
    },
    {
      nameTrophy: 'Copa Plata',
      nameCategory: 'Sub 8',
      nameTournament: 'Torneo Regional de Fútbol Infantil',
      imageUrl: 'assets/img_trophies/trophy2.jpeg',
      GamesWon: 8,
      GamesLost: 4,
      GamesTied: 2,
      GoalsScored: 18,
      FoulsCommitted: 25,
      cards: {
        yellow: 3,
        red: 0,
      },
      dateEarned: '2023-04-10',
      location: 'Estadio Regional, Arequipa',
      description:
        'Primer lugar en el torneo regional con una destacada participación del equipo.',
      coach: 'Carlos López',
      captain: 'Miguel Torres',
    },
    {
      nameTrophy: 'Copa Bronce',
      nameCategory: 'Sub 13',
      nameTournament: 'Torneo Internacional de Fútbol Juvenil',
      imageUrl: 'assets/img_trophies/trophy3.jpg',
      GamesWon: 12,
      GamesLost: 3,
      GamesTied: 1,
      GoalsScored: 25,
      FoulsCommitted: 20,
      cards: {
        yellow: 5,
        red: 2,
      },
      dateEarned: '2023-06-20',
      location: 'Estadio Internacional, Santiago',
      description:
        'Tercer lugar en un torneo con equipos de alto nivel internacional.',
      coach: 'Ana Martínez',
      captain: 'Diego Ramírez',
    },
    {
      nameTrophy: 'Copa Diamante',
      nameCategory: 'Sub 16',
      nameTournament: 'Torneo Continental de Fútbol Juvenil',
      imageUrl: 'assets/img_trophies/trophy1.jpg',
      GamesWon: 15,
      GamesLost: 2,
      GamesTied: 0,
      GoalsScored: 30,
      FoulsCommitted: 15,
      cards: {
        yellow: 2,
        red: 0,
      },
      dateEarned: '2023-07-05',
      location: 'Estadio Continental, Buenos Aires',
      description:
        'Campeones del torneo continental con una actuación impecable.',
      coach: 'Roberto Sánchez',
      captain: 'Javier Fernández',
    },
    {
      nameTrophy: 'Copa Esmeralda',
      nameCategory: 'Sub 17',
      nameTournament: 'Torneo Mundial de Fútbol Juvenil',
      imageUrl: 'assets/img_trophies/trophy2.jpeg',
      GamesWon: 14,
      GamesLost: 1,
      GamesTied: 2,
      GoalsScored: 28,
      FoulsCommitted: 18,
      cards: {
        yellow: 6,
        red: 1,
      },
      dateEarned: '2023-08-12',
      location: 'Estadio Mundial, Madrid',
      description:
        'Subcampeones en el torneo mundial, demostrando un gran nivel de juego.',
      coach: 'Laura García',
      captain: 'Carlos Mendoza',
    },
  ];

  currentTrophyIndex = 0;
  visibleTrophies: Trophy[] = [];

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.updateVisibleTrophies();

    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Sala de Trofeos',
      description:
        'Descubre los logros y trofeos de CD Futuro 13, un club deportivo comprometido con la formación de jóvenes íntegros en la Comuna 13 de Medellín.',
      keywords:
        'CD Futuro 13, sala de trofeos, logros, comuna 13, Medellín, formación deportiva, jóvenes',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/awards/trophy-room',
      type: 'website',
    });
  }

  updateVisibleTrophies(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      const itemsToShow = isMobile ? 1 : 3;
      this.visibleTrophies = this.trophies.slice(
        this.currentTrophyIndex,
        this.currentTrophyIndex + itemsToShow
      );
    }
  }

  nextTrophy(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      const itemsToShow = isMobile ? 1 : 3;
      if (this.currentTrophyIndex + itemsToShow < this.trophies.length) {
        this.currentTrophyIndex++;
        this.updateVisibleTrophies();
      }
    }
  }

  prevTrophy(): void {
    if (this.currentTrophyIndex > 0) {
      this.currentTrophyIndex--;
      this.updateVisibleTrophies();
    }
  }

  updateCurrentTrophy(index: number): void {
    this.currentTrophyIndex = index;
    this.updateVisibleTrophies();
  }
}
