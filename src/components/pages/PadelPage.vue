<template>
  <div class="padel">
    <div class="padel-title">
      <img src="../../assets/photos/padel.jpg" alt="Terms & Conditions image" />
      <h1>Padel</h1>
    </div>
    <div class="padel-content">
      <div class="terms-content-title">
        <h2 class="padel-content-title">
          <div>
            <span class="terms-pink">PLAY </span>
            <span class="terms-black">YOUR GAME!</span>
          </div>
        </h2>
        <p class="padel-description">
          Immerse yourself in the world of padel with our expertly curated
          trips, designed for players of all levels. Train on top-tier courts,
          refine your skills with professional coaching, and compete in friendly
          tournaments against local players. From perfecting your bandeja to
          mastering the vibora, every moment on the court is an opportunity to
          grow and enjoy the sport you love. Off the court, relax with your
          team, explore stunning destinations, and soak in the vibrant padel
          culture that Spain is famous for. Whether you're here to improve your
          game or simply have fun, our padel trips promise an unforgettable
          experience. Serve up your next adventure with Vibra Travel!
        </p>
      </div>
    </div>
    <div class="padel-content-activities">
      <AdditionalActivities />
    </div>
    <div>
      <PadelPackage />
    </div>
  </div>
</template>

<script setup lang="ts">
import PadelPackage from "../PadelPackage.vue";
import AdditionalActivities from "../AdditionalActivities.vue";
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
