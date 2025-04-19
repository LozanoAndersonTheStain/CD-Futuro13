import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TournamentService } from '../../../services/tournament.service';
import { TournamentStateService } from '../../../services/tournament-state.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-year-tournaments',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ButtonComponent,
    MatIconModule,
  ],
  templateUrl: './year-tournaments.component.html',
  styleUrls: ['./year-tournaments.component.scss'],
})
export class YearTournamentsComponent implements OnInit {
  tournaments: any[] = [];
  year: string = '';
  isLoading = true;

  buttonConfig: ButtonConfig = {
    label: 'Volver a la lista de años',
    action: () => this.location.back(),
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    icon: 'arrow_back',
    iconPosition: 'left',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentService,
    private tournamentStateService: TournamentStateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.year = this.route.snapshot.params['year'];
    this.tournamentService.getTournaments().subscribe((data) => {
      this.tournaments = data.filter(
        (tournament) => String(tournament.year) === this.year
      );
      this.isLoading = false;
    });
  }

  navigateToTournament(tournament: any): void {
    this.tournamentStateService.setSelectedTournament(tournament);
    this.router.navigate(['/tournament-details']);
  }
}
