function Player() {
  Object.assign(this, novice); // default values
  this.unlockedProfessions = [novice, guardian];
  this.previousSelectedProfession = '';
  this.playerName = playerName;
  this.changeProfession = function(professionObj) {
    if (this.previousSelectedProfession && battle.playerBattle.profession != professionObj.profession) {
      let professionImg = document.getElementsByClassName(this.previousSelectedProfession)[0];
      professionImg.classList.remove('onSelect');
    } else {
      document.getElementsByClassName('novice')[0].classList.remove('onSelect');
    }
    this.previousSelectedProfession = professionObj.profession;
    Object.assign(this, professionObj);
    this.displayPlayerInformation();
    addSkillImageToDOM();
    addSkillEventListenerToDOM();
  };

  this.addProfession = function(professionObj) {
    let isDuplicateProfession = __.find(this.unlockedProfessions, professionObj);
    if (isDuplicateProfession) {
      // do nothing
      return true;
    } else {
      this.unlockedProfessions = [...this.unlockedProfessions, professionObj];
      addProfessionEventListenerToDOM();
      return false;
    }
  };
  this.displayPlayerInformation = function() {
    let playerNameElement = document.querySelector('.playerNameText');
    let playerProfessionElement = document.querySelector('.playerProfessionText');
    let playerStrengthElement = document.querySelector('.playerStrengthText');
    let playerToughnessElement = document.querySelector('.playerToughnessText');

    playerNameElement.innerText = this.playerName;
    playerProfessionElement.innerText = this.profession;
    playerStrengthElement.innerText = this.strength;
    playerToughnessElement.innerText = this.toughness;
  };
  this.displayPlayerInformation();
}

let player = new Player();
