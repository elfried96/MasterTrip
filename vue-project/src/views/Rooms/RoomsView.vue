<script setup lang="ts">
import AppHeader from '@/components/Navbars/AppHeader.vue';
import RoomList from '@/components/Rooms/RoomList.vue';


</script>

<template>
  <main class="relative bg-secondary h-full min-h-screen w-full">
    <AppHeader title="Select Room " :add-right-button=true />
    <div class="flex flex-col gap-8  mx-4 mt-5">
      <RoomList />
    </div>

  </main>
</template>
