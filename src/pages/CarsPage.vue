<script setup>
import { AppState } from '@/AppState.js';
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
  <h1>Cars Page</h1>
  {{ cars }}
</template>


<style lang="scss" scoped></style>