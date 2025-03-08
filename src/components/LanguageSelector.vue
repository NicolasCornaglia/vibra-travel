<template>
    <div class="dropdown" ref="dropdownRef">
      <div class="dropdown-toggle" @click="toggleDropdown">
        {{ selectedLabel }} ▼
      </div>
  
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="lang in appState.languages" :key="lang.value" @click="selectLanguage(lang)">
          {{ lang.label }}
        </li>
      </ul>
    </div>
  </template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { appState } from '../stores/appState';

const isOpen = ref(false);
const dropdownRef = ref(null);

// Get selected language label
const selectedLabel = computed(() => {
  return appState.languages.find(lang => lang.value === appState.selectedLanguage)?.label || 'Select Language';
});

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Select a language
const selectLanguage = (language) => {
  appState.selectedLanguage = language.value;
  isOpen.value = false;
  console.log(appState.selectedLanguage);
};

// Close dropdown when clicking outside
const onClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));
</script>


<style scoped>
.dropdown {
  position: relative;
  width: 100px;
  z-index: 1000;
}

.dropdown-toggle {
  background: #ffcad4;
  color: white;
  padding: 5px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.dropdown-menu {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 0;
  margin: 5px 0;
  z-index: 2;
}

.dropdown-menu li {
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
}

.dropdown-menu li:hover {
  background: #ffcad4;
  color: white;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .dropdown {
    width: 120px;
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    min-width: 120px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1003;
    overflow-y: auto;
  }
}
</style>
