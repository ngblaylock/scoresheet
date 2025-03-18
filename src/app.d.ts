// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
  namespace G { // Global Types. Use like G.Player or G.Game
    type Round = number | null;
    interface Player {
      name: string;
      playerId: string;
      rounds: Round[];
    }
    interface Game {
      id: number;
      players: Player[];
      sortOrder: 'asc' | 'desc';
    }
  }
}

export {};
