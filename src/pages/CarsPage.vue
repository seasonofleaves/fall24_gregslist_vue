<script setup>
import { AppState } from '@/AppState.js';
import CarForm from '@/components/globals/CarForm.vue';
import CarListing from '@/components/globals/CarListing.vue';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const cars = computed(() => AppState.cars)

onMounted(() => {
  getCars()
})

async function getCars() {
  try {
    await carsService.getCars()
  } catch (error) {
    Pop.meow(error)
    // NOTE logger is very similar to console, but will not break build process
    logger.error(error);
  }
}

</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Cars Page</h1>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <CarForm />
      </div>
    </section>
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-12 mb-3">
        <CarListing :carProp="car" />
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped></style>