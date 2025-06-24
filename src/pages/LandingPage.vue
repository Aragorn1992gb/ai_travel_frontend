<!-- <template>
  <div class="landing-page">
    <header class="header">
      <img src="../public/logo.svg" alt="AITravel Logo" class="logo" />
      <nav>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <button class="login-btn">Login</button>
      </nav>
    </header>
    <section class="hero">
      <div class="hero-content">
        <h1>Plan Your Next Adventure with AI</h1>
        <p>Let AITravel create your perfect itinerary in seconds.</p>
        <button class="cta-btn">Get Started</button>
      </div>
      <img src="../public/map.png" alt="Travel illustration" class="hero-img" />
    </section>
  </div>
</template> -->

<!-- <script setup lang="ts">
// No script logic for now
</script> -->

<!-- <style scoped>
.landing-page {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background: #f8fafc;

  width: 100vw;
  /* overflow-x: hidden; */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background: transparent;

  width: 100vw;
}
.logo {
  height: 40px;
}
nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}
nav a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}
.login-btn {
  background: none;
  border: 1px solid #222;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
}
.hero-content {
  /* max-width: 500px; */
}
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}
.cta-btn {
  background: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #156fd1;
}
.hero-img {
  width: 420px;
  max-width: 40vw;
}
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  .hero-img {
    width: 80vw;
  }
}
</style> -->



<template>
  <div class="landing-page">
    <TopBar />
    <!-- <header class="header">
      <img src="../public/logo.svg" alt="AITravel Logo" class="logo" />
      <button class="hamburger" @click="showMenu = !showMenu" aria-label="Menu">
        <span :class="{ open: showMenu }"></span>
        <span :class="{ open: showMenu }"></span>
        <span :class="{ open: showMenu }"></span>
      </button>
      <nav :class="{ open: showMenu }">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <button class="login-btn">Login</button>
      </nav>
    </header> -->
    <section class="hero">
      <div class="hero-content">
        <h1>Plan Your Next Adventure with AI</h1>
        <p>Let AITravel create your perfect itinerary in seconds.</p>
        <!-- <button class="cta-btn">Get Started</button> -->
         <router-link to="/dashboard" class="cta-btn">Get Started</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TopBar from '../components/TopBar.vue'

const showMenu = ref(false)
const router = useRouter()
function goToDashboard() {
  router.push('/dashboard')
}
</script>

<style scoped>
.landing-page {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background: #f8fafc;
  width: 100vw;
  overflow-x: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background: transparent;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.logo {
  height: 40px;
}
nav {
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s;
}
nav a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}
.login-btn {
  background: none;
  border: 1px solid #222;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
}
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
}
.hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: #222;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
@media (max-width: 900px) {
  .header {
    padding: 1.5rem 1rem;
  }
  .hamburger {
    display: flex;
  }
  nav {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    border-radius: 8px;
    min-width: 180px;
    display: none;
  }
  nav.open {
    display: flex;
  }
}
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem 0 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
.hero-content {
  /* max-width: 500px; */
  width: 100%;
}
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
}
.cta-btn {
  background: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #156fd1;
}
.hero-img {
  width: 420px;
  max-width: 40vw;
}
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem 0 1rem;
    gap: 2rem;
  }
  .hero-img {
    width: 80vw;
  }
}
</style>