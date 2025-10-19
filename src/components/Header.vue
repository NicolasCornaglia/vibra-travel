<template>
  <div
    class="header-container"
    :style="{
      backgroundColor: isMobileMenuOpen ? 'white' : 'var(--color-cream)',
    }"
    :class="{ 'header-shadow': hasShadow }"
  >
    <div class="header-content">
      <!-- Desktop Navigation -->
      <div class="desktop-nav">
        <div class="header-sides">
          <a href="/groups" class="nav-link">
            <span class="header-text">Groups</span>
          </a>
          <a href="/corporate" class="nav-link">
            <span class="header-text">Corporate</span>
          </a>
        </div>
        <div class="icon">
          <a href="/">
            <IconVibraTravel />
          </a>
        </div>
        <div>
          <div class="header-sides">
            <a href="/why-vibra" class="nav-link">
              <span class="header-text">Why Vibra</span>
            </a>
            <a href="/contact" class="nav-link">
              <p class="button-text">Plan your trip</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav">
        <div class="mobile-header">
          <div class="mobile-logo">
            <a href="/">
              <IconVibraTravel />
            </a>
          </div>
          <button
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ active: isMobileMenuOpen }"
          >
            <!-- CSS-based hamburger/cross icon -->
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
          <div class="mobile-menu-items">
            <a href="/groups" class="mobile-nav-link" @click="closeMobileMenu">
              <span class="mobile-nav-text">Groups</span>
            </a>
            <a href="/corporate" class="mobile-nav-link" @click="closeMobileMenu">
              <span class="mobile-nav-text">Corporate</span>
            </a>
            <a href="/why-vibra" class="mobile-nav-link" @click="closeMobileMenu">
              <span class="mobile-nav-text">Why Vibra</span>
            </a>
            <a
              href="/contact"
              class="mobile-nav-link"
            >
              <span class="mobile-button-text">Plan your trip</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconVibraTravel from "./icons/IconVibraTravel.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isMobileMenuOpen = ref(false);
const hasShadow = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};


const handleScroll = () => {
  hasShadow.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  height: 96px;
  background-color: var(--color-cream);
  position: relative;
  transition: background-color 0.3s ease-in-out;
}

.header-content {
  width: 85vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.desktop-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.mobile-nav {
  display: none;
  width: 100%;
}

.header-sides {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.header-text {
  line-height: 113%;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-purple);
  transition: all 0.3s ease-in-out;
}

.header-text:hover {
  color: var(--color-orange);
}

.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 38px;
  line-height: 113%;
  font-size: 18px;
  font-weight: 400;
  color: var(--color-purple);
  border-radius: 30px;
  border: 1px solid var(--color-purple);
  transition: all 0.3s ease-in-out;
}

.button-text:hover {
  background-color: var(--color-purple);
  color: var(--color-cream);
  border-radius: 30px;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .header-container {
    height: auto;
    height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .header-shadow {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    width: 90vw;
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
  }

  .mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    height: 70px;
  }

  .mobile-logo {
    flex-shrink: 0;
  }

  .mobile-logo svg,
  .mobile-logo img {
    max-height: 40px;
    width: auto;
  }

  /* Hamburger Menu Button */
  .mobile-menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    width: 30px;
    height: 24px;
    position: relative;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hamburger-line {
    width: 100%;
    height: 2px;
    background-color: var(--color-orange);
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  .hamburger-line:nth-child(3) {
    width: 50%;
    margin-left: auto;
  }

  /* Hamburger to Cross Animation */
  .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
    opacity: 0;
    transform: scaleX(0);
  }

  .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
    transform: translateY(0px) rotate(-45deg);
  }

  /* Mobile Menu */
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
    z-index: 1000;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  .mobile-menu.open {
    max-height: 300px;
    opacity: 1;
  }

  .mobile-menu-items {
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: right;
  }

  .mobile-nav-link {
    text-decoration: none;
    display: block;
    padding: 10px 0;
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .mobile-menu.open .mobile-nav-link {
    transform: translateY(0);
    opacity: 1;
  }

  /* Stagger animation for menu items */
  .mobile-menu.open .mobile-nav-link:nth-child(1) {
    transition-delay: 0.1s;
  }
  .mobile-menu.open .mobile-nav-link:nth-child(2) {
    transition-delay: 0.15s;
  }
  .mobile-menu.open .mobile-nav-link:nth-child(3) {
    transition-delay: 0.2s;
  }
  .mobile-menu.open .mobile-nav-link:nth-child(4) {
    transition-delay: 0.25s;
  }

  .mobile-nav-text {
    font-size: 18px;
    color: var(--color-purple);
    transition: color 0.3s ease-in-out;
  }

  .mobile-nav-link:hover .mobile-nav-text {
    color: var(--color-orange);
  }

  .mobile-button-text {
    display: inline-block;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 400;
    color: var(--color-purple);
    border-radius: 30px;
    border: 1px solid var(--color-purple);
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  .mobile-nav-link:hover .mobile-button-text {
    background-color: var(--color-purple);
    color: var(--color-cream);
  }

  .mobile-nav-link:last-child {
    border-bottom: none;
    text-align: right;
  }
}
</style>
