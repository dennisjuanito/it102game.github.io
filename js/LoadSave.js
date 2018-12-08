function createPlayer() {
  let savedGame = loadSavedGame();
  let player;
  if (savedGame) {
    player = new Player(false, savedGame);
  } else {
    player = new Player(true, null);
  }
  return player;
}

function loadSavedGame() {
  let savedGame = JSON.parse(localStorage.getItem('save'));
  return savedGame ? savedGame.savedPlayer : false;
}

let player = createPlayer();
