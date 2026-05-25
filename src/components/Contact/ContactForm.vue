<script setup lang="ts">

</script>

<template>
<div class="contact-form">
  <form action="">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Send</button>
    </div>
  </form>
</div>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>