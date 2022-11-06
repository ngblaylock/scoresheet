export interface Player {
  name: string;
  score: number | "-";
  rounds: (number|'-')[];
}

export type Score = number | "-";