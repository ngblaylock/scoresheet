import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import orderBy from 'lodash/orderBy';

const getCurrentGame = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame');
    return game ? (JSON.parse(game) as G.Game) : undefined;
  }
};

const setCurrentGame = (game: G.Game) => {
  if (browser) {
    window.localStorage.setItem('currentGame', JSON.stringify(game));
  }
};

const getCurrentRound = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (!currentGame) return;
    return currentGame.players[0].rounds.length + 1;
  }
};

const getCompletedRoundsCount = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame') || '{}';
    const currentGame: G.Game = JSON.parse(game);
    return currentGame.players[0].rounds.length;
  }
};

const getTotals = () => {
  if (browser) {
    const game = getCurrentGame();
    if (game?.players) {
      const totals = game.players.map((player) => {
        let total = 0;
        let totalByRound: G.Round[] = [];
        player.rounds.forEach((round) => {
          if (round) {
            total += round;
          }
          const prevTotal = totalByRound[totalByRound.length - 1];
          totalByRound.push((prevTotal ?? 0) + (round ?? 0));
        });
        return { ...player, total, totalByRound };
      });
      return orderBy(totals, ['total'], [game.sortOrder]);
    } else {
      goto('/');
    }
  }
  return [];
};

const getPlayers = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if(!currentGame) return;
    return currentGame.players.map((player) => player.name);
  }
};

export {
  getCurrentGame,
  setCurrentGame,
  getCurrentRound,
  getCompletedRoundsCount,
  getTotals,
  getPlayers,
};
