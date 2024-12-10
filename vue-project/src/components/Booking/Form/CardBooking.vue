<script setup lang="ts">
import { ref } from 'vue';
import ModalBooking from '../Modal/ModalBooking.vue';
interface Props {
  title: string;
  colorIcon: string;

}
defineProps<Props>();
const data = ref("");
const showModal = ref(false);
</script>


<template>

 <div class="flex gap-3 justify-betwen items-center rounded-lg bg-white px-3 py-4" @click="showModal=true">
  <span :class="`rounded-full p-4 bg-${colorIcon} `">
    <slot></slot>
  </span>
  <div class="flex flex-col gap-3">
    <p class="text-2xl font-semibold">{{title}}</p>
    <input class="border-none outline-none " v-model="data" readonly  v-if="data"/>
  </div>

 </div>

 <ModalBooking  v-if="showModal"/>





</template>
