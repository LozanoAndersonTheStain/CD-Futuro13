import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from '../services/tournament.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentResolver implements Resolve<any> {
  constructor(private tournamentService: TournamentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.tournamentService.getTournamentById(id);
    } else {
      return this.tournamentService.getTournaments();
    }
  }
}
