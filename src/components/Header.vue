<template>
    <div class="header-container">
        <div class="logo">test logo</div>

        <nav>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>

        <div class="lang"><p>es</p></div>
    </div>
   
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}

.nav-link {
  margin-left: 1rem;
  color: #333;
  text-decoration: none;
}

.nav-link.router-link-active {
  font-weight: bold;
  color: #42b883;
}
</style>