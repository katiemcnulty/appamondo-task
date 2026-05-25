<script setup lang="ts">

import type {Topic, CardIcon} from './../../types.ts';

import {Map, Bus, Bed, Binoculars, Calendar, Accessibility, Mail, Briefcase} from '@lucide/vue';
import {computed} from "vue";
import {useRouter} from "vue-router";

defineProps<{
  topic: Topic;
}>()

const iconComponents = computed((): CardIcon[] => {
  return [
    {
      id: 'map',
      component: Map,
    },
    {
      id: 'bus',
      component: Bus,
    },
    {
      id: 'bed',
      component: Bed,
    },
    {
      id: 'binoculars',
      component: Binoculars,
    },
    {
      id: 'calendar',
      component: Calendar,
    },
    {
      id: 'accessibility',
      component: Accessibility,
    },
    {
      id: 'briefcase',
      component: Briefcase,
    },
    {
      id: 'mail',
      component: Mail,
    }
  ]
})
const router = useRouter();
function cardIcon(iconId: string): CardIcon {
  const icon = iconComponents.value.find(icon => icon.id === iconId);
  return icon?.component;
}

function topicClicked() {
  router.push('/article')
}

</script>

<template>
  <div class="card" @click="topicClicked">
    <div class="card-icon" >
      <Component  :is="cardIcon(topic.icon)" :stroke-width="2" class="icon" :size="30"/>
    </div>
    <div class="card-body">
      <p class="card-title">{{ topic.title }}</p>
      <p class="card-desc">{{ topic.description }}</p>
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

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: var(--color-primary);
  }
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

.card-desc {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

.card-footer {
  display: flex;
}

.pill {
  font-size: 12px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 999px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  color: #6b7280;
}

</style>