import View from "./view";
import activeFighterView from "./activeFighterView";
import Fight from "../classes/fight";

class FightView extends View {
  fight;

  constructor(fighter1, fighter2) {
    super();

    fight = new Fight(fighter1, fighter2);
    this.createFighters(fighter1, fighter2);
  }

  createFighters(fighter1, fighter2) {
    // activeFighterView for 2 players 
  }

  createNextRoundBtn(handleNextRoundClick) {
    // run next round of fight
  }

  createBackBtn(handleBackBtnClick) {
    // remove this view, show fighters view 
  }

  createWinnerPanel() {
    // add winner panel when game is over 
  }
}

export default FighterView;
