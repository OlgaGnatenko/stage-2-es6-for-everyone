import View from "./view";

class CombatView extends View {
  constructor(fighter1, fighter2) {
    super();
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;

    this.backBtnClick = this.backBtnClickHandler.bind(this);

    this.createCombat(fighter1, fighter2);
  }

  createCombat(fighter1, fighter2) {
    console.log("createCombat", fighter1, fighter2);
    this.element = this.createElement({
      tagName: "div",
      className: "combat-container"
    });
    this.element.innerHTML = "COMBAT";

    const backBtn = this.createBackBtn();
    this.element.append(backBtn);
  }

  createBackBtn() {
    const backBtn = this.createElement({
      tagName: "button",
      className: "back-btn"
    });
    backBtn.innerHTML = "Back to Game Settings";
    backBtn.onclick = this.backBtnClick;
    return backBtn;
  }

  backBtnClickHandler() {
    const gameElement = document.getElementById("game");
    gameElement.style.visibility = "visible";
    this.element.parentNode.removeChild(this.element);
  }
}

export default CombatView;
