<template>
  <main>
    <HeroSection/>
    <HomeContent/>
    <ContactSupport/>
  </main>
  <Footer/>
</template>

<script setup lang="ts">
import HeroSection from '../components/Home/HeroSection.vue'
import HomeContent from "../components/Home/HomeContent.vue";
import Footer from "../components/Home/Footer.vue";
import ContactSupport from "../components/Home/ContactSupport.vue";
</script>

