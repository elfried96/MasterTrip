<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import NavigationButton from '@/components/Buttons/NavigationButton.vue';

const router = useRouter();
const handleClick = () => {
  console.log("are you there")
  router.push("/rooms")
}

import { useRouter } from 'vue-router';

// Get the router instance


// Define the goBack function
function goBack() {
  router.go(-1); // Navigate to the previous page
}

</script>

<template>

  <div class=" relative h-full min-h-screen w-full " :style="`background-image: url('${imageTest}');`">
    <div class="flex justify-start p-4">
      <span class="rounded-full p-2 bg-white" @click="goBack()">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </span>

    </div>
    <div class="absolute bottom-0 z-10 w-full px-4">
      <NavigationButton :handle-click="handleClick" title="Select Room" />

    </div>

    <div class=" absolute -bottom-40 w-full rounded-t-3xl min-h-1/2 h-full bg-white p-4 flex flex-col gap-4">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">Grand Luxury</h1>
        <p>230 fcfa</p>
      </div>
      <p>
        parakou, Benin
      </p>
      <div class="flex flex-col ">
        <h2 class="text-xl font-bold">
          Information
        </h2>
        <p>Parakou's Paradise is located in Parakou. This property offers access to a terrace, free private parking and
          free WiFi.

          The guest house comes with a flat-screen TV.

          Distance in property description is calculated using © OpenStreetMap</p>
      </div>

    </div>

  </div>




</template>
