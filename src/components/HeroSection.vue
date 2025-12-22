<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <h2 class="greeting">Hello, I'm</h2>
      <h1 class="name">Creative Developer</h1>
      <p class="subtitle">Building digital experiences that matter.</p>
      <div class="cta-group">
        <a href="#projects" class="btn-primary">View Work</a>
        <a href="#contact" class="btn-secondary">Contact Me</a>
      </div>
    </div>
    <div class="hero-visual">
       <div class="glowing-orb"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 20px;
}

.hero-content {
  z-index: 2;
  text-align: center;
  max-width: 800px;
}

.greeting {
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0.2s;
}

.name {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, #a5a5a5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0.4s;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0.6s;
}

.cta-group {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0.8s;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-secondary {
  padding: 12px 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
}

.glowing-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  animation: pulse 4s infinite ease-in-out;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
}

@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }
}
</style>
