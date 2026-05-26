<script setup lang="ts">
import { Send } from '@lucide/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function contactSupport() {
  router.push('/contact');
}
</script>

<template>
  <div class="contact-support-container" id="contact">
    <div class="content">
      <div class="text">
        <h2 class="support-heading">Still need help?</h2>
        <p>Can't find what you're looking for? Our team is happy to help, reach out and we'll get back to you as soon as possible.</p>
      </div>
      <button class="contact-button" @click="contactSupport">
        Contact Us
        <Send :size="18" class="send-icon"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

.contact-support-container {
  background: var(--color-primary-dark);
  padding: 5rem 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: #fff;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.support-heading {
  font-size: 2rem;
  font-weight: 700;
}

.content p {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.8;
}

.contact-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2rem;
  border-radius: 2rem;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background: #fff;
  color: var(--color-primary);
}

.send-icon {
  transition: transform 0.5s ease;
}

.contact-button:hover .send-icon {
  transform: translate(8px, -8px);
}

@media (max-width: 768px) {
  .contact-support-container {
    padding: 3rem 1.5rem;
  }

  .support-heading {
    font-size: 1.5rem;
  }

  .contact-button {
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>