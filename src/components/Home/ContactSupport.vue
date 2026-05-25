<script setup lang="ts">
import {Send} from '@lucide/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function contactSupport() {
 router.push('/contact');
}
</script>

<template>
  <div class="contact-support-container" id="contact">
    <div class="content">
      <h1 class="support-heading">Need something else?</h1>
      <h2>If you can't find what you are looking for reach out and one of our team will get back to you as soon as
        possible.</h2>
      <div class="contact-button-container">
        <button class="contact-button" @click="contactSupport">
          Contact Us
          <Send/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-support-container {
  background: var(--color-primary);
  padding: 2rem;
  height: 40vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;

  .content {
    padding: 4rem;
    width: 80vw;
    background: radial-gradient(ellipse, #7235b3 0%, #7437bf 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border-radius: 1rem;
    color: var(--color-text-main);
  }
}

.support-heading {
  font-size: 2rem;
}

.contact-button-container {
  display: flex;
  justify-content: center;
}

.contact-button {
  background: var(--color-primary);
  color: var(--color-text-main);
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>