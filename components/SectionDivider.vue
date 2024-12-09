<template>
  <div>
    <v-responsive
        content-class="d-flex align-center"
        :height="!mobile ? 10 : 120"
    >
        <v-divider />
    </v-responsive>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const mobile = ref(false);

</script>
