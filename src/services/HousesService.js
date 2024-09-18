import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    logger.log('Created house - house service', response.data)
  }

  async getHouses() {
    const response = await api.get('api/houses')
    // logger.log('Got Houses - Houses Service', response.data)
    const newHouses = response.data.map(housePOJO => new House(housePOJO))
    AppState.houses = newHouses
  }

}

export const housesService = new HousesService()