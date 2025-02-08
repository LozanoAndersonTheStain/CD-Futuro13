export interface Trophy {
  nameCategory: string;
  nameTrophy: string;
  nameTournament: string;
  imageUrl: string;
  GamesWon: number;
  GamesLost: number;
  GamesTied: number;
  GoalsScored: number;
  FoulsCommitted: number;
  cards: {
    yellow: number;
    red: number;
  }
}
