<script setup>
import { projects } from '../data/projects';
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title scroll-reveal">Featured Projects</h2>
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id" 
          class="project-card glass-panel scroll-reveal"
          :class="'stagger-' + ((index % 3) + 1)"
        >
          <div class="card-image">
            <div v-if="project.images && project.images.length > 0" class="image-slider">
              <div class="slider-track">
                <img v-for="(img, index) in project.images" :key="index" :src="img" :alt="project.title" />
                <!-- Clone of the first image for seamless looping -->
                <img :src="project.images[0]" :alt="project.title" />
              </div>
            </div>
            <img v-else :src="project.image" :alt="project.title" />
          </div>
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="card-link">
              View Project {{ project.link.includes('github') ? '(GitHub)' : '(Live Demo)' }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 100px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-height: 700px; /* Approx height for 2 rows */
  overflow-y: auto;
  padding: 10px; /* Inner padding for hover effects */
  scroll-behavior: smooth;
}

.project-card {
  /* Removed fixed width constraints */
  padding: 20px; /* Reduced padding to accommodate image */
  border-radius: 20px; /* Ensuring rounded corners */
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px; /* Increased height */
  background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
  overflow: hidden; /* For image overflow */
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 20px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
  border-color: var(--accent-color);
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content h3 {
  font-size: 1.75rem; /* Larger title */
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.2;
}

.card-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1; /* Pushes the tags/link down */
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.tags span {
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent-color);
}

.card-link {
  color: var(--text-primary);
  font-weight: 600;
  margin-top: auto;
  display: inline-block;
  color: var(--accent-color);
}

/* Vertical Scrollbar Styling */
.projects-grid::-webkit-scrollbar {
  width: 8px; /* Width for vertical scrollbar */
}

.projects-grid::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.projects-grid::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 4px;
}

.projects-grid::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 212, 255, 0.8);
}

.card-link:hover {
  color: var(--accent-color);
}

/* Image Slider Styling */
.image-slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.slider-track {
  display: flex;
  height: 100%;
  animation: slideScroll 8s infinite cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform; /* Optimize performance */
}

.slider-track img {
  min-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@keyframes slideScroll {
  0%, 45% { transform: translateX(0); }
  50%, 95% { transform: translateX(-100%); }
  100% { transform: translateX(-200%); }
}
</style>
