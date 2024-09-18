<script setup>
import { Car } from '@/models/Car.js';


defineProps({
  carProp: { type: Car, required: true }
})

</script>


<template>
  <div class="row" :style="{ borderColor: carProp.color }">
    <div class="col-md-4 p-0">
      <img :src="carProp.imgUrl" :alt="`${carProp.year} ${carProp.make} ${carProp.model}`" class="img-fluid car-img">
    </div>
    <div class="col-md-8">
      <div class="p-3">
        <h2>{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</h2>
        <div class="d-flex justify-content-between">
          <h3 class="fs-5 mb-0">Listed on {{ carProp.createdAt.toLocaleDateString() }} by {{ carProp.creatorName }}</h3>
          <img :src="carProp.creatorPicture" :alt="carProp.creatorName" class="creator-img">
        </div>
        <h4>{{ carProp.priceAsCurrency }}</h4>
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