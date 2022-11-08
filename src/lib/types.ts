export interface Player {
  name: string;
  rounds: (number|'-')[];
}

export type Score = number | "-";