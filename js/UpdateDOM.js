function addSkillImageToDOM() {
  const skillWrappers = [...document.getElementsByClassName('skillImageWrapper')];
  skillWrappers.forEach((skillWrapper, index) => {
    let { name: skillName } = player.skills[index]; // get the skillName of current used profession.
    let imagePath = `images/skillsimg/${player.profession}/${removeSpace(skillName)}.png`;
    if (!skillWrapper.innerHTML) {
      skillWrapper.innerHTML = `<img src=${imagePath} data-skillname='${skillName}' class='skill skill${index + 1}' />`;
      // skillWrapper.addEventListener();
    } else {
      skillWrapper.innerHTML = '';
      skillWrapper.innerHTML = `<img src=${imagePath} data-skillname='${skillName}' class='skill skill${index + 1}' />`;
    }
  });
}

function addProfessionImageToDOM() {
  const professionWrappers = [...document.getElementsByClassName('professionWrapper')];
  let unlockedProfession = player.unlockedProfessions;
  professionWrappers.forEach((professionWrapper, index) => {
    let professionName = unlockedProfession[index].profession;
    let imagePath = `images/professionimg/${professionName}.jpg`;
    if (!professionWrapper.innerHTML) {
      professionWrapper.innerHTML = `<img src=${imagePath} data-professionname='${professionName}' class='${professionName}' />`;
    } else {
      professionWrapper.innerHTML = '';
      professionWrapper.innerHTML = `<img src=${imagePath} data-professionname='${professionName}' class='${professionName}' />`;
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

addSkillImageToDOM();
addSkillEventListenerToDOM();
addStartFightEventListenerToDOM();
addRandomBossEventListenerToDOM();
addProfessionImageToDOM();
