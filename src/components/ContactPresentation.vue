<template>
  <div class="presentation-container">
    <div class="presentation-content">
      <div class="presentation-image">
        <img
          :src="charlie"
          fetchpriority="high"
          alt="Contact Image"
        />
      </div>
      <div class="presentation-text">
        <p class="presentation-title cooper-font">
          Book your free online consultation
        </p>
        <p class="desc">
          Discover the ultimate padel getaway. Book a free online consultation
          and start creating your perfect padel holiday with Vibra Travel.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import charlie from "../assets/photos/charlie.png";
</script>

<style scoped>
.presentation-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
}

.presentation-content {
  width: 70vw;
  max-width: 1200px;
  margin: 60px 0px;
  display: flex;
  gap: 60px;
}

.presentation-image img {
  width: 20vw;
  max-width: 285px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.presentation-text {
  width: 693px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.presentation-title {
  font-size: 80px;
  font-weight: 400;
  color: var(--color-purple);
  text-align: start;
}

.desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
}

@media (max-width: 768px) {
  .presentation-content {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    text-align: start;
  }

  .presentation-title {
    font-size: 38px;
    max-width: 100%;
    margin-bottom: 0px;
    text-align: center;
  }

  .presentation-image img {
    width: 285px;
  }

  .presentation-text {
    width: 90vw;
  }
}
</style>
