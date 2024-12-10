<script setup lang="ts">
import NavigationButton from '../Buttons/NavigationButton.vue';
import { useRouter } from 'vue-router';

// Get the router instance
const router = useRouter();

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
  router.push("/details/2")
}

</script>
<template>

  <RouterLink to="/details/2" class="relative bg-white flex flex-col gap-2  h-68 w-full rounded-xl">
    <div class="h-28 rounded-tl-xl">
      <img :src="image" alt="" class="bg-cover h-full bg-center  rounded-tl-xl rounded-br-lg w-11/12">
    </div>
    <div class="flex flex-col px-4 py-3">
      <div class="flex flex-col gap-y-2 ">
        <h1 class="font-medium text-xl">{{ title }}</h1>
        <div class="flex gap-x-2 items-center">
          <span>
            <slot></slot>
          </span>
          <p>{{ location }}</p>
        </div>
      </div>
      <div class="flex justify-between items-center">

        <p>{{ price }} FCFA</p>
        <div>
          <NavigationButton title="Book a room" :handle-click="handleClick" />

        </div>

      </div>
    </div>

  </RouterLink>


</template>

<style scoped></style>
