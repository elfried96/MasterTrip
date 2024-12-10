<script setup lang="ts">
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';
import imagey from '@/assets/tourist-carrying-baggage.jpg';

const router = useRouter();

interface Props {
  title: string;
  description:string
  image: string;
}
defineProps<Props>();

const handleClick = () => {
  console.log("view hotel")
  router.push("/onboard2")
}

</script>
<template>

 <div>
  <img :src="imagey" alt="image">
  <div>
    <h1>Choisisr une Destination</h1>
  </div>
  <div>
    <NavigationButton title="next" :handle-click="handleClick" ></NavigationButton>
  </div>
 </div>

</template>

<style scoped></style>
