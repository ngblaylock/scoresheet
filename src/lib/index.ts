// place files you want to import through the `$lib` alias in this folder.

const getCurrentGame = () => {
  const game = window.localStorage.getItem('currentGame') || '{}';
  const currentGame: G.Game = JSON.parse(game);
  return currentGame;
}

const setCurrentGame = (game: G.Game) => {
  window.localStorage.setItem('currentGame', JSON.stringify(game));
}

const getCurrentRound = () => {
  const game = window.localStorage.getItem('currentGame') || '{}';
  const currentGame: G.Game = JSON.parse(game);
  return currentGame.players[0].rounds.length + 1;
};

const getPlayers = () => {
  const game = window.localStorage.getItem('currentGame') || '{}';
  const currentGame: G.Game = JSON.parse(game);
  return currentGame.players.map(player => player.name);
}

export { getCurrentGame, setCurrentGame, getCurrentRound, getPlayers };
