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

          <div class="lang-selector-mobile">
              <select v-model="selectedLanguage" @change="changeLanguage">
                  <option value="en">EN</option>
                  <option value="es">ES</option>
              </select>
          </div>
      </nav>

      <div class="lang-selector">
        <select v-model="selectedLanguage" @change="changeLanguage">
            <option class="lang-option" value="en">EN</option>
            <option class="lang-option" value="es">ES</option>
        </select>
      </div>

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

.lang-selector {
    display: block;
}

.lang-selector-mobile {
  display: none;
}

.lang-selector-mobile select,
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
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  /* Add a subtle dropdown arrow using background image */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3e%3cpath fill='none' d='M0 0h24v24H0z'/%3e%3cpath d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z' fill='rgba(51,51,51,0.7)'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 1rem;
  padding-right: 1.5rem;
  transition: all 0.3s ease;
}

/* Style for open dropdown */
.lang-selector-mobile select:focus,
.lang-selector select:focus {
  outline: none;
  background-color: rgba(244, 172, 183, 0.1); /* Light pink that matches your underline color */
  box-shadow: 0 2px 0 #f4acb7; /* Subtle underline effect using your existing pink color */
}

.mobile-menu-btn {
  display: none;
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
  transform: translateY(-12px) rotate(-45deg);
}

@media (max-width: 768px) {
  .lang-selector {
    display: none;
  }

  .lang-selector-mobile {
    display: block;
  }

  .mobile-menu-btn {
    display: block;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    z-index: 1000;
    
    /* Initial state - start with 0 height */
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    padding-top: 0;
    padding-bottom: 0;
    
    /* Gradient background from solid white to 70% opacity */
    background: linear-gradient(to bottom, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(255, 255, 255, 0.7) 100%);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    /* Combined transition */
    transition: max-height 0.4s ease-in-out, 
                opacity 0.3s ease-in-out,
                padding 0.4s ease-in-out;
  }

  .nav-menu.nav-active {
    /* Active state - expand to full height */
    display: flex;
    max-height: 500px; /* Set this to a value larger than your menu will ever be */
    opacity: 1;
    pointer-events: auto;
    padding: 1rem;
  }
  
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    /* Add a border separator */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
  }
  
  .lang-selector-mobile {
    display: block;
    padding-top: 0.5rem;
    width: 100%;
    text-align: center;
  }
}
</style>