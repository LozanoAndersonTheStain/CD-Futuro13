export interface PlayerAward {
  nameCategory: string;
  namePlayer: string;
  nameTournament: string;
  imageUrl: string;
  agePlayer: number;
  goalsScored?: number;
  goalsConceded?: number;
  assistance?: number;
  award: {
    nameAward: string;
    year: number;
  },
  position: string;
}
