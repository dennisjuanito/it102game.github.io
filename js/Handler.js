// event handlers function

function handleSkillClick(event) {
  event.stopPropagation();
  return battle.playerAttack(event, this);
}

function handleStartFightClick(event) {
  event.stopPropagation();
  return battle.startFight();
}

function handleRandomBossClick(event) {
  event.stopPropagation();
  return battle.selectRandomBoss();
}

function handleProfessionClick(event) {
  event.stopPropagation();
  return battle.selectProfession(this);
}

function handleSaveClick() {
  let save = {
    savedPlayer: player
  };
  localStorage.setItem('save', JSON.stringify(save));
  window.alert("Your game progress is saved");
}
