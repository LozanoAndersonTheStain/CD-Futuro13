import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TournamentService } from '../../../services/tournament.service';
import { Subscription } from 'rxjs';
import { ButtonComponent } from "../../../components/button/button.component";
import { ButtonConfig } from '../../../interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tournament-details',
  imports: [CommonModule, ButtonComponent, RouterModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.scss']
})
export class TournamentDetailsComponent implements OnInit, OnDestroy {
  tournament: any;
  matches: any[] = [];
  isLoading = true;
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService,
    private router: Router
  ) {}

  buttonConfig: ButtonConfig = {
    label: 'Volver a la lista de torneos',
    action: () => {
      this.navigateToTournaments();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: '/tournaments',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

  navigateToTournaments(): void {
    this.router.navigate(['/tournaments']);
  }
  ngOnInit(): void {
    const tournamentId = this.route.snapshot.paramMap.get('id');
    if (tournamentId) {
      this.subscription.add(
        this.tournamentService.getTournamentById(tournamentId).subscribe((data) => {
          this.tournament = data;
          this.matches = data?.matches ? Object.values(data.matches) : [];
          this.isLoading = false;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
