<script setup lang="ts">
import {ChevronUp} from "@lucide/vue";

function backToTopClicked() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
<div class="back-top-top" @click="backToTopClicked">
  <ChevronUp  />
</div>
</template>

<style scoped>

.back-top-top {
  position: fixed;
  bottom: 50px;
  right: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--color-secondary-dark);
  color: var(--color-text-main);
  z-index: 1000;
  cursor: pointer;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.4);
  opacity: 0.4;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
}
</style>