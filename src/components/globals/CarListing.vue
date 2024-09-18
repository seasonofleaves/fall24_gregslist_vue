<script setup>
import { Car } from '@/models/Car.js';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';


// NOTE if you want to use props within your script tag, you must alias it out to a variable
const props = defineProps({
  carProp: { type: Car, required: true }
})

async function deleteCar() {
  try {
    const wantsToDelete = await Pop.confirm(`Are you sure you want to delete this ${props.carProp.make} ${props.carProp.model}?`)

    if (!wantsToDelete) { return }

    console.log('car id', props.carProp.id);

    await carsService.deleteCar(props.carProp.id)
  } catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}

</script>


<template>
  <div class="row" :style="{ borderColor: carProp.color }">
    <div class="col-md-4 p-0">
      <img :src="carProp.imgUrl" :alt="`${carProp.year} ${carProp.make} ${carProp.model}`" class="img-fluid car-img">
    </div>
    <div class="col-md-8">
      <div class="p-3 d-flex flex-column justify-content-between h-100">
        <div>
          <h2>{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</h2>
          <div class="d-flex justify-content-between">
            <h3 class="fs-5 mb-0">Listed on {{ carProp.createdAt.toLocaleDateString() }} by {{ carProp.creatorName }}
            </h3>
            <img :src="carProp.creatorPicture" :alt="carProp.creatorName" class="creator-img">
          </div>
          <h4>{{ carProp.priceAsCurrency }}</h4>
        </div>
        <div class="text-end">
          <button @click="deleteCar()" class="btn btn-danger" type="button">Delete Car</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.row {
  border: 2px solid;
  box-shadow: 0 2px 15px rgb(144, 144, 144);
}

.creator-img {
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.car-img {
  height: 50dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>