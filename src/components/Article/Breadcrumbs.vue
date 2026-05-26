<script setup lang="ts">
import type { Breadcrumb } from '../../types';

defineProps<{
  breadcrumbs: Breadcrumb[];
}>();
</script>

<template>
  <div class="breadcrumbs">
    <div v-for="(item, index) in breadcrumbs" :key="item.id" class="items">
      <a :href="item.url">{{ item.label }}</a>
      <span v-if="index < breadcrumbs.length - 1" class="separator"> ></span>
    </div>
  </div>
</template>

<style>
.breadcrumbs {
  display: flex;
  gap: 10px;
}
.items:hover a{
  text-decoration: underline;
}

@media (max-width: 768px) {
  .breadcrumbs {
    font-size: 0.75rem;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>