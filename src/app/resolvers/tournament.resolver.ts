import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, timeout, catchError } from 'rxjs';
import { TournamentStateService } from '../services/tournament-state.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentResolver implements Resolve<any> {
  constructor(private tournamentStateService: TournamentStateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.tournamentStateService.selectedTournament$.pipe(
      timeout(5000),
      catchError(() => of(null))
    );
  }
}
