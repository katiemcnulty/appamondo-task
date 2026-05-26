<template>
  <div class="app-container">
    <Navbar @menu-opened="openMenu" />
    <MobileNav :is-open="navOpen" @close="closeMenu" />
    <router-view />
    <BackToTopButton v-if="showBackToTop"/>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import MobileNav from "./components/MobileNav.vue";
import BackToTopButton from "./components/ui/BackToTopButton.vue";
import {onMounted, ref, onUnmounted} from "vue";

const navOpen = ref(false);
const showBackToTop = ref(false);

function openMenu() {
  navOpen.value = true;
}

function closeMenu() {
  navOpen.value = false;
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>