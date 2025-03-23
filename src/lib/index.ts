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
          if (round || round === 0) {
            total = (total ?? 0) + round;
          }
          const prevTotal = totalByRound[totalByRound.length - 1];
          totalByRound.push(round !== null || prevTotal ? (prevTotal ?? 0) + (round ?? 0) : null);
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

const chartColors = [
  // Medium Colors
  '#C22D2D',
  '#304BB5',
  '#E5DB21',
  '#31A033',
  '#E47028',
  '#7A34C1',
  '#2B9DB1',
  '#C92CAD',
  // Dark Colors
  '#680909',
  '#14297B',
  '#B3AA0B',
  '#116C12',
  '#A84A10',
  '#52188D',
  '#157687',
  '#930F7B',
  // Light Colors
  '#F08484',
  '#778AD4',
  '#F1EC96',
  '#91CC92',
  '#F5A877',
  '#AA71E4',
  '#67C8D9',
  '#DC6EC8',
];

export {
  getCurrentGame,
  setCurrentGame,
  getCurrentRound,
  getCompletedRoundsCount,
  getTotals,
  getMinMaxAvg,
  getPlayers,
  chartColors,
};
