<script setup lang="ts">

import HeroLogo from "./Home/HeroLogo.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {Menu} from '@lucide/vue';

defineProps({
  primaryColour: Boolean,
})

const isMobile =  ref(false)
const navOpen = ref(false);

function checkScreenSize() {
  isMobile.value = window.innerWidth < 768
}

function mobileNavClicked() {
  navOpen.value = !navOpen.value
}


onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize);
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
})
</script>

<template>
<div class="navbar" :class="{'primary-color' : primaryColour}">
  <HeroLogo />
  <nav class="nav-links">

    <ul v-if="!isMobile" class="nav-list">
      <li><a class="nav-item" href="/">Home</a></li>
      <li><a class="nav-item" href="#articles">Articles</a></li>
      <li><a class="nav-item" href="#contact">Contact</a></li>
    </ul>
    <div v-else class="mobile-nav">
      <Menu @click="mobileNavClicked"/>
      <div class="mobile-nav-list" :class="{ 'open': navOpen }">
      </div>
    </div>
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

.nav-list {
  display: flex;
  list-style: none;

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

.mobile-nav-list {
  position: fixed;
  inset: 0;
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
</style>