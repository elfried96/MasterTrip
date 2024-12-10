<script setup lang="ts">
import NavigationButton from '@/components/Buttons/NavigationButton.vue';
import AppHeader from '@/components/Navbars/AppHeader.vue';

const handleCLick = () => {
  console.log("send");
}

</script>

<template>
  <main class="relative bg-secondary h-full min-h-screen w-full">
    <AppHeader title="Payer en toute sécurité" :add-right-button=false />
    <div class="flex flex-col gap-y-8 items-center h-full justify-center px-4 mt-5 w-full">
     <div class="rounded-lg flex justify-between bg-white p-4 w-full text-center text-3xl font-bold"> <p>Celtis Money</p> <span class="rounded-full bg-primary h-8 w-8"></span></div>
     <div></div>
      <NavigationButton  title="Payez maintenant" :handle-click="handleCLick" />
    </div>

  </main>
</template>
