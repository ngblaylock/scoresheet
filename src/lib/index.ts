import { browser } from '$app/environment';
import { max, mean, min, orderBy } from 'lodash-es';

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

type PlayerTotal = G.Player & {
  total: number | null;
  totalByRound: (number | null)[];
};

const getTotals = (): PlayerTotal[] => {
  if (browser) {
    const game = getCurrentGame();
    if (game?.players) {
      const totals = game.players.map((player) => {
        let total: null | number = null;
        let totalByRound: (number | null)[] = [];
        player.rounds.forEach((round) => {
          if (round) {
            total = (total ?? 0) + round;
          }
          const prevTotal = totalByRound[totalByRound.length - 1];
          totalByRound.push(round || prevTotal ? (prevTotal ?? 0) + (round ?? 0) : null);
        });
        return { ...player, total, totalByRound };
      });
      const playersWithNoScores = totals.filter((total) =>
        total.rounds.every((score) => score === null),
      );
      const playersWithAtLeastOneScore = totals.filter(
        (total) => !total.rounds.every((score) => score === null),
      );
      const orderedPlayersWithAtLeastOneScore = orderBy(
        playersWithAtLeastOneScore,
        ['total'],
        [game.sortOrder],
      );
      return [...orderedPlayersWithAtLeastOneScore, ...playersWithNoScores];
    }
  }
  return [];
};

const getMinMaxAvg = () => {
  if (browser) {
    const totals = getTotals();
    if (!totals) return;
    const totalScoresOnly = totals
      .map((total) => total.total)
      .filter((val) => typeof val === 'number');
    return {
      min: min(totalScoresOnly),
      max: max(totalScoresOnly),
      avg: Number(mean(totalScoresOnly).toFixed(2)),
    };
  }
};

const getPlayers = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (!currentGame) return;
    return currentGame.players.map((player) => player.name);
  }
};

export {
  getCurrentGame,
  setCurrentGame,
  getCurrentRound,
  getCompletedRoundsCount,
  getTotals,
  getMinMaxAvg,
  getPlayers,
};
