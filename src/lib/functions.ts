import type { Player } from '$lib/types';

export const getPlayers = (): Player[] => {
	return JSON.parse(localStorage.getItem('players') || '[]');
};

export const setPlayers = (players: Player[]) => {
  localStorage.setItem('players', JSON.stringify(players));
}