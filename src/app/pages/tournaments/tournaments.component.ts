import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentService } from '../../services/tournament.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MetaTagsService } from '../../services/meta-tags.service';

interface TournamentsByYear {
  [key: string]: any[];
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
  tournamentsByYear: TournamentsByYear = {};
  isLoading = true;

  constructor(
    private router: Router,
    private tournamentService: TournamentService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit(): void {
    this.tournamentService.getTournaments().subscribe((data) => {
      this.tournaments = data;
      this.groupTournamentsByYear();
      this.isLoading = false;
    });

    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Torneos',
      description:
        'Descubre los torneos de CD Futuro 13, sus fechas y detalles. Participa y forma parte de nuestra comunidad deportiva.',
      keywords:
        'CD Futuro 13, torneos, fechas, detalles, participar, comunidad deportiva',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/tournaments',
      type: 'website',
    });
  }

  private groupTournamentsByYear(): void {
    this.tournamentsByYear = this.tournaments.reduce((acc, tournament) => {
      const year = tournament.year || '2025';
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(tournament);
      return acc;
    }, {});
  }

  navigateToYearTournaments(year: string): void {
    this.router.navigate(['/tournaments', year]);
  }
}
