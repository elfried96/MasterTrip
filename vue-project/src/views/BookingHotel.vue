<script setup lang="ts">
import BookingForm from '@/components/Booking/Form/BookingForm.vue';
import AppHeader from '@/components/Navbars/AppHeader.vue';
import FooterNavbar from '@/components/Navbars/FooterNavbar.vue';



</script>

<template>
  <main class="relative bg-secondary h-full min-h-screen w-full">
    <AppHeader title="Hotel Booking" :add-right-button=false description="Choose Your Favorite hotel and enjoy the service"/>
    <div class="flex flex-col gap-8  mx-4 mt-5">
      <BookingForm />
    </div>
    <div class="sticky bottom-0 w-full">
      <FooterNavbar />

    </div>

  </main>
</template>
