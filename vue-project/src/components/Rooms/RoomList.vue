<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import RoomCard from './RoomCard.vue';


</script>


<template>

  <div class="grid px-1 gap-y-4 w-full">
    <RoomCard :hotelId="23" title="Cove Hotel" :image="imageTest" :price="20000" size="40m2">
    
    </RoomCard >
    <RoomCard :hotelId="23" title="Cove Hotel" :image="imageTest" :price="20000" size="40m2">

    </RoomCard >
    <RoomCard :hotelId="23" title="Cove Hotel" :image="imageTest" :price="20000" size="40m2">

    </RoomCard >

  </div>


</template>

<style scoped></style>
