const professions = [
  {
    profession: 'novice',
    strength: 20,
    toughness: 35,
    health: 3000,
    mana: 400,
    skills: [
      {
        name: 'taunt',
        type: 'strength',
        indexPower: 3,
        cooldown: 18,
        manaCost: 40,
        duration: 15
      },
      {
        name: 'hide',
        type: 'toughness',
        indexPower: 3,
        cooldown: 17,
        manaCost: 30,
        duration: 15
      },
      {
        name: 'decent combat orders',
        type: 'damage',
        indexPower: 4,
        cooldown: 7,
        manaCost: 40,
        duration: 0
      }
    ]
  },
  {
    profession: 'guardian',
    strength: 70,
    toughness: 99,
    health: 9000,
    mana: 3000,
    skills: [
      {
        name: 'virtue of justice',
        type: 'damage',
        indexPower: 6.0,
        cooldown: 17,
        manaCost: 300,
        duration: 0
      },
      {
        name: 'shield of absorption',
        type: 'toughness',
        indexPower: 9.4,
        cooldown: 30,
        manaCost: 500,
        duration: 25
      },
      {
        name: 'leap of faith',
        type: 'health',
        indexPower: 5.3,
        cooldown: 12,
        manaCost: 400,
        duration: 0
      }
    ]
  },
  {
    profession: 'elementalist',
    strength: 74,
    toughness: 65,
    health: 6500,
    mana: 6000,
    skills: [
      {
        name: 'water trident',
        type: 'damage',
        indexPower: 6.1,
        cooldown: 10,
        manaCost: 400,
        duration: 0
      },
      {
        name: 'static field',
        type: 'toughness',
        indexPower: 6.3,
        cooldown: 11,
        manaCost: 500,
        duration: 9
      },
      {
        name: 'meteor shower',
        type: 'damage',
        indexPower: 9.5,
        cooldown: 30,
        manaCost: 900,
        duration: 0
      }
    ]
  },
  {
    profession: 'necromancer',
    strength: 94,
    toughness: 50,
    health: 10500,
    mana: 2500,
    skills: [
      {
        name: 'locust swarm',
        type: 'damage',
        indexPower: 6,
        cooldown: 5,
        manaCost: 100,
        duration: 0
      },
      {
        name: 'grasping dead',
        type: 'health',
        indexPower: 10,
        cooldown: 70,
        manaCost: 1000,
        duration: 0
      },
      {
        name: 'doom',
        type: 'damage',
        indexPower: 8.8,
        cooldown: 31,
        manaCost: 600,
        duration: 0
      }
    ]
  }
];

professions.forEach(professionObj => {
  professionObj.skills.push({
    name: 'basic attack',
    type: 'damage',
    indexPower: 2,
    cooldown: 6,
    manaCost: 0,
    duration: 0
  });
});
const novice = professions[0];
const guardian = professions[1];
const elementalist = professions[2];
const necromancer = professions[3];
