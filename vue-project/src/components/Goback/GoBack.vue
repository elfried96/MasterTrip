<script setup lang="ts">

import { useRouter } from 'vue-router';

// Get the router instance
const router = useRouter();

function goBack() {
  router.go(-1);
}

</script>

<template>
    <div class="flex justify-start py-4">
      <span class="rounded-full p-2 bg-white" @click="goBack()">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#000000" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

      </span>

    </div>

</template>
