import View from "./view";
import FighterView from "./fighterView";
import { fighterService } from "../services/fightersService";

class FightersView extends View {
  constructor(fighters) {
    super();

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
  }

  fightersDetailsMap = new Map();

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);
      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    this.element.append(...fighterElements);
  }

  async handleFighterClick(event, fighter) {
    // show modal with fighter info
    const selectedFighter = this.fightersDetailsMap.get(fighter._id);
    try {
      if (!selectedFighter) {
        const fighterDetails = await fighterService.getFighterDetails(
          fighter._id
        );
        this.fightersDetailsMap.set(fighter._id, fighterDetails);
      }
    } catch (error) {
      throw error;
    } finally {
      // make loading state for modal invisible: Could not load fighter details. Please close the modal and try again.
    }
    // allow to edit health and power in this modal
  }
}

export default FightersView;
