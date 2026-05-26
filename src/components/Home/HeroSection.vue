<script setup lang="ts">
import SearchInput from "./SearchInput.vue"

</script>

<template>
  <header>
    <div class="hero-section">
      <div class="hero-content">
        <h1>How can we help?</h1>
        <h2>Discover hidden gems, plan your perfect trip, or find exactly what you need. From scenic hikes and cosy cottages to events and cultural experiences.</h2>
        <SearchInput
            placeholder="Search articles..."
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  padding: 1rem 0;
  width: 100%;
  background-image:linear-gradient(
      rgba(255,0,0,0), rgb(28 4 41)
  ),  url('https://km-photography-uploads.s3.eu-west-2.amazonaws.com/uploads/ncTlxBbgeaZcCTQm7BGVxcZv4ekpblQEGqOXoUm9.jpg');
  height: 70vh;
  background-color: var(--color-primary-dark);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-content {
  padding: 5rem 3rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary-light);
  height: 100%;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 1.5rem;
  }
  .hero-content h2 {
    font-size: 0.8rem;
  }
}
</style>