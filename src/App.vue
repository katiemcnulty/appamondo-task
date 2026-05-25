<template>
  <div class="app-container">
    <Narbar />
    <router-view />
    <BackToTopButton />
  </div>
</template>

<script setup lang="ts">
import Narbar from "./components/Narbar.vue";
import BackToTopButton from "./components/ui/BackToTopButton.vue";
</script>