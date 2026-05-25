<template>
  <div class="article-container">
    <div class="breadcrumbs">

    </div>

    <Spacer/>
    <div class="article-content">
      <div class="related-articles">
        <h1 class="related-heading">Related Articles</h1>
        <ul v-for="related in relatedArticles">
          <li class="related-item"><a href="#">{{ related.title }}</a></li>
        </ul>
      </div>

      <div class="article-body">
        <div class="article-hero">
          <h1>{{ article.title }}</h1>
        </div>
        <span>{{ article.readTime }} | Last Updated {{ article.lastUpdated }}</span>
        <p>{{ article.excerpt }}</p>
        <div v-for="section in article.sections" :key="section.id" class="section">
          <h2>{{ section.heading }}</h2>
          <p>
            {{ section.content }}
          </p>
        </div>
      </div>

      <div class="feedback">
        <h1 class="feedback-heading">
          Was this article helpful?
        </h1>
        <div class="feedback-actions">
          <button class="feedback-button">
            <ThumbsUp :size="16"/>
            Yes
          </button>
          <button class="feedback-button">
            <ThumbsDown :size="16" @click="feedbackClicked"/>
            No
          </button>
        </div>

      </div>
    </div>

    <Spacer/>

    <div class="comments-section">
      <h1>Comments</h1>
      <div class="comment">
        <div class="comment-header">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '../data/article.json';
import {onMounted, ref} from "vue";
import Spacer from "../components/ui/Spacer.vue";
import {ThumbsDown, ThumbsUp} from "@lucide/vue";
import type {Article, Breadcrumb, RelatedArticle} from "../types.ts";

const article = ref<Article>({});
const relatedArticles = ref<RelatedArticle[]>([]);
const breadcrumbs = ref<Breadcrumb[]>([]);

onMounted(() => {
  article.value = data.article;
  relatedArticles.value = data.article.relatedArticles;
  breadcrumbs.value = data.article.breadcrumbs;
})

function feedbackClicked() {
  // set active class for feedback button
}
</script>

<style scoped>
.related-articles {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.related-item {
  padding: 1rem 0;
  max-width: max-content;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: var(--color-primary);
  }
}


.feedback {
  width: 100%;
  text-align: center;

  .feedback-heading {
    font-size: 19px;
    font-weight: 400;
    padding-bottom: 1rem;
  }
}

.feedback-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.feedback-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 700;
  cursor: pointer;
  font-size: 0.8rem;
  opacity: 0.8;
}

.feedback-button:hover {
  background-color: var(--color-primary);
  color: var(--color-text-main);
  opacity: 1;
}

.article-container {
  padding: 6rem 3rem;
}

.article-content {
  display: grid;
  grid-template-columns: 1fr 650px 1fr;
  gap: 2rem;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    font-style: italic;
    padding: 1rem 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem 0;

    &:first-child {
      //padding-top: 0;
    }
  }
}

.article-body {
  p:first-child {
    padding-top: 1rem;
  }
}

.comments-section {
  max-width: 650px;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-border);
}
</style>