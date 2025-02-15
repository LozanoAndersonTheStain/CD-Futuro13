import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentService } from '../../services/tournament.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tournaments',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {
  tournaments: any[] = [];
  isLoading = true;

  constructor(private router: Router, private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.tournamentService.getTournaments().subscribe((data) => {
      this.tournaments = data;
      this.isLoading = false;
    });
  }

  navigateToTournament(tournament: any): void {
    this.router.navigate(['/tournaments', tournament.id]);
  }
}
