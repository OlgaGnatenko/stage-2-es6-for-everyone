import GameView from "./views/gameView";
import { fighterService } from "./services/fightersService";

class App {
  constructor() {
    this.startApp();
  }

  static rootElement = document.getElementById("root");
  static loadingElement = document.getElementById("loading-overlay");

  async startApp() {
    try {
      App.loadingElement.style.visibility = "visible";

      const fighters = await fighterService.getFighters();
      const gameView = new GameView(fighters);
      const gameElement = gameView.element;

      App.rootElement.appendChild(gameElement);
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = "Failed to load data";
    } finally {
      App.loadingElement.style.visibility = "hidden";
    }
  }
}

export default App;
