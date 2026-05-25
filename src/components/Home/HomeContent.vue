<script setup lang="ts">

import {onMounted, ref} from "vue";
import data from './../../data/categories.json'
import TopicCard from "./TopicCard.vue";
import type {Topic} from "../../types.ts";

const topics = ref<Topic[]>([])

onMounted(() => {
  topics.value = data.categories;
})

</script>

<template>
  <main>
    <div class="home-content" id="articles">
      <div class="topics-container">
        <div class="topic" v-for="topic in topics">
          <TopicCard :topic="topic"/>
        </div>
      </div>
    </div>
  </main>
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

/* Mobile */
@media (max-width: 768px) {
  .topics-container {
    padding: 0 1rem;
    grid-template-columns: 1fr;
  }
}
</style>