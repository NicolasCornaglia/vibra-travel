<template>
  <div class="cya-container">
    <div class="cya-content">
      <div class="cya-top">
        <p class="top-title cooper-font">
          Choose your <span class="orange">activities</span>
        </p>
        <p class="top-subtitle">
          Every school group is different, so we design each trip around your goals and interests. Mix and match from
          our wide range of activities to create the perfect balance of sport, culture, and fun for your students.
        </p>
      </div>

      <div>
        <SchoolActivities />

        <p class="top-subtitle">You decide what to include — we’ll build the ideal itinerary for your group.</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import SchoolActivities from '../components/SchoolActivities.vue'
</script>

<style scoped>
.cya-container {
 margin: auto;
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.cya-content {
  margin: 50px 0;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
}

.top-title {
  max-width: 1500px;
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);
}

.top-subtitle {
  margin-top: 30px;
  display: flex;
  align-items: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  max-width: 550px;
}

@media (max-width: 768px) {
  .cya-container {
    width: 100vw;
    margin-top: 0px;
  }

  .cya-content {
    width: 90vw;
    gap: 0;
  }

  .cya-top {
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
