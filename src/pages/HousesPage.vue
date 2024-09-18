<script setup>
import Pop from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { computed, onMounted } from 'vue';
import { housesService } from '@/services/HousesService.js';
import { AppState } from '@/AppState.js';
import HouseListing from '@/components/globals/HouseListing.vue';
import HouseForm from '@/components/globals/HouseForm.vue';

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
      <div class="col-12">
        <HouseForm/>
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12 mb-3">
        <HouseListing :houseProp="house" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>