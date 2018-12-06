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
