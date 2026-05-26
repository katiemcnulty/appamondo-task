<template>
  <div class="contact-hero">
    <div class="contact-hero-overlay">
      <h1>Get in Touch</h1>
      <p>Can't find what you're looking for? We're here to help.</p>
    </div>
  </div>
</template>

<style scoped>
.contact-hero {
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center 70%;
  background-repeat: no-repeat;
  position: relative;
  background-image: url('https://km-photography-uploads.s3.eu-west-2.amazonaws.com/uploads/ZAVoIgbBxorP5Afh1gxpXF2RMogAxnh81Y0l5Jgo.jpg');
}

.contact-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(28, 4, 41, 0.85));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 2.5rem;
  gap: 0.5rem;
  color: #fff;
  text-align: center;
}

.contact-hero-overlay h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.contact-hero-overlay p {
  font-size: 1rem;
  opacity: 0.85;
  font-style: italic;
}
</style>