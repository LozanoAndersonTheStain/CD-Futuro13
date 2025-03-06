import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Database, ref, onValue } from '@angular/fire/database';
import { TournamentService } from './tournament.service';

@Injectable({
  providedIn: 'root',
})
export class TournamentStateService {
  private selectedTournamentSubject = new BehaviorSubject<any>(null);
  selectedTournament$ = this.selectedTournamentSubject.asObservable();

  constructor(
    private db: Database,
    private ngZone: NgZone,
    private tournamentService: TournamentService
  ) {}

  setSelectedTournament(tournament: any): void {
    this.selectedTournamentSubject.next(tournament);
    if (tournament && tournament.id) {
      this.listenToTournamentChanges(tournament.id);
    }
    // Save the selected tournament in sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('selectedTournament', JSON.stringify(tournament));
    }
  }

  clearSelectedTournament(): void {
    this.selectedTournamentSubject.next(null);
    // Delete the selected tournament from sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('selectedTournament');
    }
  }

  private listenToTournamentChanges(tournamentId: string): void {
    const tournamentRef = ref(this.db, `tournaments/${tournamentId}`);
    onValue(tournamentRef, (snapshot) => {
      this.ngZone.run(() => {
        const updatedTournament = snapshot.val();
        if (updatedTournament) {
          this.selectedTournamentSubject.next({
            id: tournamentId,
            ...updatedTournament,
          });
          // Updating the selected tournament in sessionStorage
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem(
              'selectedTournament',
              JSON.stringify({ id: tournamentId, ...updatedTournament })
            );
          }
        }
      });
    });
  }

  loadTournamentById(tournamentId: string): void {
    this.tournamentService
      .getTournamentById(tournamentId)
      .subscribe((tournament: any) => {
        this.setSelectedTournament(tournament);
      });
  }
}
