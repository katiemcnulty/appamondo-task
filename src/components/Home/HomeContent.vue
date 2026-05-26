<script setup lang="ts">

import { ref} from "vue";
import data from './../../data/categories.json'
import TopicCard from "./TopicCard.vue";
import type {Topic} from "../../types.ts";

const topics = ref<Topic[]>(data.categories)

</script>

<template>
    <div class="home-content" id="articles">
      <div class="topics-container">
        <div class="topic" v-for="topic in topics" :key="topic.id">
          <TopicCard :topic="topic"/>
        </div>
      </div>
    </div>
</template>

<style scoped>
.home-content {
  padding: 6rem 1rem;
  margin: 0 auto;
  background: var(--color-primary-light);
  border-radius: 1rem;
}

.topics-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 16px;
  padding: 0 5rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .topics-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .topics-container {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}
</style>