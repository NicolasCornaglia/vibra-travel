<template>
  <div class="sports">
    <div class="sports-title">
      <img
        v-lazy="sportsImg"
        alt="Sports image"
      />
      <h1>{{ t('sportsPage.sports') }}</h1>
    </div>
    <div class="sports-content">
      <div class="terms-content-title">
        <h2 class="sports-content-title">
          <div>
            <span class="terms-white">{{ t('sportsPage.title1') }} </span>
            <span class="terms-pink">{{ t('sportsPage.title2') }} </span>?
          </div>
        </h2>
        <p>
          {{ t('sportsPage.sportsDescription1') }} 
          <span class="bold">{{ t('sportsPage.sportsDescription2') }}</span>
          {{ t('sportsPage.sportsDescription3') }}
          <span class="bold">{{ t('sportsPage.sportsDescription4') }}</span>
          {{ t('sportsPage.sportsDescription5') }}
          <span class="bold">{{ t('sportsPage.sportsDescription6') }}</span>
          {{ t('sportsPage.sportsDescription7') }}
          <span class="bold">{{ t('sportsPage.sportsDescription8') }}</span>
          {{ t('sportsPage.sportsDescription9') }}
          <span class="bold">{{ t('sportsPage.sportsDescription10') }}</span>
          {{ t('sportsPage.sportsDescription11') }}
        </p>
      </div>
    </div>

    <div>
      <AdditionalActivities :backgroundColor="'var(--color-light-grey)'" :showRelevantInfo="false"/>
    </div>
    <div class="sports-content-contact">
      <Contact :backgroundColor="'var(--color-white)'"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import sportsImg from '../../assets/photos/sports.jpg'
import AdditionalActivities from "../AdditionalActivities.vue";
import Contact from "../Contact.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.sports {
  position: relative;
  margin: 0 auto;
}

.sports-title {
  position: relative;
  width: 100%;
  max-height: 400px;
}

.sports-title img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.sports-title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.sports-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sports-content-title {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.sports-content-contact {
  width: 100vw;
  background-color: var(--color-white) !important;
  padding: 0px 0 0 0;
}
.terms-black {
  color: var(--color-black);
}

.terms-pink {
  color: var(--color-pink);
}

@media (max-width: 768px) {
  .sports-title {
    padding: 0px;
  }
}
</style>
