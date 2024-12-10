<script setup lang="ts">
interface Props {
  color: string;
  title: string;
  link:string;

}

defineProps<Props>();
</script>


<template>

  <RouterLink :to="`${link}`" class="flex flex-col justify-center items-center gap-1">
    <div :class="`rounded-2xl ${color} opacity-80 w-full  p-10 flex justify-center items-center`">
      <span>
        <slot>

        </slot>

      </span>


    </div>
    <p class="text-center text-base ">
      {{ title }}

    </p>

  </RouterLink>



</template>
