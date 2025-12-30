<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)

let rafId = null

const moveCursor = (e) => {
  if (rafId) return
  
  rafId = requestAnimationFrame(() => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
    
    // Check hover state
    const target = e.target
    if (
      target.tagName.toLowerCase() === 'a' || 
      target.tagName.toLowerCase() === 'button' ||
      target.closest('a') ||
      target.closest('button') ||
      target.classList.contains('clickable')
    ) {
      isHovering.value = true
    } else {
      isHovering.value = false
    }
    
    rafId = null
  })
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)

  // Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
         // Optional: Remove class to replay animation when scrolling back up
         // If you find it too distracting, you can comment this out lines below
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  // Observe all elements with .scroll-reveal class
  // Use a longer delay to ensure Vue has fully rendered the v-for lists
  const startObserving = (retryCount = 0) => {
    const hiddenElements = document.querySelectorAll('.scroll-reveal');
    
    if (hiddenElements.length === 0 && retryCount < 3) {
      setTimeout(() => startObserving(retryCount + 1), 300);
      return;
    }
    
    hiddenElements.forEach((el) => observer.observe(el));
  };
  
  setTimeout(() => startObserving(), 400);
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<template>
  <div class="app-container">
    <div 
      class="custom-cursor" 
      :class="{ 'hovered': isHovering }"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
    ></div>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
/* Global resets or app specific overrides if any */
</style>
