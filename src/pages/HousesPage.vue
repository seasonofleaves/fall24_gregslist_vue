<script setup>
import Pop from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { computed, onMounted } from 'vue';
import { housesService } from '@/services/HousesService.js';
import { AppState } from '@/AppState.js';

const houses = computed(() => AppState.houses)

onMounted(()=> {
  getHouses()
})

async function getHouses(){
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.error(error)
    logger.log(error)
  }
}

</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Houses</h1>
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12">
        <p>
          {{ house.bedrooms }} beds {{ house.bathrooms }} baths
        </p>

      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>