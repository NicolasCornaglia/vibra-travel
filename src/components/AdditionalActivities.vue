<template>
  <!-- Padel activities Highlight -->
  <section :style="{ backgroundColor: props.backgroundColor }">
    <div id="activities" class="activities-section">
      <div class="section-header">
        <h2>{{ t('additionalActivities.additionalActivities') }}</h2>
      </div>
      <div class="activities-container">
        <div class="activities-card">
          <div class="activities-header">
            <h3>{{ t('additionalActivities.culturalActivities') }}</h3>
          </div>
          <div class="activities-features">
            <ul>
              <li>{{ t('additionalActivities.cookingClass') }}</li>
              <li>{{ t('additionalActivities.bikeTour') }}</li>
              <li>{{ t('additionalActivities.kayakSup') }}</li>
              <li>{{ t('additionalActivities.flamencoShow') }}</li>
              <li>{{ t('additionalActivities.spanishClass') }}</li>
              <li>{{ t('additionalActivities.cityTour') }}</li>
              <li>{{ t('additionalActivities.stadiumTour') }}</li>
              <li>{{ t('additionalActivities.localFootball') }}</li>
              <li>{{ t('additionalActivities.hiking') }}</li>
            </ul>
          </div>
        </div>
        <div class="activities-card" v-if="props.showRelevantInfo">
          <div class="activities-header">
            <h3>{{ t('additionalActivities.relevantInfo') }}</h3>
          </div>
          <div class="activities-features">
            <ul>
              <li>{{ t('additionalActivities.availableDestinations') }}</li>
              <li>{{ t('additionalActivities.allLevels') }}</li>
              <li>{{ t('additionalActivities.englishSpanishCoaches') }}</li>
              <li>{{ t('additionalActivities.meetTrainer') }}</li>
              <li>{{ t('additionalActivities.warmUp') }}</li>
              <li>{{ t('additionalActivities.strategyFeedback') }}</li>
              <li>{{ t('additionalActivities.bringSportswear') }}</li>
              <li>{{ t('additionalActivities.changingRooms') }}</li>
              <li>{{ t('additionalActivities.waterFountains') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'white', // Default background color
  },
  showRelevantInfo: {
    type: Boolean,
    default: true, // Default to showing the relevant information card
  },
});
</script>

<style scoped>
/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4 {
  margin-bottom: 1rem;
  line-height: 1.2;
}

a {
  display: inline-block;
  color: var(--color-pink);
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease-in-out;
}

a:hover {
  background-color: var(--color-pink);
  color: var(--color-white);
}

section {
  background-color: var(--color-white);
  padding: 4rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  color: var(--color-black);
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: var(--color-pink);
  bottom: -10px;
  left: 25%;
}

/* activities Section */
.activities-section {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.activities-container {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Add this line to center the cards */
  gap: 20px; /* Add this line to add space between the cards */
}

.activities-card {
  width: 550px;
  margin: 10px auto;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.activities-header {
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: 1.5rem;
  text-align: center;
}

.activities-header h3 {
  margin: 0;
}

.activities-features {
  padding: 2rem;
}

.activities-features ul {
  list-style-position: inside;
}

.activities-features li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.activities-features li:before {
  position: absolute;
  left: 0;
  color: var(--color-pink);
}

@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  .activities-container {
    display: flex;
    flex-direction: column;
  }

  .activities-card {
    margin: 10px auto;
    width: 80vw;
  }
}
</style>
