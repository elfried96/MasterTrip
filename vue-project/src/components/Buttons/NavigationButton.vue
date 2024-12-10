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

  <button  :class="`rounded-full text-center font-medium text-xl px-4 py-2 w-full  bg-${color || 'primary'} `"    @click="handleClick">
    <p :class="`text-${cssText || 'white'} font-semibold text-lg` ">{{title}}</p>

  </button>



</template>
