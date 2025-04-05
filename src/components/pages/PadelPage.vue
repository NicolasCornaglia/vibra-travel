<template>
  <div class="padel">
    <div class="padel-title">
      <img v-lazy="padelImage" alt="Padel image" />
      <h1>{{ t('padelPage.padel') }}</h1>
    </div>
    <div class="padel-content">
      <div class="terms-content-title">
        <h2 class="padel-content-title">
          <div>
            <span class="terms-pink">{{ t('padelPage.padelTitle1') }} </span>
            <span class="terms-black">{{ t('padelPage.padelTitle2') }}</span>
          </div>
        </h2>
        <p class="padel-description">
          {{ t('padelPage.padelDescription') }}
        </p>
      </div>
    </div>
    <div>
      <PadelPackage />
    </div>
    <div class="padel-content-activities">
      <AdditionalActivities />
    </div>
  </div>
</template>

<script setup lang="ts">
import padelImage from '../../assets/photos/padel.jpg';
import PadelPackage from "../PadelPackage.vue";
import AdditionalActivities from "../AdditionalActivities.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.padel {
  position: relative;
}

.padel-title {
  position: relative;
  width: 100%;
  max-height: 400px;
}

.padel-title img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.padel-title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.padel-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.padel-content-title {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.padel-description {
  padding-bottom: 20px;
  text-align: center;
}

.terms-black {
  color: var(--color-black);
}

.terms-pink {
  color: var(--color-pink);
}

.padel-content-activities {
  margin: auto;
}

@media (max-width: 768px) {
  .padel-title {
    padding: 0px;
  }
}
</style>
