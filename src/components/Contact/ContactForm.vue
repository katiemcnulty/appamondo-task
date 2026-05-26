<script setup lang="ts">
import { ref } from 'vue'
import { Send } from '@lucide/vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="contact-page">
    <div class="contact-form">
      <div v-if="submitted" class="success-message">
        <h2>Message Sent!</h2>
        <p>Thanks for reaching out. We'll get back to you shortly.</p>
      </div>

      <form v-else @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
              aria-required="true"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
              v-model="message"
              id="message"
              name="message"
              rows="6"
              placeholder="How can we help?"
              required
              aria-required="true"
          ></textarea>
        </div>

        <button type="submit" class="submit-button">
          Send Message
          <Send :size="16"/>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  max-width: 650px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.contact-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: 0.75rem;
}

.contact-header p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.contact-form {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-heading);
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 0.95rem;
  color: var(--color-text-heading);
  background: #fafafa;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgb(91 36 135 / 0.1);
  background: #fff;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.85rem;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.submit-button:hover {
  opacity: 0.9;
}

.success-message {
  text-align: center;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.success-message h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.success-message p {
  color: var(--color-text-secondary);
}
</style>