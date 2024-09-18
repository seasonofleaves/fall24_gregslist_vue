<script setup>
import { ref } from 'vue';

const editableHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  imgUrl: '',
  year: new Date().getFullYear(),
  price: 0,
  description: '',
})
</script>


<template>
  <form onsubmit="app.CarsController.createCar()">
    <div class="mb-3">
      <label class="form-label" for="make">Bedrooms</label>
      <input v-model="editableHouseData.bedrooms" class="form-control" id="make" name="make" type="text" required
        maxlength="500" placeholder="Bedrooms...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="model">Bathrooms</label>
      <input v-model="editableHouseData.bathrooms" class="form-control" id="model" name="model" type="text" required
        maxlength="500" placeholder="Bathrooms...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="imgUrl">House Image</label>
      <input v-model="editableHouseData.imgUrl" class="form-control" id="imgUrl" name="imgUrl" type="url" required
        maxlength="500" placeholder="House Image...">
    </div>
    <div class="mb-3">
      <label class="form-label" for="year">Year Built</label>
      <input v-model="editableHouseData.year" class="form-control" id="year" name="year" type="number" required min="1600"
        max="2025" placeholder="2025">
    </div>
    <div class="mb-3">
      <label class="form-label" for="price">House Price</label>
      <input v-model="editableHouseData.price" class="form-control" id="price" name="price" type="number" required min="0"
        max="1700000" placeholder="0">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">House Description</label>
      <textarea v-model="editableHouseData.description" class="form-control" id="description" maxlength="500"
        rows="3"></textarea>
    </div>
    <div class="text-end">
      <button class="btn btn-success" type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>