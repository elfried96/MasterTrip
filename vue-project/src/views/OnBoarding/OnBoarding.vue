<script setup lang="ts">
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';
import imagey from '@/assets/tourist.jpg';

const router = useRouter();

interface Props {
  title: string;
  description: string
  image: string;
}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push("/onboard2")
}

</script>
<template>
  <div class="flex flex-col h-screen py-10 gap-y-8 justify-center    bg-secondary">
    <div class="h-72">
      <img :src="imagey" alt="image" class="h-full bg-cover  w-full">

    </div>

    <div class="flex flex-col justify-start gap-y-3 px-3 ">
      <h1 class=" font-semibold">Choisisr une Destination</h1>
      <p>Planifiez votre prochain séjour en toute simplicité</p>
    </div>
    <div class="flex justify-end px-3">
      <div class="w-1/3">
      <NavigationButton title="next" :handle-click="handleClick"></NavigationButton>
    </div>

    </div>

  </div>

</template>

<style scoped></style>
