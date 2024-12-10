<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  // Redirect after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    router.push('/home'); // Replace '/target-route' with the desired route
  }, 3000);
});
</script>


<template>

<img class="w-full " src="../assets/Splashscreen.png" alt="splash screen">

</template>

<style scoped>

</style>
