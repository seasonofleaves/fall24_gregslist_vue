import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Car } from "@/models/Car.js"

class CarsService {
  async getCars() {
    const response = await api.get('api/cars')
    logger.log('GOT CARS 🚓🚔🚗', response.data)
    const newCars = response.data.map(carPOJO => new Car(carPOJO))
    AppState.cars = newCars
  }
  async createCar(carData) {
    const response = await api.post('api/cars', carData)
    logger.log('CREATED CAR 🚗', response.data)
    const newCar = new Car(response.data)
    AppState.cars.push(newCar)
  }
}

export const carsService = new CarsService()