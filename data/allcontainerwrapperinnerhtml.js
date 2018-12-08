const allContainerWrapperInnerHtml =
`<div class="tableSkills">
  <div class="skillWrapper">
    <p>skill1</p>
    <div class="skillImageWrapper"></div>
  </div>
  <div class="skillWrapper">
    <p>skill2</p>
    <div class="skillImageWrapper"></div>
  </div>
  <div class="skillWrapper">
    <p>skill3</p>
    <div class="skillImageWrapper"></div>
  </div>
  <div class="skillWrapper">
    <p>basic attack</p>
    <div class="skillImageWrapper"></div>
  </div>
</div>
<section class="mainContainer">
  <div class="mainContainerUpperWrapper">
    <div class="bossContainer">
      <div class="bossHealthBarWrapper"><label class="bossHealthBarText"></label></div>
      <div class="bossImageWrapper whiteBackground"><img class="bossImage" /></div>
      <div class="mainContainerButtonsWrapper">
        <div class="startFightButtonWrapper"><button class="startFightButton">Start Fight</button></div>
        <div class="randomBossButtonWrapper"><button class="randomBossButton">Random Boss</button></div>
      </div>
    </div>
    <div class="playerContainer">
      <div class="playerHealthBarContainer"><label class="playerHealthBarText"></label></div>
      <div class="playerManaBarContainer"><label class="playerManaBarText"></label></div>
      <div class="playerInformation whiteBackground ">
        <h1>Player Information</h1>
        <div class="playerNameWrapper">
          <label>Player Name</label>
          <p class="playerNameText lightBlueBackground"></p>
        </div>
        <div class="playerProfessionWrapper">
          <label>Player Profession</label>
          <p class="playerProfessionText lightBlueBackground"></p>
        </div>
        <div class="playerStrengthWrapper">
          <label>Player Strength</label>
          <p class="playerStrengthText lightBlueBackground"></p>
        </div>
        <div class="playerToughnessWrapper">
          <label>Player Toughness</label>
          <p class="playerToughnessText lightBlueBackground"></p>
        </div>
      </div>
      <div class="saveButtonWrapper"><button class="saveButton">Save</button></div>
    </div>
  </div>
  <div class="battleReportContainer">
    <div class="bossMovesWrapper">
      <h1>Boss Moves</h1>
      <div class="bossMoves"></div>
    </div>
    <div class="playerMovesWrapper">
      <h1>Player Moves</h1>
      <div class="playerMoves"></div>
    </div>
  </div>
  <div class="resultContainer"><div class="resultTextWrapper"></div></div>
</section>

<section class="professionSelectionContainer">
  <h1>Profession Selections</h1>
  <div>
    <h2>Novice</h2>
    <div class="professionWrapper"></div>
  </div>
  <div>
    <h2>Guardian</h2>
    <div class="professionWrapper"></div>
  </div>
  <div>
    <h2>Elementalist</h2>
    <div class="professionWrapper"></div>
  </div>
  <div>
    <h2>Necromancer</h2>
    <div class="professionWrapper"></div>
  </div>
</section>`
