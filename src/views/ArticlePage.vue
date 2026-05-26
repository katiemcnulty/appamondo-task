<template>
  <div class="article-container">

    <div class="article-hero">
      <div class="article-hero-overlay">
        <div class="article-hero-content">
          <Breadcrumbs :breadcrumbs="breadcrumbs"/>
          <h1>{{ article.title }}</h1>
          <span class="article-meta">{{ article.readTime }} | Last Updated {{ article.lastUpdated }}</span>
          <div class="tags">
            <span v-for="(tag, index) in tags" :key="index"  class="pill">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="article-layout">

      <div class="article-body">
        <p class="article-excerpt">{{ article.excerpt }}</p>
        <div v-for="section in article.sections" :key="section.id" class="section">
          <h2>{{ section.heading }}</h2>
          <p>{{ section.content }}</p>
        </div>

        <div class="feedback">
          <h3 class="feedback-heading">Was this article helpful?</h3>
          <div class="feedback-actions">
            <button class="feedback-button" :class="{ active: feedbackGiven === 'yes' }" @click="feedbackGiven = 'yes'">
              <ThumbsUp :size="16"/>
              Yes
            </button>
            <button class="feedback-button" :class="{ active: feedbackGiven === 'no' }" @click="feedbackGiven = 'no'">
              <ThumbsDown :size="16"/>
              No
            </button>
          </div>
          <p v-if="feedbackGiven" class="feedback-thanks">Thanks for your feedback!</p>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="related-articles">
          <h3 class="related-heading">Related Articles</h3>
          <ul>
            <li v-for="related in relatedArticles" :key="related.title" class="related-item">
              <a href="#">{{ related.title }}</a>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  </div>
</template>

<script setup lang="ts">
import data from '../data/article.json';
import {ref} from "vue";
import Breadcrumbs from "../components/Article/Breadcrumbs.vue";
import {ThumbsDown, ThumbsUp} from "@lucide/vue";
import type {Article, RelatedArticle, Breadcrumb} from "../types.ts";

const article = ref<Article>(data.article)
const relatedArticles = ref<RelatedArticle[]>(data.article.relatedArticles)
const breadcrumbs = ref<Breadcrumb[]>(data.article.breadcrumbs)
const feedbackGiven = ref<'yes' | 'no' | null>(null)
const tags = ref<string[]>(data.article.tags)

</script>

<style scoped>
.article-container {
  padding-top: 0;
}

/* Hero */
.article-hero {
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-image: url('https://km-photography-uploads.s3.eu-west-2.amazonaws.com/uploads/aNfAIeJ3znZ4E7kfJcYsmO1lTJDWGaVGVH4KMpVf.jpg');
}

.article-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(28, 4, 41, 0.85));
  display: flex;
  align-items: flex-end;
}

.article-hero-content {
  padding: 2.5rem 4rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.article-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.article-meta {
  font-size: 0.85rem;
  opacity: 0.8;
  font-style: italic;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.article-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 4rem;
}

.article-excerpt {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-heading);
  padding-bottom: 0.75rem;
}

.section p {
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.feedback {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feedback-heading {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-heading);
}

.feedback-actions {
  display: flex;
  gap: 1rem;
}

.feedback-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 700;
  cursor: pointer;
  font-size: 0.85rem;
  background-color: transparent;
  transition: all 0.2s ease;
}

.feedback-button:hover,
.feedback-button.active {
  background-color: var(--color-primary);
  color: #fff;
}

.feedback-thanks {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-style: italic;
}

.article-sidebar {
  padding-top: 1rem;
}

.related-articles {
  position: sticky;
  top: 6rem;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.5rem;
}

.related-heading {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.related-item {
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-border);
  list-style: none;
}

.related-item:last-child {
  border-bottom: none;
}

.related-item a {
  font-size: 0.9rem;
  color: var(--color-text-heading);
  text-decoration: none;
  line-height: 1.4;
}

.related-item a:hover {
  color: var(--color-primary);
}

/* Mobile */
@media (max-width: 768px) {
  .article-hero-content {
    padding: 1.5rem;
  }

  .article-hero-content h1 {
    font-size: 1.75rem;
  }

  .article-layout {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }

  .article-sidebar {
    order: -1;
  }
}
</style>