<script setup lang="ts">
</script>
<template>
  <footer>
    <div class="footer-content">
      <div class="information">
        <h1>Information</h1>
        <p>Visit Scotland</p>
      </div>

      <div class="contact">
        <h1>Contact</h1>
        <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Call</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </div>

      <div class="social">
        <h1>Social</h1>
        <ul>
          <li><a href="#">Follow Us</a></li>
          <li><a href="#">Like Us</a></li>
          <li><a href="#">Subscribe</a></li>
        </ul>
      </div>
    </div>
    <div class="my-info">
      <p>&copy; 2026 Scotland. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  align-items: start;
  background: var(--color-primary);
  color: #fff;
  padding: 3rem 6rem;
  width: 100%;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-text-main);
    text-transform: uppercase;
  }

}

.my-info {
  background: var(--color-primary-dark);
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: end;
  color: var(--color-text-secondary)
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
}
</style>