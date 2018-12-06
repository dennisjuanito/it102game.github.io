const bosses = [
  {
    name: 'anti mage',
    strength: 35,
    toughness: 24,
    health: 1500,
    skills: [
      {
        name: 'mana break',
        type: 'damage',
        indexPower: 3,
        chance: 17,
        duration: 0
      },
      {
        name: 'blink',
        type: 'toughness',
        indexPower: 5,
        chance: 10,
        duration: 14
      },
      {
        name: 'mana void',
        type: 'damage',
        indexPower: 5,
        chance: 5,
        duration: 0
      }
    ],
    dropProfessionsRate: {
      guardian: 0.04,
      ranger: 0.06,
      necromancer: 0.0111,
      mesmer: 0.02,
      elementalist: 0.03,
      warrior: 0.1,
      thief: 0.08,
      engineer: 0.11,
      revenant: 0.14
    }
  },
  {
    name: 'axe',
    strength: 95,
    toughness: 78,
    health: 4500,
    skills: [
      {
        name: 'berserker call',
        type: 'toughness',
        indexPower: 8,
        chance: 10,
        duration: 20
      },
      {
        name: 'battle hunger',
        type: 'damage',
        indexPower: 7.4,
        chance: 25,
        duration: 0
      },
      {
        name: 'culling blade',
        type: 'damage',
        indexPower: 9,
        chance: 5,
        duration: 0
      }
    ],
    dropProfessionsRate: {
      guardian: 0.01,
      ranger: 0.1,
      necromancer: 0.11,
      mesmer: 0.002,
      elementalist: 0.0321,
      warrior: 0.024,
      thief: 0.08,
      engineer: 0.001,
      revenant: 0.014
    }
  },
  {
    name: 'mirana',
    strength: 25,
    toughness: 40,
    health: 12500,
    skills: [
      {
        name: 'moonlight recovery',
        type: 'health',
        indexPower: 8,
        chance: 35,
        duration: 0
      },
      {
        name: 'leap',
        type: 'strength',
        indexPower: 7,
        chance: 10,
        duration: 15
      },
      {
        name: 'starstorm',
        type: 'damage',
        indexPower: 10,
        chance: 5,
        duration: 0
      }
    ],
    dropProfessionsRate: {
      guardian: 0.1,
      ranger: 0.001,
      necromancer: 0.021,
      mesmer: 0.21,
      elementalist: 0.00321,
      warrior: 0.24,
      thief: 0.008,
      engineer: 0.01,
      revenant: 0.0014
    }
  }
];
const basicBossAttack = {
  name: 'basic attack',
  type: 'damage',
  indexPower: 1,
  duration: 0
};

const antiMage = bosses[0];
const axe = bosses[1];
const mirana = bosses[2];
