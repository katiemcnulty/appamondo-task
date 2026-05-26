<script setup lang="ts">
import {X} from '@lucide/vue';

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

</script>

<template>
  <div class="mobile-nav-list" :class="{ 'open': isOpen }">
    <button class="close-button" aria-label="Close Mobile Navigation" @click="emit('close')">
      <X :size="32"/>
    </button>
    <ul>
      <li><RouterLink to="/"  @click="emit('close')">Home</RouterLink></li>
      <li><RouterLink to="/article" @click="emit('close')">Articles</RouterLink></li>
      <li><RouterLink to="/contact" @click="emit('close')">Contact</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
.mobile-nav-list {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.mobile-nav-list.open {
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav-list ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-list ul a {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
}

.mobile-nav-list ul a:hover {
  text-decoration: underline;
}

.close-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-primary);
}
</style>