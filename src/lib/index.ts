import Bowser from 'bowser';
import { browser } from '$app/environment';
import { orderBy } from 'lodash-es';

/**
 * Gets device information including OS, browser, and platform details.
 * @returns Device information including OS, browser, and platform details. Only available in browser environment.
 */
export const getDeviceInfo = () => {
  if (browser) {
    const parser = Bowser.getParser(window.navigator.userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const platform = parser.getPlatform();

    const isTouch = 'ontouchstart' in window;

    const isIOS = os.name === 'iOS';
    const isAndroid = os.name === 'Android';
    const isSafari = browser.name === 'Safari';
    const isChrome = browser.name === 'Chrome';
    const isFirefox = browser.name === 'Firefox';

    // iPadOS often identifies as macOS but has touch
    const isIPadOSSafari = os.name === 'macOS' && isSafari && isTouch;
    const isIOSSafari = (isIOS && isSafari) || isIPadOSSafari;

    // Detect PWA (standalone mode)
    const isPWA =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true; // iOS Safari only

    return {
      isIOS,
      isAndroid,
      isSafari,
      isChrome,
      isFirefox,
      isIOSSafari,
      isPWA,
      isMobile: platform.type === 'mobile',
      isTablet: platform.type === 'tablet',
      isDesktop: platform.type === 'desktop',
      osName: os.name,
      browserName: browser.name,
    };
  }
};

/**
 * Gets current game data.
 * @returns Current game from localStorage, or undefined if not found. Only works in browser environment.
 */
export const getCurrentGame = () => {
  if (browser) {
    const game = window.localStorage.getItem('currentGame');
    return game ? (JSON.parse(game) as G.Game) : undefined;
  }
};

/**
 * Saves the current game data to localStorage.
 * @param game - The game object to set as the current game in localStorage.
 */
export const setCurrentGame = (game: G.Game) => {
  if (browser) {
    window.localStorage.setItem('currentGame', JSON.stringify(game));
  }
};

/**
 * Gets the current round number for the game for entering scores. This is different from getCompletedRoundsCount, which returns the number of rounds where data has been entered.
 * @returns The most recent round number for the current game, or undefined if no game is found. Only works in browser environment.
 */
export const getCurrentRound = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (!currentGame) return;
    return currentGame.players[0].rounds.length + 1;
  }
};

/**
 * The number of completed rounds in the current game. This is is different from getCurrentRound, which returns the next round to enter scores.
 * @returns The number of completed rounds in the current game, or undefined if no game is found. Only works in browser environment.
 */
export const getCompletedRoundsCount = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (!currentGame) return;
    return currentGame.players[0].rounds.length;
  }
};

type PlayerTotal = G.Player & {
  total: number | null;
  totalByRound: (number | null)[];
};
/**
 * Gets totals for each player in teh current game.
 * @returns An array of player totals, including total scores and scores by round, ordered by total score and player ID. Only works in browser environment.
 */
export const getTotals = (): PlayerTotal[] => {
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
      // Order secondarily by playerId to randomize tie-breakers. The playerId is changed after every round.
      const orderedPlayersWithAtLeastOneScore = orderBy(
        playersWithAtLeastOneScore,
        ['total', 'playerId'],
        [game.sortOrder, 'asc'],
      );
      return [...orderedPlayersWithAtLeastOneScore, ...playersWithNoScores];
    }
  }
  return [];
};

/**
 * Gets the preferred view for the current game. Should be either 'table' or 'chart'.
 * @returns The current game preferred view, or undefined if no game is found. Only works in browser environment.
 */
export const getPreferredView = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    return currentGame?.preferredView;
  }
};

/**
 * Sets the preferred view for the current game in localStorage.
 * @param view - The view to set as the preferred view for the current game. Should be either 'table' or 'chart'.
 */
export const setPreferredView = (view: string | undefined) => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (currentGame && ['table', 'chart'].includes(`${view}`)) {
      currentGame.preferredView = view as 'table' | 'chart';
      setCurrentGame(currentGame);
    }
  }
};

/**
 * Gets just the player names from the current game.
 * @returns An array of player names in the current game, or undefined if no game is found. Only works in browser environment.
 */
export const getPlayers = () => {
  if (browser) {
    const currentGame = getCurrentGame();
    if (!currentGame) return;
    return currentGame.players.map((player) => player.name);
  }
};

/**
 * The default chart colors used for player scores. These work with light and dark themes. If more colors are needed, they are randomly generated using chroma.js.
 */
export const chartColors = [
  // Dark Colors
  '#C22D2D',
  '#304BB5',
  '#E5DB21',
  '#31A033',
  '#FA7F33',
  '#9340E5',
  '#33C7CC',
  '#F23BD1',
  '#88675A',
  '#529FF0',
  // Any excess of colors after this should be randomly generated by chroma.js
];
