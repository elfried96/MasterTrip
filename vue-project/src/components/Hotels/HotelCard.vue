<script setup lang="ts">
import NavigationButton from '../Buttons/NavigationButton.vue';
import imageTest from '@/assets/download.jpeg'

interface Props {
  title: string;
  hotelId: number;
  image: string;
  price: number;
  location: string;

}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
}

</script>


<template>

  <RouterLink to="" class="relative bg-white flex flex-col gap-2 p-4 h-68 w-full rounded-xl">
    <div class="h-28">
      <div :style="`background-image: url('${imageTest}');`" class="bg-cover bg-center">

      </div>
    </div>

    <div class="flex flex-col gap-2">
      <h1 class="font-medium text-xl">{{ title }}</h1>
      <div class="flex">
        <span>
          <slot></slot>
        </span>
        <p>{{ location}}</p>
      </div>
    </div>
    <div class="flex justify-between items-center">

      <p>{{ price }} FCFA</p>
      <div>
        <NavigationButton title="Book a room" :handle-click="handleClick" />

      </div>


    </div>

  </RouterLink>


</template>

<style scoped></style>
