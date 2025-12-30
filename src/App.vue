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

const moveCursor = (e) => {
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
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
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
