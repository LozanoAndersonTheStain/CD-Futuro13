import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TournamentStateService } from '../services/tournament-state.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentResolver implements Resolve<any> {
  constructor(private tournamentStateService: TournamentStateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const tournament = this.tournamentStateService.selectedTournament$;
    return tournament ? tournament : of(null);
  }
}
