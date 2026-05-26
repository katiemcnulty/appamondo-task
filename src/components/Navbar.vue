<script setup lang="ts">
import HeroLogo from "./Home/HeroLogo.vue";
import { Menu } from '@lucide/vue';

defineProps({
  primaryColour: Boolean,
})

const emit = defineEmits(['menu-opened'])
</script>

<template>
  <div class="navbar" :class="{'primary-color' : primaryColour}">
    <HeroLogo :color="primaryColour ? 'white' : '#5B2487FF'"/>
    <nav class="nav-links" aria-label="Main Navigation">
      <ul class="nav-list">
        <li><RouterLink to="/" class="nav-item">Home</RouterLink></li>
        <li><RouterLink to="/article" class="nav-item">Articles</RouterLink></li>
        <li><RouterLink to="/contact" class="nav-item">Contact</RouterLink></li>
      </ul>
      <button class="burger-icon" aria-label="Open mobile navigation" @click="emit('menu-opened')">
        <Menu />
      </button>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255 255 255 / 0.6);
  border-radius: 3rem;
  padding: 1rem 5rem;
  z-index: 10;
  backdrop-filter: blur(1rem);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }
}

.primary-color {
  background-color: rgb(91 36 135 / 0.6) !important;
  color: #fff;
  svg {
    color: #fff;
  }
}

.nav-list {
  display: flex;
  list-style: none;
}

.burger-icon {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }
  .burger-icon {
    display: flex;
  }
}

.nav-item {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid transparent;
}

.nav-item:hover {
  background: rgb(222 222 222 / 0.6);
  border-radius: 1rem;
  border: 1px solid rgb(204 204 204 / 0.6);
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 200ms ease-in;
}
</style>