import View from "./view";
import FightersView from "./fightersView";
import SelectFightersView from "./selectFightersView";

class GameView extends View {
  fighters;
  fighter1;
  fighter2;

  constructor(fighters) {
    super();

    this.createGame(fighters);
  }

  createGame(fighters) {
    this.fighters = fighters;

    const logo = this.createLogo("../../../resources/logo.png");
    const gamePanel = this.createGamePanel(fighters);

    const fightersView = new FightersView(fighters);
    const fightersElement = fightersView.element;

    this.element = this.createElement({
      tagName: "div",
      className: "game"
    });
    this.element.append(logo, fightersElement, gamePanel);
    this.element.addEventListener("selectFighters", this.selectFightersHandler);
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

  createStartGameBtn(startGameClick) {
    const startGameBtn = this.createElement({
      tagName: "button",
      className: "start-game"
    });
    startGameBtn.innerHTML = "Start Game";
    startGameBtn.onclick = startGameClick;
    return startGameBtn;
  }

  startGameClick() {
    console.log("start game");
    return;
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

  selectFightersHandler(event) {
    console.log("selectFightersHandler", event);
  }
}

export default GameView;
