<template>
  <div class="header-container">
    <div class="header-content">
      <div class="icon">
        <IconVibraTravel />
      </div>
      <div>
        <a href="#" @click.prevent="scrollToContact" class="nav-link">
          <p class="button-text">Book a free consultation</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconVibraTravel from './icons/IconVibraTravel.vue';
import { onMounted } from 'vue';
import scrollToContact from '../composables/scrollToContact';

onMounted(() => {
  // Set scroll restoration to manual
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Scroll to top
  window.scrollTo(0, 0);
});
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  height: 96px;
  background-color: var(--color-cream);
}

.header-content {
  width: 85vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.button-text {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
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

@media (max-width: 768px) {
  .header-container {
    height: auto;
    padding: 10px 0;
  }

  .header-content {
    width: 90vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    width: auto;
    height: auto;
    max-width: 100px; /* Adjust based on your logo's aspect ratio */
  }

  .button-text {
    font-size: 12px;
    height: 32px;
  }
}
</style>
