<script setup>
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';


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

</template>


<style lang="scss" scoped></style>