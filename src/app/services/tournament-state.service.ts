import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Database, ref, onValue } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TournamentStateService {
  private selectedTournamentSubject = new BehaviorSubject<any>(null);
  selectedTournament$ = this.selectedTournamentSubject.asObservable();

  constructor(private db: Database, private ngZone: NgZone) {}

  setSelectedTournament(tournament: any): void {
    this.selectedTournamentSubject.next(tournament);
    if (tournament && tournament.id) {
      this.listenToTournamentChanges(tournament.id);
    }
  }

  clearSelectedTournament(): void {
    this.selectedTournamentSubject.next(null);
  }

  private listenToTournamentChanges(tournamentId: string): void {
    const tournamentRef = ref(this.db, `tournaments/${tournamentId}`);
    onValue(tournamentRef, snapshot => {
      this.ngZone.run(() => {
        const updatedTournament = snapshot.val();
        if (updatedTournament) {
          this.selectedTournamentSubject.next({ id: tournamentId, ...updatedTournament });
        }
      });
    });
  }
}
