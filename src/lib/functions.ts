import { goto } from '$app/navigation';
import type { Player, Score } from '$lib/types';

export const getPlayers = (): Player[] => {
	return JSON.parse(localStorage.getItem('players') || '[]');
};

export const setPlayers = (players: Player[]) => {
	localStorage.setItem('players', JSON.stringify(players));
};

export const getTotal = (player: Player, index?: number): Score => {
	if (
		player.rounds.every((r) => {
			return r == '-';
		})
	) {
		return '-';
	} else if (typeof index == 'number' && player.rounds[index] == '-') {
		return '-';
	} else {
		let total: number = 0;
		typeof index == 'number' ? null : (index = player.rounds.length - 1);
		for (let x = 0; x <= index; x++) {
			if (typeof player.rounds[x] == 'number') {
				total = total + +player.rounds[x];
			}
		}
		return total;
	}
};

export const redirectIfNoPlayers = () => {
	goto('/game/setup/');
};
