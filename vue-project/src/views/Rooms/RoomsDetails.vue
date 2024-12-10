<script setup lang="ts">
import imageTest from '@/assets/download.jpeg'
import NavigationButton from '@/components/Buttons/NavigationButton.vue';

const handleClick = () => {
  console.log("are you there")
  router.push("/payments")
}

import { useRouter } from 'vue-router';

// Get the router instance
const router = useRouter();

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
    <div class="absolute bottom-1 z-10 w-full px-4">
      <NavigationButton :handle-click="handleClick" title="Book" />

    </div>

    <div class=" absolute -bottom-40 w-full rounded-t-3xl min-h-1/2 h-full bg-white p-4 flex flex-col gap-4">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl">chambre 3 piece</h1>
        <p>230 fcfa</p>
      </div>
      <p>
        20m2
      </p>
      <div class="flex flex-col ">
        <h2 class="text-xl font-bold">
          Information
        </h2>
        <p>Outre le lit, les chambres sont ordinairement pourvues d'autres meubles, essentiellement de rangement, agencés ou conçus pour permettre de s'apprêter, de se vêtir et se dévêtir. Dans cet ordre d'idée, la salle de bain est souvent en communication directe avec la chambre quand elle n'y est pas davantage intégrée, comme c'est le cas dans une suite parentale où</p>
      </div>

    </div>

  </div>

</template>
