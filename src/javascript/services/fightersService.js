import { callApi } from "../helpers/apiHelper";

class FightersService {
  async getFighters() {
    try {
      const endpoint = "fighters.json";
      const apiResult = await callApi(endpoint, "GET");

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, "GET");
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async updateFighterDetails(_id, fighterDetailsMap) {
    try {
      const fighterDetails = await fightersService.getFighterDetails(_id);
      if (!fighterDetailsMap.get(_id)) {
        fighterDetailsMap.set(_id, fighterDetails);
      }
      return fighterDetails;
    } catch (error) {
      throw error;
    }
  }
}

export const fightersService = new FightersService();
