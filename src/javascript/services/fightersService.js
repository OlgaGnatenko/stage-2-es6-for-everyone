import { callApi } from "../helpers/apiHelper";

class FighterService {
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
      const fighterDetails = await fighterService.getFighterDetails(_id);
      fighterDetailsMap.set(_id, fighterDetails);
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
