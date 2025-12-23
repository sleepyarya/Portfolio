<script setup>
import { projects } from '../data/projects';
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="content-wrapper">
        <div class="image-wrapper glass-panel">
          <img src="../assets/profil.png" alt="Profile" />
          <div class="overlay"></div>
        </div>
        <div class="text-wrapper glass-panel">
          <h3>Who I Am</h3>
          <p>
            A passionate Web Developer dedicated to building responsive and user-friendly web applications. Possessing a strong foundation in HTML, CSS, and JavaScript, with a continuous drive to learn the latest technologies to deliver effective digital solutions.
          </p>
          <div class="stats">
            <div class="stat-item">
              <span class="number">3+</span>
              <span class="label">Years Exp</span>
            </div>
            <div class="stat-item">
              <span class="number">{{ projects.length }}</span>
              <span class="label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 100px 20px;
  position: relative;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

/* Image Wrapper - Animated Border */
.image-wrapper {
  position: relative;
  overflow: hidden;
  padding: 4px; /* Border thickness */
  border-radius: 20px;
  z-index: 1;
  border: none !important; /* Override glass-panel border */
  background: transparent !important;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: conic-gradient(
    transparent, 
    var(--accent-color), 
    transparent 30%
  );
  animation: rotateBorder 4s linear infinite;
  z-index: -2;
}

.image-wrapper::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: rgba(255, 255, 255, 0.05); /* Glass effect inner */
  border-radius: 16px; /* 20px - 4px */
  z-index: -1;
  backdrop-filter: blur(12px);
}

@keyframes rotateBorder {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.image-wrapper img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: bottom;
  border-radius: 16px; /* Match inner radius */
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.text-wrapper {
  padding: 40px;
}

.text-wrapper h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.text-wrapper p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
}

.stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
