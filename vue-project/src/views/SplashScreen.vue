<script setup lang="ts">
// import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

import { onMounted } from 'vue';



onMounted(() => {
  // Redirect after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    router.push('/onboardingone'); // Replace '/target-route' with the desired route
  }, 3000);
});
// const handleClick= () => {
//   router.push("/onboardingone")
// }

</script>


<template>

<div class="flex flex-col gap-4 justify-center items-center w-full h-full bg-primary h-screen ">
  <H1 class="text-5xl font-bold text-white">xɔmɛ</H1>
  <p> </p>
  <!-- <div class="">
    <NavigationButton title="Next" color="white" css-text="primary" :handle-click="handleClick"></NavigationButton>
  </div> -->

</div>


</template>

<style scoped>

</style>
