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

  private unsubscribeFunction: (() => void) | null = null;

  constructor(
    private db: Database,
    private ngZone: NgZone,
    private tournamentService: TournamentService
  ) {}

  setSelectedTournament(tournament: any): void {
    this.selectedTournamentSubject.next(tournament);

    // Limpiar listener anterior si existe
    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
    }

    // Configurar listener en tiempo real para el torneo seleccionado
    if (tournament && tournament.id && tournament.tournamentId && tournament.tournamentType) {
      this.listenToTournamentChanges(tournament.tournamentId, tournament.id, tournament.tournamentType);
    }

    // Guardar en sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('selectedTournament', JSON.stringify(tournament));
    }
  }

  clearSelectedTournament(): void {
    this.selectedTournamentSubject.next(null);

    // Limpiar listener
    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
      this.unsubscribeFunction = null;
    }

    // Limpiar sessionStorage
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('selectedTournament');
    }
  }

  private listenToTournamentChanges(tournamentId: string, categoryId: string, tournamentType: 'copa' | 'liga'): void {
    const basePath = tournamentType === 'copa' ? 'tournaments' : 'tournaments1';
    const categoryRef = ref(this.db, `${basePath}/${tournamentId}/categories/${categoryId}`);

    this.unsubscribeFunction = onValue(categoryRef, (snapshot) => {
      this.ngZone.run(() => {
        const updatedCategory = snapshot.val();
        if (updatedCategory) {
          const updatedTournament = {
            id: categoryId,
            tournamentId: tournamentId,
            tournamentType: tournamentType,
            tournamentName: updatedCategory.title || 'Torneo Desconocido',
            ...updatedCategory,
          };

          this.selectedTournamentSubject.next(updatedTournament);

          // Actualizar sessionStorage
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('selectedTournament', JSON.stringify(updatedTournament));
          }
        }
      });
    }, error => {
      console.error('Error listening to tournament changes:', error);
    });
  }

  loadTournamentById(categoryId: string): void {
    this.tournamentService
      .getTournamentById(categoryId)
      .subscribe((tournament: any) => {
        if (tournament) {
          this.setSelectedTournament(tournament);
        }
      });
  }

  // Método para cargar desde sessionStorage al inicializar
  loadFromSessionStorage(): void {
    if (typeof sessionStorage !== 'undefined') {
      const savedTournament = sessionStorage.getItem('selectedTournament');
      if (savedTournament) {
        try {
          const tournament = JSON.parse(savedTournament);
          this.setSelectedTournament(tournament);
        } catch (error) {
          console.error('Error parsing saved tournament:', error);
          sessionStorage.removeItem('selectedTournament');
        }
      }
    }
  }
}
