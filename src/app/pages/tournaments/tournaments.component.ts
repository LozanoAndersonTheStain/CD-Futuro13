import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentService } from '../../services/tournament.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MetaTagsService } from '../../services/meta-tags.service';

interface TournamentInfo {
  name: string;
  year: number;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  tournamentId: string;
  type: 'copa' | 'liga';
  categoriesCount: number;
}

@Component({
  selector: 'app-tournaments',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
})
export class TournamentsComponent implements OnInit {
  tournaments: any[] = [];
  tournamentInfos: TournamentInfo[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private tournamentService: TournamentService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.loadTournamentInfos();

    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Torneos',
      description:
        'Descubre los torneos de CD Futuro 13, sus fechas y detalles. Participa y forma parte de nuestra comunidad deportiva.',
      keywords:
        'CD Futuro 13, torneos, fechas, detalles, participar, comunidad deportiva',
      url: 'https://corporaciondeportivafuturo13.com/tournaments',
      type: 'website',
    });
  }

  private loadTournamentInfos(): void {
    this.tournamentService.getTournamentInfos().subscribe((tournamentInfos) => {
      console.log('LOG - tournamentInfos in component:', tournamentInfos);
      this.tournamentInfos = tournamentInfos;
      this.isLoading = false;
    });
  }

  navigateToTournament(tournamentInfo: TournamentInfo): void {
    // Navegar a los torneos del año específico con filtro de tipo
    this.router.navigate(['/tournaments', tournamentInfo.year], {
      queryParams: { type: tournamentInfo.type },
    });
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'active':
        return 'En curso';
      case 'upcoming':
        return 'Próximamente';
      case 'finished':
        return 'Finalizado';
      default:
        return 'Desconocido';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'active':
        return 'status-active';
      case 'upcoming':
        return 'status-upcoming';
      case 'finished':
        return 'status-finished';
      default:
        return 'status-unknown';
    }
  }
}
