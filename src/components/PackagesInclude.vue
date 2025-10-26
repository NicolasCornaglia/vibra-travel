<template>
  <div class="pi-container">
    <div class="pi-content">
      <div class="pi-top">
        <div class="pi-top-title">
          <p class="cooper-font" v-html="title">
          </p>
        </div>
        <div class="pi-top-subtitle">
          <p>{{ subtitle }}</p>
        </div>
      </div>
      <div class="pi-bottom">
        <div class="pi-card" v-for="card in cards" :key="card.title">
          <div class="pi-card-icon">
            <component :is="card.icon" />
          </div>
          <div class="pi-card-title">
            <p>{{card.title}}</p>
          </div>
          <div class="pi-card-desc">
             {{ card.desc }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Card {
  icon: Component;
  title: string;
  desc: string;
}

defineProps<{
  cards: Card[]
  title: string;
  subtitle: string;
}>()

</script>

<style scoped>
.pi-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.pi-content {
  margin: 50px auto;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.pi-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.pi-top-title {
  height: 150px;
  max-width: 800px;
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);
}

.pi-top-subtitle {
  height: 150px;
  display: flex;
  align-items: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  width: 25vw;
}

.pi-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;
}

.pi-card {
  width: 25vw;
  margin: 40px 0;
}

.pi-card-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 20px
}

.pi-card-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 113%;
  color: var(--color-purple);
  padding: 10px 0;
}

.pi-card-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  padding: 10px 0;
}

@media (max-width: 768px) {
  .pi-container {
    width: 100vw;
    margin-top: 0px;
  }

  .pi-content {
    width: 90vw;
    gap: 0;
  }

  .pi-top {
    flex-direction: column-reverse;
    align-items: center;
  }

  .pi-top-title {
    font-size: 40px;
    width: 100%;
    height: 100px;
    padding-top: 35px;
  }

  .pi-top-subtitle {
    height: auto;
    width: 100%;
    margin-top: 0px;
  }

  .pi-bottom {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pi-card {
    width: 90vw;
    margin-bottom: 20px;
  }
}
</style>
