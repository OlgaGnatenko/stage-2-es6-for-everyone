import View from "./view";
import FightersView from "./fightersView";
import SelectFightersView from "./selectFightersView";
import CombatView from "./CombatView";

class GameView extends View {
  fighter1;
  fighter2;

  constructor(fighters) {
    super();

    if (fighters.length) {
      this.fighter1 = fighters[0];
      this.fighter2 = fighters[0];
    }

    this.startGameClick = this.startGameClickHandler.bind(this);
    this.selectFighter = this.selectFighterHandler.bind(this);
    this.createGame(fighters);
  }

  static rootElement = document.getElementById("root");

  createGame(fighters) {
    const logo = this.createLogo("../../../resources/logo.png");
    const gamePanel = this.createGamePanel(fighters);

    const fightersView = new FightersView(fighters);
    const fightersElement = fightersView.element;

    this.element = this.createElement({
      tagName: "div",
      className: "game",
      attributes: {
        id: "game"
      }
    });
    this.element.append(logo, fightersElement, gamePanel);
    this.element.addEventListener("selectFighter", this.selectFighter);
  }

  createGamePanel(fighters) {
    const gamePanel = this.createElement({
      tagName: "div",
      className: "game-panel"
    });

    const startGameBtn = this.createStartGameBtn(this.startGameClick);
    const selectFighters = new SelectFightersView(fighters);
    gamePanel.append(selectFighters.element, startGameBtn);
    return gamePanel;
  }

  createStartGameBtn(startGame) {
    const startGameBtn = this.createElement({
      tagName: "button",
      className: "start-game"
    });
    startGameBtn.innerHTML = "Start Game";
    startGameBtn.onclick = startGame;
    return startGameBtn;
  }

  startGameClickHandler() {
    const combatView = new CombatView(this.fighter1, this.fighter2);
    GameView.rootElement.append(combatView.element);
    this.element.style.visibility = "hidden";
  }

  createLogo(source) {
    const logo = this.createElement({
      tagName: "div",
      className: "fighter-logo"
    });
    // const logoImg = this.createElement({
    //   tagName: "img",
    //   attributes: {
    //     src: source
    //   }
    // });
    // logo.append(logoImg);
    return logo;
  }

  selectFighterHandler(event) {
    const { detail } = event;
    detail.order === "1"
      ? (this.fighter1 = detail.selectedFighter)
      : (this.fighter2 = detail.selectedFighter);
    console.log(
      "selectFighterHandler",
      event.detail,
      this.fighter1,
      this.fighter2
    );
  }
}

export default GameView;
