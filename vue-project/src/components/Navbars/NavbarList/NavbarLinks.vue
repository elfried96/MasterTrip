<script setup lang="ts">
interface Props {
  title: string;
  link:string;

}

defineProps<Props>();
</script>


<template>

  <RouterLink :to="`${link}`" class="nav-custom-css flex justify-between rounded-full  items-center gap-3 p-3 hover:bg-secondary">

    <span class="text-secondary hover:text-primary ">
      <slot>

      </slot>
    </span>
    <p class="hidden text-primary text-xl font-semibold ">{{ title }}</p>


  </RouterLink>


</template>

<style scoped>
.nav-custom-css:hover p,
.nav-custom-css:hover span{
  color:#7e6bff;
  display: block;
}
</style>
