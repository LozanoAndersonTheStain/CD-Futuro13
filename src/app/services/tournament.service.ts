import { Injectable } from '@angular/core';
import { Database, ref, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private db: Database) {}

  getTournaments(): Observable<any[]> {
    const tournamentsRef = ref(this.db, 'tournaments');
    return new Observable(observer => {
      onValue(tournamentsRef, snapshot => {
        const tournaments = snapshot.val();
        observer.next(tournaments ? Object.keys(tournaments).map(key => ({ id: key, ...tournaments[key] })) : []);
      });
    });
  }

  getTournamentById(id: string): Observable<any> {
    const tournamentRef = ref(this.db, `tournaments/${id}`);
    return new Observable(observer => {
      onValue(tournamentRef, snapshot => {
        const tournament = snapshot.val();
        observer.next(tournament ? { id, ...tournament } : null);
      });
    });
  }

  getMatchesByTournamentId(tournamentId: string): Observable<any[]> {
    const matchesRef = query(ref(this.db, 'matches'), orderByChild('tournamentId'), equalTo(tournamentId));
    return new Observable(observer => {
      onValue(matchesRef, snapshot => {
        const matches = snapshot.val();
        observer.next(matches ? Object.keys(matches).map(key => ({ id: key, ...matches[key] })) : []);
      });
    });
  }
}
