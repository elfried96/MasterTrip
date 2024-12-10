<script setup lang="ts">
import GoBack from '../Goback/GoBack.vue';

interface Props {
  addRightButton: boolean;
  description?: string;
  title: string;
}

defineProps<Props>();
</script>


<template>

  <div class="relative w-full bg-primary h-44 rounded-bl-3xl">
    <div class="flex justify-center items-center justify-between h-full px-2">
      <!-- <span class="rounded-full p-2 bg-white">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </span> -->
      <GoBack />

      <div class="flex flex-col gap-10 justify-center w-1/2 items-center text-center " >
        <h2 class="text-3xl text-white font-semibold">{{ title }}</h2>
        <p class="text-sm text-white" v-if="description">{{ description }}</p>
      </div>
      <span class="rounded-full p-2 bg-white" v-if="addRightButton == true">
        <svg width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12.32H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 18.32H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2 6.32001H22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </span>
      <div v-else>

      </div>


    </div>

  </div>


</template>

<style scoped></style>
