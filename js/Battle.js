function Battle() {
  this.battle = false;
  this.playerBattle = {
    health: player.health,
    mana: player.mana,
    strength: player.strength,
    toughness: player.toughness,
    skills: [...player.skills]
  };
  this.bossBattle = Object.assign({}, axe);
  this.boss = Object.assign({}, axe);
  this.selectRandomBoss = function() {
    let randomBoss = __.random(0, bosses.length - 1);
    this.bossBattle = { ...bosses[randomBoss] };
    this.boss = { ...bosses[randomBoss] };
    this.displayBoss();
  };
  this.regeneratePlayerMana = function() {
    if (this.playerBattle.mana > player.mana) {
      this.playerBattle.mana = player.mana;
    } else {
      this.playerBattle.mana += player.mana / 100;
    }
  };
  this.startFight = async function() {
    this.battle = true;
    while (this.playerBattle.health > 0 && this.bossBattle.health > 0) {
      this.bossAttack();
      this.regeneratePlayerMana();
      await delay(4000);
    }
    this.checkDeath();
    this.battle = false;
  };
  this.playerAttack = function(event, skillImgObj) {
    event.stopPropagation();
    if (!this.battle) {
      return;
    }
    let { skillname: skillNameToFind } = skillImgObj.dataset;
    let { health, mana, strength, toughness, skills } = this.playerBattle;
    let skillObj = __.find(skills, { name: skillNameToFind });
    let { name: skillName, indexPower, type, cooldown, manaCost, duration, skillCooldown } = skillObj;

    switch (type) {
      case 'damage':
        let damage;
        if (mana >= manaCost) {
          if (skillName === 'basic attack') {
            damage = this.calculateDamage(strength / 2, indexPower / 2, 0, 0);
            this.bossBattle.health -= damage;
          } else {
            damage = this.calculateDamage(strength, indexPower, this.bossBattle.toughness, this.boss.health);
            this.bossBattle.health -= damage;
          }
          this.playerBattle.mana -= manaCost;
          this.displayPlayerMoves(player.playerName, skillName, null, null, null, type, null, damage, manaCost);
          this.addCoolDownEffect(skillImgObj, cooldown);
        }
        break;
      case 'toughness':
        if (mana >= manaCost) {
          let increasedToughness = indexPower * toughness;
          this.playerBattle.toughness += increasedToughness;
          this.playerBattle.mana -= manaCost;
          this.displayPlayerMoves(player.playerName, skillName, null, increasedToughness, null, type, duration, null, manaCost);
          setTimeout(() => {
            this.displayPlayerBuffEnds(skillName);
            this.playerBattle.toughness = player.toughness;
          }, duration * 1000);
          this.addCoolDownEffect(skillImgObj, cooldown);
        }
        break;
      case 'strength':
        if (mana >= manaCost) {
          let increasedStrength = indexPower * strength;
          this.playerBattle.strength += increasedStrength;
          this.playerBattle.mana -= manaCost;
          this.displayPlayerMoves(player.playerName, skillName, increasedStrength, null, null, type, duration, null, manaCost);
          setTimeout(() => {
            this.displayPlayerBuffEnds(skillName);
            this.playerBattle.strength = player.strength;
          }, duration * 1000);
          this.addCoolDownEffect(skillImgObj, cooldown);
        }
        break;
        console.log("sd")
      case 'health':
        if (mana >= manaCost) {
          let increasedHealth = indexPower * (health / 100);
          this.playerBattle.health += increasedHealth;
          if (this.playerBattle.health > player.health) {
            this.playerBattle.health = player.health;
          }
          this.playerBattle.mana -= manaCost;
          this.displayPlayerMoves(player.playerName, skillName, null, null, increasedHealth, type, null, null, manaCost);
          this.addCoolDownEffect(skillImgObj, cooldown);
        }
        break;
    }
    // change the DOM, so that the skill images looks differently when the skill is in cooldown

    this.displayAllHealthMana();
  };
  this.addCoolDownEffect = function(skillImgObj, cooldown) {
    skillImgObj.removeEventListener('click', handleSkillClick);
    skillImgObj.classList.add('onCoolDown');
    setTimeout(() => {
      skillImgObj.addEventListener('click', handleSkillClick);
      skillImgObj.classList.remove('onCoolDown');
    }, cooldown * 1000);
  };
  this.calculateDamage = function(attackerStrength, attackerIndexPower, targetToughness, targetHealth) {
    let damage = attackerStrength * attackerIndexPower * 10 - (targetHealth / 100) * targetToughness;
    return damage < 0 ? 0 : damage;
  };
  this.applyBossSkill = async function(bossName, skillName, strength, toughness, health, indexPower, type, duration) {
    switch (type) {
      case 'damage':
        let damage;
        if (skillName === 'basic attack') {
          damage = this.calculateDamage(strength / 2, indexPower / 2, 0, 0);
          this.playerBattle.health -= damage;
        } else {
          damage = this.calculateDamage(strength, indexPower, this.playerBattle.toughness, player.health);
          this.playerBattle.health -= damage;
        }
        this.displayBossMoves(bossName, skillName, null, null, null, type, null, damage);
        break;
      case 'toughness':
        let increasedToughness = indexPower * toughness;
        this.bossBattle.toughness += increasedToughness;
        this.bossBattle.toughness = this.boss.toughness;
        this.displayBossMoves(bossName, skillName, null, increasedToughness, null, type, duration, null);
        await delay(duration * 1000);
        this.displayBossBuffEnds(skillName);
        break;
      case 'strength':
        let increasedStrength = indexPower * strength;
        this.bossBattle.strength += increasedStrength;
        this.bossBattle.strength = this.boss.strength;
        this.displayBossMoves(bossName, skillName, increasedStrength, null, null, type, duration, null);
        await delay(duration * 1000);
        this.displayBossBuffEnds(skillName);
        break;
      case 'health':
        let increasedHealth = indexPower * (health / 100);
        this.bossBattle.health += indexPower * (health / 100);
        if (this.bossBattle.health > this.boss.health) {
          this.bossBattle.health = this.boss.health;
        }
        this.displayBossMoves(bossName, skillName, null, null, increasedHealth, type, null, null);
        break;
    }
  };
  this.bossAttack = function() {
    let randomChance = __.random(1, 100);
    let { name: bossName, strength, toughness, health, skills } = this.bossBattle;
    let [skill1, skill2, skill3] = skills;
    if (randomChance <= skill1.chance && randomChance >= 1) {
      let { name: skillName, indexPower, type, duration } = skill1;
      this.applyBossSkill(bossName, skillName, strength, toughness, health, indexPower, type, duration);
    } else if (randomChance <= skill1.chance + skill2.chance) {
      let { name: skillName, indexPower, type, duration } = skill2;
      this.applyBossSkill(bossName, skillName, strength, toughness, health, indexPower, type, duration);
    } else if (randomChance <= skill1.chance + skill2.chance + skill3.chance) {
      let { name: skillName, indexPower, type, duration } = skill3;
      this.applyBossSkill(bossName, skillName, strength, toughness, health, indexPower, type, duration);
    } else {
      // the rest chance is a basic attack
      let { name: skillName, type, indexPower, duration } = basicBossAttack;
      this.applyBossSkill(bossName, skillName, strength, toughness, health, indexPower, type, duration);
    }
    this.displayAllHealthMana();
  };
  this.displayAllHealthMana = function() {
    let bossHealthBarElement = document.getElementsByClassName('bossHealthBarText')[0];
    let playerHealthBarElement = document.getElementsByClassName('playerHealthBarText')[0];
    let playerManaBarElement = document.getElementsByClassName('playerManaBarText')[0];

    bossHealthBarElement.innerText = `${this.boss.name} health ${this.bossBattle.health} / ${this.boss.health}`;
    playerHealthBarElement.innerText = `${player.playerName} health ${this.playerBattle.health} / ${player.health}`;
    playerManaBarElement.innerText = `${player.playerName} mana ${this.playerBattle.mana} / ${player.mana}`;
  };
  this.displayBoss = function() {
    let bossImageElement = document.getElementsByClassName('bossImage')[0];
    let bossName = removeSpace(this.boss.name);
    const bossImagePath = `../images/bossesimg/${bossName}.png`;
    bossImageElement.src = bossImagePath;
    this.displayAllHealthMana();
  };
  this.displayBoss();
  this.displayAllHealthMana();
  this.checkDeath = function() {
    if (this.playerBattle.health < 0) {
      this.playerBattle.health = 0;
    }
    if (this.bossBattle.health < 0) {
      this.bossBattle.health = 0;
    }
    this.displayAllHealthMana();
  };
  this.displayBossMoves = function(bossName, skillName, increasedStrength, increasedToughness, increasedHealth, type, duration, damage) {
    let bossMovesContainerElement = document.querySelector('.bossMoves');
    switch (type) {
      case 'damage':
        bossMovesContainerElement.innerHTML += `<p>${bossName} attack using ${skillName} dealing ${damage} damage</p>`;
        break;
      case 'toughness':
        bossMovesContainerElement.innerHTML += `<p>${bossName} apply ${skillName} increase toughness by ${increasedToughness} for ${duration} seconds</p>`;
        break;
      case 'strength':
        bossMovesContainerElement.innerHTML += `<p>${bossName} apply ${skillName} increase strength by ${increasedStrength} for ${duration} seconds</p>`;
        break;
      case 'health':
        bossMovesContainerElement.innerHTML += `<p>${bossName} apply ${skillName} increase health by ${increasedHealth}</p>`;
        break;
    }
  };
  this.displayPlayerMoves = function(playerName, skillName, increasedStrength, increasedToughness, increasedHealth, type, duration, damage, manaCost) {
    let playerMovesContainerElement = document.querySelector('.playerMoves');
    switch (type) {
      case 'damage':
        playerMovesContainerElement.innerHTML += `<p>${playerName} uses ${manaCost} mana to attack using ${skillName} dealing ${damage} damage</p>`;
        break;
      case 'toughness':
        playerMovesContainerElement.innerHTML += `<p>${playerName} uses ${manaCost} mana to apply ${skillName} increase toughness by ${increasedToughness} for ${duration} seconds</p>`;
        break;
      case 'strength':
        playerMovesContainerElement.innerHTML += `<p>${playerName} uses ${manaCost} mana to apply ${skillName} increase strength by ${increasedStrength} for ${duration} seconds</p>`;
        break;
      case 'health':
        playerMovesContainerElement.innerHTML += `<p>${playerName} uses ${manaCost} mana to apply ${skillName} increase health by ${increasedHealth}</p>`;
        break;
    }
  };
  this.displayPlayerBuffEnds = function(buffName) {
    let playerMovesContainerElement = document.querySelector('.playerMoves');
    playerMovesContainerElement.innerHTML += `<p>Player buff ${buffName} has ends</p>`;
  };
  this.displayBossBuffEnds = function(buffName) {
    let bossMovesContainerElement = document.querySelector('.bossMoves');
    bossMovesContainerElement.innerHTML += `<p>Boss buff ${buffName} has ends</p>`;
  };
  this.bossDefeatedReward = function() {};
  this.updateHealthBar = function() {}; // for css
}
