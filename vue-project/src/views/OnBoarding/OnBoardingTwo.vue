<script setup lang="ts">
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';
import imagey from '@/assets/domestic-room-with-modern-design-wood-flooring-generative-ai.jpg';

const router = useRouter();

interface Props {
  title: string;
  description: string
  image: string;
}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push("/onboard3")
}

</script>
<template>
  <div class="flex flex-col h-screen py-10 gap-y-8 justify-center    bg-secondary">
    <H1 class="text-5xl font-bold text-center">xɔmɛ</H1>
    <div class="h-72">
      <img :src="imagey" alt="image" class="h-full bg-cover  w-full">

    </div>

    <div class="flex flex-col justify-start gap-y-3 px-3 ">
      <h1 class=" font-semibold">Trouvez une Chambre Confortable</h1>
      <p>Faites de votre séjour un moment inoubliable en trouvant la chambre parfaite pour vos besoins.</p>
    </div>
    <div class="flex justify-end px-3">
      <div class="w-1/3">
      <NavigationButton title="next" :handle-click="handleClick"></NavigationButton>
    </div>

    </div>

  </div>

</template>

<style scoped></style>
