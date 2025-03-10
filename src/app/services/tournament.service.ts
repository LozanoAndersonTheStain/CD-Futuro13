import { Injectable, NgZone } from '@angular/core';
import { Database, ref, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tournamentsSubject = new BehaviorSubject<any[]>([]);
  tournaments$ = this.tournamentsSubject.asObservable();

  constructor(private db: Database, private ngZone: NgZone) {
    this.initTournamentsListener();
  }

  private initTournamentsListener() {
    const tournamentsRef = ref(this.db, 'tournaments');
    onValue(tournamentsRef, snapshot => {
      this.ngZone.run(() => {
        const tournaments = snapshot.val();
        this.tournamentsSubject.next(
          tournaments ? Object.keys(tournaments).map(key => ({ id: key, ...tournaments[key] })) : []
        );
      });
    });
  }

  getTournaments(): Observable<any[]> {
    return this.tournaments$;
  }

  getTournamentById(id: string): Observable<any> {
    return new Observable(observer => {
      const tournamentRef = ref(this.db, `tournaments/${id}`);
      const unsubscribe = onValue(tournamentRef, snapshot => {
        this.ngZone.run(() => {
          const tournament = snapshot.val();
          observer.next(tournament ? { id, ...tournament } : null);
        });
      });
      return () => unsubscribe();
    });
  }

  getMatchesByTournamentId(tournamentId: string): Observable<any[]> {
    return new Observable(observer => {
      const matchesRef = query(
        ref(this.db, 'matches'),
        orderByChild('tournamentId'),
        equalTo(tournamentId)
      );
      const unsubscribe = onValue(matchesRef, snapshot => {
        this.ngZone.run(() => {
          const matches = snapshot.val();
          observer.next(matches ? Object.keys(matches).map(key => ({ id: key, ...matches[key] })) : []);
        });
      });
      return () => unsubscribe();
    });
  }
}
