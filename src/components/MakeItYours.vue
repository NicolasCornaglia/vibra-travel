<template>
  <div class="miy-container">
    <div class="miy-content">
      <div class="miy-top">
        <p class="top-title cooper-font">
            Make it <br/> uniquely <span class="orange">yours</span>
        </p>
        <p class="top-subtitle">
            Enhance your Padel holiday by adding a touch of adventure, wellness, or local culture. Mix and match based on your group's interests.
        </p>
      </div>

      <div>
        <CultureGastronomy />
        <SportsAdventure />
        <RelaxWellness />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CultureGastronomy from '../components/CultureGastronomy.vue'
import SportsAdventure from './SportsAdventure.vue';
import RelaxWellness from './RelaxWellness.vue';
</script>

<style scoped>
.miy-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.miy-content {
  margin: 50px 0;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}

.miy-top {
    max-width: 527px;
}

.top-title {
  height: 150px;
  max-width: 500px;
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);

}

.top-subtitle {
    margin-top: 20px;
  display: flex;
  align-items: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  max-width: 527px;
}

@media (max-width: 768px) {
  .miy-container {
    width: 100vw;
    margin-top: 0px;
  }

  .miy-content {
    width: 90vw;
    gap: 0;
  }

  .miy-top {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .top-title {
    font-size: 40px;
    width: 100%;
    height: 100px;
  }

  .top-subtitle {
    height: auto;
    width: 100%;
  }

}
</style>
