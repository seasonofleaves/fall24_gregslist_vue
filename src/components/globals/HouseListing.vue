<script setup>
import { House } from '@/models/House.js';
defineProps({
  houseProp: { type: House, required: true }
})
</script>


<template>
  <div>
    <p>{{ houseProp }}</p>
  </div>
</template>


<style lang="scss" scoped></style>