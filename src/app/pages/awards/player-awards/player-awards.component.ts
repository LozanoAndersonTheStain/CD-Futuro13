import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PlayerAward } from '../../../interfaces/player-award.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-player-awards',
  imports: [CommonModule],
  templateUrl: './player-awards.component.html',
  styleUrl: './player-awards.component.scss',
})
export class PlayerAwardsComponent implements OnInit {
  playerAward: PlayerAward[] = [
    {
      nameCategory: 'Sub 12',
      namePlayer: 'Mateo Gutierrez',
      nameTournament: 'Torneo Nacional de Fútbol Infantil',
      imageUrl: 'assets/img_player_awards/figura_del_partido.jpg',
      agePlayer: 10,
      goalsScored: 12,
      assistance: 5,
      award: {
        nameAward: 'Mejor Jugador',
        year: 2023,
      },
      position: 'Delantero',
    },
    {
      nameCategory: 'Sub 8',
      namePlayer: 'Luis Gomez',
      nameTournament: 'Torneo Regional de Fútbol Infantil',
      imageUrl: 'assets/img_player_awards/mejor_jugador_del_torneo.jpg',
      agePlayer: 8,
      goalsScored: 8,
      assistance: 5,
      award: {
        nameAward: 'Mejor Arquero',
        year: 2024,
      },
      position: 'Arquero',
    },
    {
      nameCategory: 'Sub 6',
      namePlayer: 'Sebastian Suarez',
      nameTournament: 'Torneo Regional de Fútbol Infantil',
      imageUrl: 'assets/img_player_awards/figura_del_partido.jpg',
      agePlayer: 6,
      goalsConceded: 5,
      assistance: 3,
      award: {
        nameAward: 'Figura del Partido',
        year: 2025,
      },
      position: 'Arquero',
    },
    {
      nameCategory: 'Sub 12',
      namePlayer: 'Carlos Lopez',
      nameTournament: 'Torneo Nacional de Fútbol Infantil',
      imageUrl: 'assets/img_player_awards/mejor_jugador_del_torneo.jpg',
      agePlayer: 14,
      goalsScored: 15,
      assistance: 8,
      award: {
        nameAward: 'Mejor Jugador del Torneo',
        year: 2022,
      },
      position: 'Medio Campista',
    },
    {
      nameCategory: 'Sub 10',
      namePlayer: 'Sebastian Suarez',
      nameTournament: 'Torneo Regional de Fútbol Infantil',
      imageUrl: 'assets/img_player_awards/figura_del_partido.jpg',
      agePlayer: 10,
      goalsScored: 12,
      assistance: 5,
      award: {
        nameAward: 'Mejor Jugador',
        year: 2023,
      },
      position: 'Delantero',
    },
  ];

  currentPlayerAwardIndex = 0;
  visiblePlayerAwards: PlayerAward[] = [];

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.updateVisiblePlayerAward();
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Premios a Jugadores',
      description:
        'Conoce los premios y reconocimientos que han recibido nuestros jugadores por su destacada actuación en los partidos.',
      keywords:
        'CD Futuro 13, premios, jugadores, futbol, reconocimiento, comuna 13',
      url: 'https://corporaciondeportivafuturo13.com/awards/player-awards',
      type: 'website',
    });
  }

  updateVisiblePlayerAward(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      const itemsToShow = isMobile ? 1 : 3;
      this.visiblePlayerAwards = this.playerAward.slice(
        this.currentPlayerAwardIndex,
        this.currentPlayerAwardIndex + itemsToShow
      );
    }
  }

  nextPlayerAward(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768;
      const itemsToShow = isMobile ? 1 : 3;
      if (
        this.currentPlayerAwardIndex + itemsToShow <
        this.playerAward.length
      ) {
        this.currentPlayerAwardIndex++;
        this.updateVisiblePlayerAward();
      }
    }
  }

  prevPlayerAward(): void {
    if (this.currentPlayerAwardIndex > 0) {
      this.currentPlayerAwardIndex--;
      this.updateVisiblePlayerAward();
    }
  }

  updateCurrentPlayerAward(index: number): void {
    this.currentPlayerAwardIndex = index;
    this.updateVisiblePlayerAward();
  }
}
