<template>
  <section>
    <div class="ready-container">
      <div class="tr-decoration">
        <IconBallBL />
      </div>
      <div class="ready-content">
        <div class="ready-items cooper-font">
          <div class="title">
            Ready for an <span class="orange">unforgettable</span><br />
            Padel Adventure?
          </div>
          <p class="description fgrotesk-font">
            At Vibra Travel, we're passionate about creating Padel holidays that
            go beyond the ordinary. We combine our love for the game with deep
            local knowledge of Spain to deliver experiences you'll talk about
            for years.
          </p>
          <a href="/contact" class="nav-link fgrotesk-font">
            <p class="button-text">Get free consultation</p>
          </a>
        </div>
      </div>
      <div class="bl-decoration">
        <IconBallTR />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconBallTR from "./icons/IconBallTR.vue";
import IconBallBL from "./icons/IconBallBL.vue";
</script>

<style scoped>
.ready-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
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
  align-self: flex-end;
  width: clamp(60px, 8vw, 120px);
  height: clamp(60px, 8vw, 120px);
  color: aqua;
}

.bl-decoration {
  align-self: flex-start;
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
