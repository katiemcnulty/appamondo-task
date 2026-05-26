<script setup lang="ts">
import { Search } from '@lucide/vue'

defineProps({
  placeholder: String,
})

const popularSearches = [
  {
    title: "NC500",
    tooltip: "The North Coast 500",
    url: "/article",
  },
  {
    title: "Edinburgh Castle",
    tooltip: "The Edinburgh Castle",
    url: "/article",
  },
  {
    title: "The Fringe",
    tooltip: "The Edinburgh Fringe Festival",
    url: "/article",
  },
  {
    title: "Scottish Whiskey",
    tooltip: "Whiskeys of Scotland",
    url: "/article"
  }
]
</script>

<template>
  <div class="search-container">
    <input
        id="search-query"
        class="search-input"
        type="text"
        :placeholder="placeholder"
    >
    <button class="search-button" aria-label="Search">
      <Search :size="18" class="search-icon"/>
      <span class="search-text">Search</span>
    </button>
  </div>

  <h2 class="popular-heading">Popular Searches</h2>
  <div class="popular-searches">
    <div v-for="search in popularSearches" :key="search.title">
      <div class="popular-search-item">
        <a :href="search.url"><span :title="search.tooltip">{{ search.title }}</span></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  width: 80vw;
  position: relative;
  display: inline-block;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 0.15rem solid var(--color-primary-light);
  border-radius: 3rem;
  background: white;
  color: var(--color-primary);
  font-weight: 600;
  transition: all 0.25s ease;
}

.search-input:focus,
.search-input:active,
.search-input:hover {
  outline: none;
  box-shadow:
      0 0 0 4px rgba(255,255,255,0.08),
      0 10px 40px rgba(0,0,0,0.55);
  backdrop-filter: blur(3rem);
  -webkit-backdrop-filter: blur(3rem);
}

.search-button {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 3rem;
  padding: 10px 14px;
  cursor: pointer;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.search-button:hover {
  opacity: 1;
  gap: 0.5rem;
  padding: 10px 20px;
  box-shadow:
      0 0 0 4px rgba(255,255,255,0.08),
      0 10px 40px rgba(0,0,0,0.1);
}

.search-text {
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.3s ease;
  font-size: 0.95rem;
  font-weight: 600;
}

.search-button:hover .search-text {
  max-width: 80px;
}

.popular-searches {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}

.popular-search-item {
  padding: 5px 10px;
  border: 0.15rem solid var(--color-primary-light);
  border-radius: 3rem;
  cursor: pointer;
  font-weight: 600;
  backdrop-filter: blur(3rem);
}

.popular-search-item:hover {
  color: var(--color-primary);
  background: white;
  transition: all 0.1s ease-in;
}

.popular-heading {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .search-container {
    width: 100%;
    padding: 0.4rem;
  }
  .popular-searches {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1.5rem;
  }
}
</style>