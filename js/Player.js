function Player() {
  Object.assign(this, novice); // default values
  this.unlockedProfessions = [{ ...novice }];
  this.playerName = playerName;

  this.changeProfession = function(professionObj) {
    Object.assign(this, professionObj);
    player.displayPlayerInformation();
  };

  this.addProfession = function(professionObj) {
    let isDuplicateProfession = __.find(this.unlockedProfessions, professionObj);
    if (isDuplicateProfession) {
      // do nothing
    } else {
      this.unlockedProfessions = [...this.unlockedProfessions, professionObj];
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
console.log(player)
player.changeProfession(guardian);

