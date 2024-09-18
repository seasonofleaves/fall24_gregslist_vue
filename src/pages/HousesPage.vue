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
  <h1>Houses</h1>
  {{ houses }}
</template>

<style lang="scss" scoped></style>