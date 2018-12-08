function addEventListernetToSubmitButton() {
  let submitButtonElement = document.querySelector('.submitButton');
  console.log(submitButtonElement);
  submitButtonElement.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    let playerNameInputElement = document.querySelector('.playerNameInput');
    playerName = playerNameInputElement.value;
    savePlayerNameToLocalStorage(playerName);
    location.reload();
  });
}

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
// add event listerner if the users havent input their player name
if (!playerName) {
  addEventListernetToSubmitButton();
}
