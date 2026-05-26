<script setup lang="ts">
import { Mail, Phone, MapPin } from '@lucide/vue'
import HeroLogo from "./HeroLogo.vue";
</script>

<template>
  <footer>
    <div class="footer-content">

      <div class="footer-brand">
        <HeroLogo color="white"/>
      </div>

      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>
            <Mail :size="14"/>
            <a href="#">test@testing.com</a>
          </li>
          <li>
            <Phone :size="14"/>
            <a href="#">+44 1234 5678</a>
          </li>
          <li>
            <MapPin :size="14"/>
            <a href="#">Edinburgh, Scotland</a>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Visit Scotland. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--color-primary-dark);
  color: #fff;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-col h3 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.5;
  margin-bottom: 1.25rem;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-col ul li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.footer-col ul a {
  font-size: 0.9rem;
  color: #fff;
  opacity: 0.7;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-col ul a:hover {
  opacity: 1;
}

.footer-bottom {
  border-top: 1px solid rgb(255 255 255 / 0.1);
  padding: 1.25rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-bottom p {
  font-size: 0.8rem;
  opacity: 0.4;
}

@media (max-width: 1024px) {
  .footer-content {
    padding: 3rem 2rem;
    gap: 2rem;
  }
  .footer-bottom {
    padding: 1rem 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem;
    gap: 2rem;
  }

  .footer-bottom {
    padding: 1rem 1.5rem;
    text-align: center;
  }
}
</style>