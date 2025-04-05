<template>
  <div class="header-container">
    <!-- Logo Column -->
    <div class="logo">
      <img v-lazy="logoUrl" alt="logo" class="logo-img" @click="redirectToHome">
    </div>

    <!-- Navigation Column -->
    <nav class="nav-menu" :class="{ 'nav-active': isMenuOpen }">
      <div class="nav-links">
        <RouterLink to="/" class="nav-link" @click="closeMenu">{{ t('header.home') }}</RouterLink>
        <RouterLink to="/padel" class="nav-link" @click="closeMenu">{{ t('header.padel') }}</RouterLink>
        <RouterLink to="/sports" class="nav-link" @click="closeMenu">{{ t('header.sports') }}</RouterLink>
        <a href="#" class="nav-link" @click.prevent="scrollToContact(); closeMenu()">{{ t('header.contact') }}</a>
        <RouterLink to="/terms" class="nav-link" @click="closeMenu">{{ t('header.terms') }}</RouterLink>
        <RouterLink to="/faq" class="nav-link" @click="closeMenu">{{ t('header.faq') }}</RouterLink>
      </div>

      <div class="lang-selector-mobile">
        <LanguageSelector />
      </div>
    </nav>

    <div class="lang-selector">
      <LanguageSelector />
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
import logoUrl from '../assets/photos/logo.jpg'
import { RouterLink, useRouter } from 'vue-router';
import { ref, nextTick, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSelector from './LanguageSelector.vue';
import { appState } from '../stores/appState';

const { t, locale } = useI18n();
const router = useRouter();
const isMenuOpen = ref(false);

// Watch for changes in the selected language and update the locale
watch(() => appState.selectedLanguage, (newLanguage) => {
  locale.value = newLanguage;
});

const scrollToContact = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }

  setTimeout(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};

const redirectToHome = () => {
  router.push('/');
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  position: fixed; /* Changed from relative to fixed */
  top: 0; /* Position at the very top */
  left: 0; /* Stretch from left */
  right: 0; /* Stretch to right */
  height: 110px;
  z-index: 100;
  max-width: 100%; /* Changed from 1500px to 100% */
  margin: 0 auto; /* Remove top/bottom margin */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: add shadow for better visibility */
}

.logo {
  height: 100px; /* Set container height */
  display: flex;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensures no overflow from scaling */
  border-radius: 50%;
}

.logo-img {
  cursor: pointer;
  display: block;
  height: 100%;
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
  color: var(--color-black);
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
  background-color: var(--color-pink);
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

.mobile-menu-btn {
  display: none;
  background-color: var(--color-white);
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
  background-color: var(--color-black);
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
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1001;
    width: 100%;
    padding: 10px 0;
  }

  .mobile-menu-btn {
    display: block;
    z-index: 1002;
  }

  .nav-menu {
    top: 110px;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    z-index: 1000;

    /* Initial state - start with 0 height */
    max-height: 0;
    overflow: visible;
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
    max-height: calc(100vh - 100px);
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
}
</style>