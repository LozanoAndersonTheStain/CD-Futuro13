import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TournamentStateService } from '../../services/tournament-state.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonConfig } from '../../interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-tournament-details',
  imports: [
    CommonModule,
    ButtonComponent,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.scss'],
})
export class TournamentDetailsComponent implements OnInit, OnDestroy {
  tournament: any;
  matches: any[] = [];
  isLoading = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private tournamentStateService: TournamentStateService,
    private router: Router,
    private location: Location,
    private metaTagsService: MetaTagsService
  ) {}

  buttonConfig: ButtonConfig = {
    label: 'Volver a la lista de torneos',
    action: () => {
      this.navigateToTournaments();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    icon: 'arrow_back',
    iconPosition: 'left',
  };

  navigateToTournaments(): void {
    this.location.back();
  }

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      const storedTournament = sessionStorage.getItem('selectedTournament');
      if (storedTournament) {
        this.tournament = JSON.parse(storedTournament);
        this.matches = this.tournament?.matches
          ? Object.values(this.tournament.matches)
          : [];
        this.isLoading = false;
      } else {
        this.subscription =
          this.tournamentStateService.selectedTournament$.subscribe(
            (tournament) => {
              this.tournament = tournament;
              this.matches = this.tournament?.matches
                ? Object.values(this.tournament.matches)
                : [];
              this.isLoading = false;
              sessionStorage.setItem(
                'selectedTournament',
                JSON.stringify(tournament)
              );
            }
          );
      }
    } else {
      this.subscription =
        this.tournamentStateService.selectedTournament$.subscribe(
          (tournament) => {
            this.tournament = tournament;
            this.matches = this.tournament?.matches
              ? Object.values(this.tournament.matches)
              : [];
            this.isLoading = false;
          }
        );
    }

    this.metaTagsService.updateTags({
      title: `CD Futuro 13 - Detalles del Torneo ${
        this.tournament?.name || ''
      }`,
      description: `Detalles del torneo ${
        this.tournament?.name || ''
      } de CD Futuro 13. Conoce los partidos, resultados y más.`,
      keywords: `CD Futuro 13, torneo, ${
        this.tournament?.name || ''
      }, detalles, partidos, resultados`,
      url: `https://lozanoandersonthestain.github.io/CD-Futuro13/tournaments/${
        this.tournament?.id || ''
      }`,
      type: 'website',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
