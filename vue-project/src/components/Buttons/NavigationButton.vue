<script setup lang="ts">
interface Props {
  color?: string;
  title: string;
  cssText?:string;
  handleClick: () => void;

}

defineProps<Props>();
</script>


<template>

  <button  :class="`rounded-full text-center font-medium text-xl px-4 py-4 w-full  bg-${color || 'primary'} `"    @click="handleClick">
    <p class="text-white">{{title}}</p>

  </button>



</template>
