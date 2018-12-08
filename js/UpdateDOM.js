function addSkillImageToDOM() {
  console.log('I am here');
  const skillWrappers = [...document.getElementsByClassName('skillImageWrapper')];
  skillWrappers.forEach((skillWrapper, index) => {
    let { name: skillName } = player.skills[index]; // get the skillName of current used profession.
    let imagePath = `images/skillsimg/${player.profession}/${removeSpace(skillName)}.png`;
    if (!skillWrapper.innerHTML) {
      skillWrapper.innerHTML = `<img src=${imagePath} data-skillname='${skillName}' class='skill skill${index + 1}' />`;
    } else {
      skillWrapper.innerHTML = '';
      skillWrapper.innerHTML = `<img src=${imagePath} data-skillname='${skillName}' class='skill skill${index + 1}' />`;
    }
  });
}

function addProfessionImageToDOM() {
  const professionWrappers = [...document.getElementsByClassName('professionWrapper')];
  let unlockedProfession = professions;
  professionWrappers.forEach((professionWrapper, index) => {
    let professionName = unlockedProfession[index].profession;
    let imagePath = `images/professionimg/${professionName}.jpg`;
    if (!professionWrapper.innerHTML) {
      professionWrapper.innerHTML = `<img src=${imagePath} data-professionname='${professionName}' class='profession ${professionName}' />`;
    } else {
      professionWrapper.innerHTML = '';
      professionWrapper.innerHTML = `<img src=${imagePath} data-professionname='${professionName}' class='profession ${professionName}' />`;
    }
  });
}

function addSkillEventListenerToDOM() {
  let skillImgElements = [...document.getElementsByClassName('skill')];
  skillImgElements.forEach(skillImgElement => {
    return (
      skillImgElement.addEventListener('click', handleSkillClick),
      {
        once: false,
        capture: true
      }
    );
  });
}

function addStartFightEventListenerToDOM() {
  let startFightButton = document.getElementsByClassName('startFightButton')[0];
  startFightButton.addEventListener('click', handleStartFightClick);
}

function addRandomBossEventListenerToDOM() {
  let randomBossButton = document.getElementsByClassName('randomBossButton')[0];
  randomBossButton.addEventListener('click', handleRandomBossClick);
}

function addProfessionEventListenerToDOM() {
  const professionImgElements = [...document.getElementsByClassName('profession')];
  professionImgElements.forEach(professionImgElement => {
    let professionName = professionImgElement.dataset.professionname;
    let isProfessionUnlocked = player.unlockedProfessions.find(professionElement => {
      return professionElement.profession === professionName;
    });
    if (isProfessionUnlocked) {
      professionImgElement.parentElement.parentElement.classList.remove('onLockedProfessionWrapper');
      return (
        professionImgElement.addEventListener('click', handleProfessionClick),
        {
          once: false,
          capture: true
        }
      );
    } else {
      professionImgElement.parentElement.parentElement.classList.add('onLockedProfessionWrapper');
    }
  });
}

function addSaveEventListener() {
  let saveButtonElement = document.querySelector('.saveButton');
  saveButtonElement.addEventListener('click', handleSaveClick);
}

function selectPlayerCurrentProfession() {
  document.getElementsByClassName(player.profession)[0].classList.add('onSelect');
}

addSkillImageToDOM();
addSkillEventListenerToDOM();
addStartFightEventListenerToDOM();
addRandomBossEventListenerToDOM();
addProfessionImageToDOM();
addProfessionEventListenerToDOM();
addSaveEventListener();
selectPlayerCurrentProfession();