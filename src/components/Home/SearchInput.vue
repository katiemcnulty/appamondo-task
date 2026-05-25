<script setup lang="ts">

defineProps({
  placeholder: String,
})

const popularSearches = [
  {
    title: "NC500",
    tooltip: "The North Coast 500",
    url: "/articles/nc500",
  },
  {
    title: "Edinburgh Castle",
    tooltip: "The Edinburgh Castle",
    url: "/articles/edinburgh-castle",
  },
  {
    title: "The Fringe",
    tooltip: "The Edinburgh Fringe Festival",
    url: "/articles/the-fringe",
  },
  {
    title: "Scottish Whiskey",
    tooltip: "Whiskeys of Scotland",
    url: "/articles/whiskey"
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
    <button class="search-button">Search</button>
  </div>

  <h2 id="popular-heading">Popular Searches</h2>
  <div class="popular-searches">
    <div  v-for="search in popularSearches">
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
  transition:
      box-shadow 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease,
      transform 0.2s ease;
}

.search-input:focus, .search-input:active, .search-input:hover {
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
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
  opacity: 0.8;
}

.search-button:hover {
  opacity: 1;
  box-shadow:
      0 0 0 4px rgba(255,255,255,0.08),
      0 10px 40px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in;
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
  font-weight: bold;
  backdrop-filter: blur(3rem);
}
.popular-search-item:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: white;
  transition: all 0.1s ease-in;
}

#popular-heading {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .search-container {
    width: 100%;
  }
  .popular-searches {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1.5rem;
  }
}
</style>