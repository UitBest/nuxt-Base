<template>
  <v-app>
    <v-main
      class="pb-16"
      min-height="95svh"
    >
      <keep-alive>
        <NuxtPage />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script setup>
  import { provide, ref } from 'vue';
  import { useDisplay } from 'vuetify';

  const display = useDisplay();

  const mobile = computed(() => display.mdAndDown.value);
  provide('mobile', mobile);
</script>
