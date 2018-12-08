function savePlayerNameToLocalStorage(name) {
  console.log(name);
  let playerNameToBeSaved = {
    playerName: name
  };
  localStorage.setItem('savedPlayerName', JSON.stringify(playerNameToBeSaved));
}

function getPlayerName() {
  let savedPlayerName = JSON.parse(localStorage.getItem('savedPlayerName'));
  if (savedPlayerName) {
    let welcomeContainerElement = document.querySelector('.welcomeContainer');
    document.body.removeChild(welcomeContainerElement);
    let allContainerWrapperElement = document.querySelector('.allContainerWrapper');
    allContainerWrapperElement.innerHTML = allContainerWrapperInnerHtml;
    return savedPlayerName.playerName;
  } else {
    return '';
  }
}

let playerName = getPlayerName();
