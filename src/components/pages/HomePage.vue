<template>
  <div class="home-container">
    <!-- Home Video Section -->
    <div class="home-video-section">
      <iframe
        class="home-video"
        width="2560"
        height="1440"
        src="https://www.youtube.com/embed/uJICKq3RaSg?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=uJICKq3RaSg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share: loop"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      ></iframe>
      <div class="video-overlay">
        <h1>{{ t("home.welcome") }}</h1>
      </div>
    </div>

    <!-- Home/Intro Section -->
    <section id="home" class="intro-section">
      <div class="intro-content">
        <h2>Your Ultimate Sports Experience in Spain!</h2>
        <div class="intro-text">
          <p>
            {{ t("home.introText1_1") }}
            <span class="bold">{{ t("home.introText1_2") }}</span>
            {{ t("home.introText1_3") }}
            <span class="bold">{{ t("home.introText1_4") }}</span>
            {{ t("home.introText1_5") }}

            <span class="bold">
              {{ t("home.introText2_1") }}
            </span>

            {{ t("home.introText3_1") }}
            <span class="bold">{{ t("home.introText3_2") }}</span>
          </p>
        </div>
        <div class="cta-button">
          <a href="#" @click.prevent="scrollToContact">
            {{ t("home.ctaButton") }}
          </a>
        </div>
      </div>
    </section>

    <PadelPackageHome />

    <Locations />

    <!-- About Us Section -->
    <section id="about" class="about-section">
      <div class="section-header">
        <h2>{{ t("home.aboutTitle") }}</h2>
      </div>
      <div class="about-content">
        <h4>Charles Dowsing</h4>
        <p>
          {{ t("home.aboutContent") }}
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <div>
      <Contact />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PadelPackageHome from "../PadelPackageHome.vue";
import Locations from "../Locations.vue";
import Contact from "../Contact.vue";

const { t } = useI18n();

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home-container {
  color: var(--color-black);
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

/* Home Video Section */
.home-video-section {
  position: relative;
  height: 700px; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  overflow: hidden;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.home-video {
  pointer-events: none; /* Disables interaction (no controls on hover) */
}

/* Overlay to block video interactions */
.video-overlay {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
  pointer-events: none;
}

.video-overlay h1 {
  color: var(--color-white);
  text-transform: uppercase;
}

/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -55%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

/* Intro Section */
.intro-section {
  background-color: var(--color-light-grey);
  padding: 2rem 2rem;
}

.intro-content {
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  color: var(--color-pink);
  margin-bottom: 2rem;
}

.intro-text {
  text-align: left;
  margin-bottom: 2rem;
}

.intro-text p {
  margin-bottom: 1.5rem;
}

.cta-button a {
  display: inline-block;
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

.cta-button a:hover {
  background-color: var(--color-white);
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
}

/* About Section */
.about-section {
  background-color: #fff;
}

.about-content {
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  .home-video-section {
    height: 200px;
  }

  .video-overlay h1 {
    font-size: 1.5rem;
  }

  .intro-content {
    max-width: 90%;
    margin: auto;
  }

  .about-section {
    max-width: 90%;
    margin: auto;
  }
}
</style>
