<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-wrapper glass-panel">
        <div class="social-links">
          <a href="https://www.tiktok.com/@jhordi293733" target="_blank" class="social-btn tiktok">
            <span class="icon">🎵</span>
            <span class="text">TikTok</span>
            <span class="username">@jhordi293733</span>
          </a>
          <a href="https://wa.me/6281359929443" target="_blank" class="social-btn whatsapp">
            <span class="icon">💬</span>
            <span class="text">WhatsApp</span>
            <span class="username">+62 813-5992-9443</span>
          </a>
          <a href="https://www.instagram.com/ramaadhan.a/" target="_blank" class="social-btn instagram">
            <span class="icon">📸</span>
            <span class="text">Instagram</span>
            <span class="username">@ramaadhan.a</span>
          </a>
        </div>
      </div>
      <footer class="footer">
        <p>&copy; 2025 ARYA RAMADHAN</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 100px 20px 50px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-wrapper {
  padding: 40px;
  margin-bottom: 50px;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.social-btn {
  flex: 1;
  min-width: 250px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-btn:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 5px;
}

.text {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}

.username {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.tiktok:hover .text {
  background: linear-gradient(45deg, #00f2ea, #ff0050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.whatsapp:hover .text {
  color: #25D366;
}

.instagram:hover .text {
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
