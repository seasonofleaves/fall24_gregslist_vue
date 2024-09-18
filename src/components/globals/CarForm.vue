<script setup>
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';

const currentYear = new Date().getFullYear() //2024

const engineTypes = [
  "unknown",
  "2 stroke",
  "4 cylinder",
  "v6",
  "v8",
  "v10",
  "v12",
  "small",
  "medium",
  "large",
  "chuncko"
]

const editableCarData = ref({
  make: '',
  model: '',
  imgUrl: '',
  year: currentYear,
  price: 0,
  description: '',
  color: '',
  engineType: 'unknown'
})

async function createCar() {
  try {
    const carData = editableCarData.value
    await carsService.createCar(carData)
  } catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}

</script>


<template>
  <form @submit.prevent="createCar()">
    <div class="mb-3">
      <label class="form-label" for="make">Car Make</label>
      <input v-model="editableCarData.make" class="form-control" id="make" name="make" type="text" required
        maxlength="500" placeholder="Car Make...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="model">Car Model</label>
      <input v-model="editableCarData.model" class="form-control" id="model" name="model" type="text" required
        maxlength="500" placeholder="Car Model...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="imgUrl">Car Image</label>
      <input v-model="editableCarData.imgUrl" class="form-control" id="imgUrl" name="imgUrl" type="url" required
        maxlength="500" placeholder="Car Image...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="year">Car Year</label>
      <input v-model="editableCarData.year" class="form-control" id="year" name="year" type="number" required min="1886"
        :max="currentYear + 1" placeholder="2025">
    </div>
    <div class="mb-3">
      <label class="form-label" for="price">Car Price</label>
      <input v-model="editableCarData.price" class="form-control" id="price" name="price" type="number" required min="0"
        max="1700000" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Car Description</label>
      <textarea v-model="editableCarData.description" class="form-control" id="description" maxlength="500"
        rows="3"></textarea>
    </div>
    <select v-model="editableCarData.engineType" class="form-select mb-3" aria-label="Car Engine Type">
      <option v-for="engineType in engineTypes" :key="engineType" :value="engineType">
        {{ engineType }}
      </option>
    </select>
    <div class="mb-3">
      <label for="color" class="form-label">Car Color</label>
      <input v-model="editableCarData.color" type="color" class="form-control form-control-color" id="color"
        value="#000000" title="Choose your color">
    </div>
    <div class="text-end">
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>