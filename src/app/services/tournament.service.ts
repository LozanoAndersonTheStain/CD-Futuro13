import { Injectable, NgZone } from '@angular/core';
import { Database, ref, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Interfaces para tipado
interface TournamentInfo {
  name: string;
  year: number;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface Tournament {
  id: string;
  tournamentId: string;
  tournamentName: string;
  tournamentType: 'copa' | 'liga';
  category: string;
  imageTournament: string;
  matches: any;
  title: string;
  year: number;
  phase?: string;
}

interface TournamentData {
  tournamentInfo: TournamentInfo;
  categories: { [key: string]: any };
}

interface DatabaseStructure {
  tournaments?: { [key: string]: TournamentData };
  tournaments1?: { [key: string]: TournamentData };
}

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private tournamentsSubject = new BehaviorSubject<Tournament[]>([]);
  private tournaments1Subject = new BehaviorSubject<Tournament[]>([]);

  tournaments$ = this.tournamentsSubject.asObservable();
  tournaments1$ = this.tournaments1Subject.asObservable();

  // Observable combinado para obtener todos los torneos
  allTournaments$ = combineLatest([this.tournaments$, this.tournaments1$]).pipe(
    map(([tournaments, tournaments1]) => [...tournaments, ...tournaments1])
  );

  // Flag para controlar si usar datos locales o Firebase
  private useLocalData = false; // Usando Firebase con variables de entorno

  constructor(
    private db: Database,
    private ngZone: NgZone,
    private http: HttpClient
  ) {
    // Verificar configuración de Firebase desde variables de entorno
    console.log('🔥 Firebase configurado con variables de entorno');
    console.log('📊 Configuración Firebase:', {
      projectId: environment.firebase?.projectId || 'No configurado',
      databaseURL: environment.firebase?.databaseURL || 'No configurado',
      production: environment.production
    });

    if (this.useLocalData) {
      this.initLocalData();
    } else {
      this.initFirebaseListeners();
    }
  }

  private initFirebaseListeners(): void {
    console.log('🚀 Inicializando listeners de Firebase en tiempo real...');

    // Verificar que Firebase esté configurado
    if (!environment.firebase?.databaseURL) {
      console.error('❌ Firebase no está configurado correctamente. Verificar variables de entorno.');
      return;
    }

    this.initTournamentsListener();
    this.initTournaments1Listener();
    this.testFirebaseConnection();
  }

  private initLocalData(): void {
    console.log('📁 Cargando datos desde archivo local...');
    this.http.get<DatabaseStructure>('/assets/data/tournaments.json').subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          // Procesar torneos (Copa Kalley)
          if (data.tournaments) {
            const flattenedTournaments = this.flattenTournaments(data.tournaments, 'copa');
            this.tournamentsSubject.next(flattenedTournaments);
          }

          // Procesar tournaments1 (Liga Antioquia)
          if (data.tournaments1) {
            const flattenedTournaments1 = this.flattenTournaments(data.tournaments1, 'liga');
            this.tournaments1Subject.next(flattenedTournaments1);
          }

          console.log('✅ Datos locales cargados exitosamente');
        });
      },
      error: (error) => {
        console.error('❌ Error cargando datos locales:', error);
      }
    });
  }

  private initTournamentsListener(): void {
    const tournamentsRef = ref(this.db, 'tournaments');
    console.log('👂 Configurando listener para tournaments (Copa Kalley)...');

    onValue(tournamentsRef, snapshot => {
      this.ngZone.run(() => {
        const tournaments = snapshot.val();
        console.log('📨 Datos recibidos de tournaments:', tournaments);

        if (tournaments) {
          const flattenedTournaments = this.flattenTournaments(tournaments, 'copa');
          console.log('⚽ Torneos procesados (Copa Kalley):', flattenedTournaments.length, 'categorías');
          this.tournamentsSubject.next(flattenedTournaments);
        } else {
          console.log('📭 No hay datos en tournaments');
          this.tournamentsSubject.next([]);
        }
      });
    }, error => {
      console.error('❌ Error al escuchar tournaments:', error);
      console.error('🔍 Verifica las reglas de Firebase y la configuración de red');
      this.tournamentsSubject.next([]);
    });
  }

  private initTournaments1Listener(): void {
    const tournaments1Ref = ref(this.db, 'tournaments1');
    console.log('👂 Configurando listener para tournaments1 (Liga Antioquia)...');

    onValue(tournaments1Ref, snapshot => {
      this.ngZone.run(() => {
        const tournaments1 = snapshot.val();
        console.log('📨 Datos recibidos de tournaments1:', tournaments1);

        if (tournaments1) {
          const flattenedTournaments1 = this.flattenTournaments(tournaments1, 'liga');
          console.log('🏆 Torneos procesados (Liga Antioquia):', flattenedTournaments1.length, 'categorías');
          this.tournaments1Subject.next(flattenedTournaments1);
        } else {
          console.log('📭 No hay datos en tournaments1');
          this.tournaments1Subject.next([]);
        }
      });
    }, error => {
      console.error('❌ Error al escuchar tournaments1:', error);
      console.error('🔍 Verifica las reglas de Firebase y la configuración de red');
      this.tournaments1Subject.next([]);
    });
  }

  private flattenTournaments(tournaments: { [key: string]: TournamentData }, type: 'copa' | 'liga'): Tournament[] {
    const result: Tournament[] = [];

    Object.keys(tournaments).forEach(tournamentKey => {
      const tournament = tournaments[tournamentKey];
      if (tournament.categories) {
        Object.keys(tournament.categories).forEach(categoryKey => {
          const category = tournament.categories[categoryKey];
          result.push({
            id: categoryKey,
            tournamentId: tournamentKey,
            tournamentName: tournament.tournamentInfo?.name || 'Torneo Desconocido',
            tournamentType: type,
            ...category
          });
        });
      }
    });

    console.log(`✨ Procesados ${result.length} torneos de tipo "${type}"`);
    return result;
  }

  // Métodos para obtener torneos específicos
  getTournaments(): Observable<Tournament[]> {
    return this.allTournaments$;
  }

  getCopaKalleyTournaments(): Observable<Tournament[]> {
    return this.tournaments$;
  }

  getLigaTournaments(): Observable<Tournament[]> {
    return this.tournaments1$;
  }

  getTournamentsByCategory(category: string): Observable<Tournament[]> {
    return this.allTournaments$.pipe(
      map(tournaments => tournaments.filter(t => t.category === category))
    );
  }

  getTournamentsByType(type: 'copa' | 'liga'): Observable<Tournament[]> {
    return this.allTournaments$.pipe(
      map(tournaments => tournaments.filter(t => t.tournamentType === type))
    );
  }

  getTournamentPhases(tournamentId: string, category: string): Observable<Tournament[]> {
    return this.allTournaments$.pipe(
      map(tournaments =>
        tournaments.filter(t =>
          t.tournamentId === tournamentId && t.category === category
        )
      )
    );
  }

  getTournamentById(id: string): Observable<Tournament | null> {
    if (this.useLocalData) {
      return this.http.get<DatabaseStructure>('/assets/data/tournaments.json').pipe(
        map(data => {
          let foundTournament: Tournament | null = null;

          // Buscar en tournaments
          if (data.tournaments) {
            Object.keys(data.tournaments).forEach(tournamentKey => {
              const tournament = data.tournaments![tournamentKey];
              if (tournament.categories && tournament.categories[id]) {
                foundTournament = {
                  id,
                  tournamentId: tournamentKey,
                  tournamentName: tournament.tournamentInfo?.name || 'Torneo Desconocido',
                  tournamentType: 'copa',
                  ...tournament.categories[id]
                };
              }
            });
          }

          // Buscar en tournaments1 si no se encontró
          if (!foundTournament && data.tournaments1) {
            Object.keys(data.tournaments1).forEach(tournamentKey => {
              const tournament = data.tournaments1![tournamentKey];
              if (tournament.categories && tournament.categories[id]) {
                foundTournament = {
                  id,
                  tournamentId: tournamentKey,
                  tournamentName: tournament.tournamentInfo?.name || 'Torneo Desconocido',
                  tournamentType: 'liga',
                  ...tournament.categories[id]
                };
              }
            });
          }

          return foundTournament;
        }),
        catchError(error => {
          console.error('❌ Error obteniendo torneo desde datos locales:', error);
          return [null];
        })
      );
    } else {
      // Lógica de Firebase mejorada
      return new Observable<Tournament | null>(observer => {
        const tournamentsRef = ref(this.db, 'tournaments');
        const tournaments1Ref = ref(this.db, 'tournaments1');

        let foundTournament: Tournament | null = null;
        let searchCount = 0;

        const checkComplete = () => {
          searchCount++;
          if (searchCount === 2) {
            console.log(foundTournament ? '✅ Torneo encontrado' : '❌ Torneo no encontrado');
            observer.next(foundTournament);
            observer.complete();
          }
        };

        const unsubscribe1 = onValue(tournamentsRef, snapshot => {
          this.ngZone.run(() => {
            const tournaments = snapshot.val();
            if (tournaments && !foundTournament) {
              Object.keys(tournaments).forEach(tournamentKey => {
                const tournament = tournaments[tournamentKey];
                if (tournament.categories && tournament.categories[id]) {
                  foundTournament = {
                    id,
                    tournamentId: tournamentKey,
                    tournamentName: tournament.tournamentInfo?.name || 'Torneo Desconocido',
                    tournamentType: 'copa',
                    ...tournament.categories[id]
                  };
                }
              });
            }
            checkComplete();
          });
        }, error => {
          console.error('❌ Error getting tournament from tournaments:', error);
          checkComplete();
        });

        const unsubscribe2 = onValue(tournaments1Ref, snapshot => {
          this.ngZone.run(() => {
            const tournaments1 = snapshot.val();
            if (tournaments1 && !foundTournament) {
              Object.keys(tournaments1).forEach(tournamentKey => {
                const tournament = tournaments1[tournamentKey];
                if (tournament.categories && tournament.categories[id]) {
                  foundTournament = {
                    id,
                    tournamentId: tournamentKey,
                    tournamentName: tournament.tournamentInfo?.name || 'Torneo Desconocido',
                    tournamentType: 'liga',
                    ...tournament.categories[id]
                  };
                }
              });
            }
            checkComplete();
          });
        }, error => {
          console.error('❌ Error getting tournament from tournaments1:', error);
          checkComplete();
        });

        return () => {
          unsubscribe1();
          unsubscribe2();
        };
      });
    }
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
      }, error => {
        console.error('❌ Error getting matches:', error);
        observer.next([]);
      });
      return () => unsubscribe();
    });
  }

  // Método para cambiar entre datos locales y Firebase
  switchDataSource(useLocal: boolean): void {
    console.log(`🔄 Cambiando fuente de datos a: ${useLocal ? 'Local' : 'Firebase'}`);
    this.useLocalData = useLocal;
    if (useLocal) {
      this.initLocalData();
    } else {
      this.initFirebaseListeners();
    }
  }

  // Método para obtener información de torneos para la página principal
  getTournamentInfos(): Observable<any[]> {
    return combineLatest([this.tournaments$, this.tournaments1$]).pipe(
      map(([copaData, ligaData]) => {
        const tournamentInfos: any[] = [];

        // Procesar Copa Kalley
        if (copaData.length > 0) {
          const firstCopa = copaData[0];
          tournamentInfos.push({
            name: firstCopa.tournamentName,
            year: firstCopa.year,
            description: 'Torneo oficial Copa Kalley Asobdim 2025',
            startDate: '2025-01-01',
            endDate: '2025-12-31',
            status: 'active',
            tournamentId: firstCopa.tournamentId,
            type: 'copa',
            categoriesCount: copaData.length
          });
        }

        // Procesar Liga Antioquia
        if (ligaData.length > 0) {
          const firstLiga = ligaData[0];
          tournamentInfos.push({
            name: firstLiga.tournamentName,
            year: firstLiga.year,
            description: 'Liga departamental de Antioquia 2025',
            startDate: '2025-02-01',
            endDate: '2025-11-30',
            status: 'active',
            tournamentId: firstLiga.tournamentId,
            type: 'liga',
            categoriesCount: ligaData.length
          });
        }

        console.log(`📊 Información de torneos generada: ${tournamentInfos.length} torneos disponibles`);
        return tournamentInfos;
      })
    );
  }

  // Método para verificar conectividad con Firebase
  testFirebaseConnection(): void {
    const testRef = ref(this.db, '.info/connected');
    onValue(testRef, snapshot => {
      const connected = snapshot.val();
      if (connected) {
        console.log('✅ Conectado a Firebase Realtime Database');
        console.log('🌐 URL de base de datos:', environment.firebase?.databaseURL);
      } else {
        console.log('❌ Desconectado de Firebase');
        console.log('🔧 Verificar conexión a internet y configuración de Firebase');
      }
    });
  }

  // Método de diagnóstico para verificar configuración
  diagnosticFirebaseConfig(): void {
    console.log('🔍 Diagnóstico de configuración Firebase:');
    console.log('📋 Environment configurado:', !!environment.firebase);
    console.log('🔑 API Key:', environment.firebase?.apiKey ? '✅ Configurado' : '❌ Faltante');
    console.log('🏠 Auth Domain:', environment.firebase?.authDomain ? '✅ Configurado' : '❌ Faltante');
    console.log('🗄️ Database URL:', environment.firebase?.databaseURL ? '✅ Configurado' : '❌ Faltante');
    console.log('📁 Project ID:', environment.firebase?.projectId ? '✅ Configurado' : '❌ Faltante');
    console.log('🏪 Storage Bucket:', environment.firebase?.storageBucket ? '✅ Configurado' : '❌ Faltante');
    console.log('🚀 Producción:', environment.production ? 'Sí' : 'No');
  }
}
