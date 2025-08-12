import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TournamentService } from '../../../services/tournament.service';
import { TournamentStateService } from '../../../services/tournament-state.service';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

interface GroupedTournaments {
  [key: string]: any[];
}

@Component({
  selector: 'app-year-tournaments',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ButtonComponent,
    MatIconModule,
  ],
  templateUrl: './year-tournaments.component.html',
  styleUrls: ['./year-tournaments.component.scss'],
})
export class YearTournamentsComponent implements OnInit {
  tournaments: any[] = [];
  filteredTournaments: any[] = [];
  groupedTournaments: GroupedTournaments = {};
  year: string = '';
  isLoading = true;
  selectedType: 'all' | 'copa' | 'liga' = 'all';
  currentTournamentType: string = '';
  hasSpecificTypeFilter: boolean = false;

  buttonConfig: ButtonConfig = {
    label: 'Volver a la lista de torneos',
    action: () => this.location.back(),
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    icon: 'arrow_back',
    iconPosition: 'left',
  };

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentService,
    private tournamentStateService: TournamentStateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.year = this.route.snapshot.params['year'];

    // Verificar si hay filtro de tipo en los query params
    const typeFilter = this.route.snapshot.queryParams['type'];
    this.hasSpecificTypeFilter = !!(typeFilter && (typeFilter === 'copa' || typeFilter === 'liga'));

    if (this.hasSpecificTypeFilter) {
      this.selectedType = typeFilter;
      this.currentTournamentType = typeFilter === 'copa' ? 'Copa Kalley' : 'Liga Antioquia';
    }

    this.loadTournaments();
  }

  private loadTournaments(): void {
    this.tournamentService.getTournaments().subscribe((data) => {
      // Filtrar por año
      this.tournaments = data.filter(
        (tournament) => String(tournament.year) === this.year
      );

      // Aplicar filtro de tipo si existe
      this.applyTypeFilter();
      this.groupTournamentsByCategory();
      this.isLoading = false;
    });
  }

  private applyTypeFilter(): void {
    if (this.selectedType === 'all') {
      this.filteredTournaments = this.tournaments;
    } else {
      this.filteredTournaments = this.tournaments.filter(
        (tournament) => tournament.tournamentType === this.selectedType
      );
    }
  }

  private groupTournamentsByCategory(): void {
    this.groupedTournaments = this.filteredTournaments.reduce((acc, tournament) => {
      const category = tournament.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tournament);
      return acc;
    }, {});
  }

  selectTournamentType(type: 'all' | 'copa' | 'liga'): void {
    this.selectedType = type;
    this.currentTournamentType = type === 'all' ? '' :
                                 type === 'copa' ? 'Copa Kalley' : 'Liga Antioquia';
    this.applyTypeFilter();
    this.groupTournamentsByCategory();
  }

  navigateToTournament(tournament: any): void {
    this.tournamentStateService.setSelectedTournament(tournament);
    this.router.navigate(['/tournament-details']);
  }

  // Método actualizado para obtener las claves ordenadas numéricamente
  getCategoryKeys(): string[] {
    const keys = Object.keys(this.groupedTournaments);

    return keys.sort((a, b) => {
      // Extraer el número de la categoría (ej: "Sub 7" -> 7)
      const extractNumber = (category: string): number => {
        const match = category.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
      };

      const numA = extractNumber(a);
      const numB = extractNumber(b);

      // Ordenar numéricamente
      return numA - numB;
    });
  }

  getTournamentTypeTitle(): string {
    if (this.currentTournamentType) {
      return `${this.currentTournamentType} - ${this.year}`;
    }
    return `Torneos - ${this.year}`;
  }

  // Método para obtener el conteo de categorías por tipo
  getTypeCount(type: 'copa' | 'liga'): number {
    return this.tournaments.filter(t => t.tournamentType === type).length;
  }

  // Método para verificar si hay torneos de un tipo específico
  hasTypeData(type: 'copa' | 'liga'): boolean {
    return this.tournaments.some(t => t.tournamentType === type);
  }
}
