import { Location } from '@angular/common';
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
  };
  dateEarned: string;
  location: string;
  description: string;
  coach: string;
  captain: string;
}
