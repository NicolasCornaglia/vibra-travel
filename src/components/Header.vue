<template>
  <div class="header-container">
      <!-- Logo Column -->
      <div class="logo">
          test logo
      </div>

      <!-- Navigation Column -->
      <nav class="nav-menu" :class="{ 'nav-active': isMenuOpen }">
          <div class="nav-links">
              <RouterLink to="/" class="nav-link" @click="closeMenu">HOME</RouterLink>
              <RouterLink to="/about" class="nav-link" @click="closeMenu">PADEL</RouterLink>
              <RouterLink to="/sports" class="nav-link" @click="closeMenu">SPORTS</RouterLink>
              <RouterLink to="/contact" class="nav-link" @click="closeMenu">CONTACT</RouterLink>
              <RouterLink to="/terms" class="nav-link" @click="closeMenu">T&Cs</RouterLink>
              <RouterLink to="/faq" class="nav-link" @click="closeMenu">FAQ's</RouterLink>
          </div>
          
          <!-- Moved language selector inside nav-menu -->
          <div class="lang-selector">
              <select v-model="selectedLanguage" @change="changeLanguage">
                  <option value="en">EN</option>
                  <option value="es">ES</option>
              </select>
          </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
      </button>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)
const selectedLanguage = ref('en')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const changeLanguage = () => {
  // Implement language change logic here
  console.log('Language changed to:', selectedLanguage.value)
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  position: relative;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #f4acb7;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.lang-selector select {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 1rem;
  color: #333;
}

.lang-selector select:focus {
  outline: none;
}

.mobile-menu-btn {
  background-color: #ffffff;
  border: none;
  position: relative;
  width: 30px;
  height: 25px;
}

.mobile-menu-btn span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
}

.mobile-menu-btn span:nth-child(1) {
  top: 0;
}

.mobile-menu-btn span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.mobile-menu-btn span:nth-child(3) {
  bottom: 0;
}

.mobile-menu-btn.is-active span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.mobile-menu-btn.is-active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.is-active span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 1rem;
    gap: 1rem;
    z-index: 1000;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }

  .nav-menu.nav-active {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .lang-selector {
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
  }
}
</style>