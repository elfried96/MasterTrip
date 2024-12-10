<script setup lang="ts">
import FooterNavbar from '@/components/Navbars/FooterNavbar.vue';
import HomeHeader from '@/components/Navbars/HomeHeader.vue';
import PopularDestination from '@/components/PopularDestination/PopularDestination.vue';
import ServiceGroup from '@/components/Service/ServiceGroup.vue';



</script>

<template>
  <main class="relative bg-secondary h-full min-h-screen w-full">
    <HomeHeader />
    <div class="flex flex-col gap-8  mx-6 mt-8">
      <ServiceGroup />
      <PopularDestination />

    </div>
    <div class="sticky bottom-0 w-full">
      <FooterNavbar />

    </div>

  </main>
</template>
