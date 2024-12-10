<script setup lang="ts">
import HotelList from '@/components/Hotels/HotelList.vue';
import AppHeader from '@/components/Navbars/AppHeader.vue';
import FooterNavbar from '@/components/Navbars/FooterNavbar.vue';



</script>

<template>
  <main class="relative bg-secondary h-full min-h-screen w-full">
    <AppHeader title="Hotels" :add-right-button=true />
    <div class="flex flex-col gap-8  mx-4 mt-5">
      <HotelList />
    </div>
    <div class="sticky bottom-0 w-full">
      <FooterNavbar />
    </div>

  </main>
</template>
