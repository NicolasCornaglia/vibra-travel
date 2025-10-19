<template>
  <div class="presentation-container">
    <div class="presentation-content">
      <div class="left-content">
        <p class="title cooper-font">Build Your Ideal Padel Holiday in Spain</p>
        <p class="desc fgrotesk-font">
          Discover how Vibra Travel combine top-tier padel coaching with
          unforgettable local experiences to craft truly personalised group
          adventures in <span class="orange">Barcelona</span> and
          <span class="orange">Sevilla</span>
        </p>
        <div class="buttons">
          <a href="/contact" class="nav-link fgrotesk-font">
          <p class="button-text">Plan your trip</p>
        </a>
        <a href="#" @click.prevent="scrollToTimetable()" class="nav-link fgrotesk-font">
          <p class="button-text">Imagine your trip</p>
        </a>
        </div>
      </div>
      <div class="right-content">
        <img
          :src="PadelPresentation"
          fetchpriority="high"
          alt="Padel Presentation Image"
          class="img"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PadelPresentation from "../assets/photos/padelPresentation.png"
import { useRouter } from 'vue-router'

const router = useRouter()

function scrollToTimetable() {
  // If we're already on the groups page, just scroll
  if (router.currentRoute.value.name === 'Groups') {
    const el = document.getElementById('timetable');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // If we're on a different page, navigate with hash
    router.push({ name: 'Groups', hash: '#timetable' });
  }
}
</script>

<style scoped>
.presentation-container {
  display: flex;
  background-color: var(--color-cream);
  justify-content: center;
}

.presentation-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  margin: 125px 0;
  gap: 20px;
  position: relative; /* Add this for any potential absolute positioning inside */
}

.left-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  max-width: 50%; /* Ensure left content doesn't grow beyond half */
  flex: 1;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.right-content img {
  max-height: 500px;
  max-width: 800px;
  width: 40vw;
  min-width: 300px;
  position: absolute;
  right: -13vw; /* forced to be 13vw to the right of the screen due to zoomed out requirement */
  top: 0;
  object-fit: contain;
}

.title {
  max-width: 613px;
  font-size: 80px;
  font-weight: 400;
  line-height: 113%;
  color: var(--color-purple);
}

.desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  max-width: 395px;
}

.buttons {
  display: flex;
  gap: 30px
}


.button-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 113%;
  color: var(--color-white);
  padding: 10px 20px;
  border: 1px solid var(--color-orange);
  background-color: var(--color-orange);
  border-radius: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  width: 165px;
}

.button-text:hover {
  background-color: var(--color-cream);
  color: var(--color-orange);
}

@media (max-width: 1500px) {
  .title {
    font-size: 60px;
  }

  .left-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    gap: 20px;
  }
}

@media (max-width: 1024px) {
  .presentation-content {
    flex-direction: column;
    margin: 30px 0;
    align-items: center;
  }

  .title {
    font-size: 40px;
    width: 90vw;
    text-align: center;
    height: auto;
  }

  .desc {
    text-align: center;
    width: 90vw;
  }

  .right-content {
    justify-content: center;
    width: 100%;
  }

  .right-content img {
    display: none;
  }

  .left-content {
    width: 100%;
    height: auto;
    gap: 30px;
    align-items: center;
  }
}
</style>
