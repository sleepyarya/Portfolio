<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <nav :class="['navbar', { 'scrolled': isScrolled }]">
    <div class="container">
      <div class="logo">Arya Ramadhan</div>
      <ul class="nav-links">
        <li><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
        <li><a href="#about" @click.prevent="scrollTo('about')">About</a></li>
        <li><a href="#projects" @click.prevent="scrollTo('projects')">Projects</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 15px 0;
  background: rgba(15, 12, 41, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
}

.nav-links a:hover {
  color: var(--accent-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>
