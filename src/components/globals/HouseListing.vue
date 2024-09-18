<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed } from 'vue';

const props = defineProps({
houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse(){
  try {
    const wantsToDelete = await Pop.confirm(`Are you sure you want to delete this house?`)
    if (!wantsToDelete){return}
    await housesService.deleteHouse(props.houseProp.id)
  } catch (error) {
    Pop.error(error)
    logger.log(error)
  }
}

</script>


<template>
  <section class="row">
    <div class="col-md-4 p-0">
      <img :src="houseProp.imgUrl" :alt="`${ houseProp.bedrooms } beds ${ houseProp.bathrooms } baths house`" class="img-fluid house-img">
    </div>
    <div class="col-md-8">
      <div class="p-3">
        <h2>{{ houseProp.bedrooms }} beds {{ houseProp.bathrooms }} baths</h2>
        <div class="d-flex justify-content-between">
          <h3 class="fs-5 mb-0">Listed on {{ houseProp.createdAt.toLocaleDateString() }} by {{ houseProp.creatorName }}</h3>
          <img :src="houseProp.creatorPicture" :alt="houseProp.creatorName" class="creator-img">
        </div>
        <h4>{{ houseProp.priceAsCurrency }}</h4>
      </div>
      <h5>{{ houseProp.description }}</h5>
    </div>
    <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse()" class="btn btn-danger" type="button">Delete House</button>
  </section>
</template>

<style lang="scss" scoped>
.row{
  border: 2px solid;
  box-shadow: 0 2px 15px rgb(136, 134, 134);
}
.creator-img{
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
.house-img{
  height: 50dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>