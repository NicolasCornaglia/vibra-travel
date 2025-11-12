<template>
  <section>
    <div
      class="ready-container"
      :class="{ 'orange-variant': variant === 'orange' }"
    >
      <div class="tr-decoration">
        <component :is="BallBLIcon" />
      </div>
      <div class="ready-content">
        <div class="ready-items cooper-font">
          <div class="title">
            Ready to build a<br />
            <span :class="{ orange: variant !== 'orange' }">stronger</span>
            Team?
          </div>
          <p class="description fgrotesk-font">
            Our Padel team building trips are designed to deliver
            results and create unforgettable memories. While we offer fantastic
            packages, we're also experts at tailoring every detail to your
            team's specific goals, budget, and preferences.
          </p>
          <a href="/contact" class="nav-link fgrotesk-font">
            <p class="button-text">Plan your trip</p>
          </a>
        </div>
      </div>
      <div class="bl-decoration">
        <component :is="BallTRIcon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{ variant?: string }>();

import IconBallTR from "./icons/IconBallTR.vue";
import IconBallTRDark from "./icons/IconBallTRDark.vue";
import IconBallBL from "./icons/IconBallBL.vue";
import IconBallBLDark from "./icons/IconBallBLDark.vue";

const BallTRIcon = computed(() =>
  props.variant === "orange" ? IconBallTRDark : IconBallTR
);
const BallBLIcon = computed(() =>
  props.variant === "orange" ? IconBallBLDark : IconBallBL
);
</script>

<style scoped>
.ready-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
}

.ready-container.orange-variant {
  background-color: var(--color-orange);
}

.ready-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  min-width: 200px;
  width: 90vw;
  padding: clamp(60px, 8vw, 120px) 0px;
}

/* Icons are rotated here I assume, but will keep it for now and modify their order in the template, should be fixed in the future */
.tr-decoration {
  position: absolute; 
  left: 0;
  bottom: 0;
  width: clamp(60px, 8vw, 120px);
  height: clamp(60px, 8vw, 120px);
  color: aqua;
}

.bl-decoration {
  position: absolute; 
  right: 0;
  width: clamp(60px, 8vw, 120px);
  height: clamp(60px, 8vw, 120px);
}

.tr-decoration :deep(svg),
.bl-decoration :deep(svg) {
  width: 100%;
  height: 100%;
}

.ready-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 25px;
}

.title {
  font-size: 80px;
  font-weight: 400;
  line-height: 115%;
  text-align: center;
  margin: 0;
  color: var(--color-purple);
}

.description {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  text-align: center;
  max-width: 532px;
  min-height: 72px;
  color: rgba(0, 0, 0, 0.41);
}

.button-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 113%;
  color: var(--color-white);
  padding: 10px 20px;
  border: 1px-solid var(--color-orange);
  background-color: var(--color-orange);
  border-radius: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid var(--color-orange);
  transition: all 0.3s ease-in-out;
}

.button-text:hover {
  background-color: var(--color-cream);
  color: var(--color-orange);
}

/* Orange variant overrides */
.ready-container.orange-variant .title,
.ready-container.orange-variant .description,
.ready-container.orange-variant .cooper-font,
.ready-container.orange-variant .fgrotesk-font {
  color: var(--color-white) !important;
}

.ready-container.orange-variant .button-text {
  background-color: var(--color-white);
  color: var(--color-orange);
  border: 1px solid var(--color-orange);
}

.ready-container.orange-variant .button-text:hover {
  background-color: var(--color-orange);
  color: var(--color-white);
  border: 1px solid var(--color-white);
}

@media (max-width: 768px) {
  .title {
    font-size: 38px;
  }

  .description {
    width: 90%;
  }

  .ready-form {
    padding-top: 30px;
  }
}
</style>
