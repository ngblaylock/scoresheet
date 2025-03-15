import { browser } from '$app/environment';
import orderBy from 'lodash/orderBy';

const getCurrentGame = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame') || '{}';
    const currentGame: G.Game = JSON.parse(game);
    return currentGame;
  }
};

const setCurrentGame = (game: G.Game) => {
  if (browser) {
    window.localStorage.setItem('currentGame', JSON.stringify(game));
  }
};

const getCurrentRound = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame') || '{}';
    const currentGame: G.Game = JSON.parse(game);
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
    if(game){
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
        return {...player, total, totalByRound}
      });
      return orderBy(totals, ['total'], [game.sortOrder]);
    }
  }
  return [];
}

const getPlayers = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame') || '{}';
    const currentGame: G.Game = JSON.parse(game);
    return currentGame.players.map((player) => player.name);
  }
};

export { getCurrentGame, setCurrentGame, getCurrentRound, getTotals, getPlayers };
