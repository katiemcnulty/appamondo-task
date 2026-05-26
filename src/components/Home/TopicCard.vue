<script setup lang="ts">

import type {Topic} from './../../types.ts';

import {useRouter} from "vue-router";

defineProps<{
  topic: Topic;
}>()


const router = useRouter();

function topicClicked() {
  router.push('/article')
}

</script>

<template>
  <div class="card" @click="topicClicked">
    <div class="card-body">
      <p class="card-title">{{ topic.title }}</p>
      <p class="card-description">{{ topic.description }}</p>
    </div>
    <div class="card-footer">
      <span class="pill">{{ topic.articleCount }} articles</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.15s, box-shadow 0.15s;
  cursor: pointer;
}

.card:hover {
  border-color: #d1d5db;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.card-icon i {
  font-size: 20px;
  color: #6b7280;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-title {
  font-size: 15px;
  font-weight: 500;
  color: #111827;
  margin: 0;
}

.card-description {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.card-footer {
  display: flex;
}

</style>