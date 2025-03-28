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
        <h1>Welcome to Vibra Travel</h1>
      </div>
    </div>

    <!-- Home/Intro Section -->
    <section id="home" class="intro-section">
      <div class="intro-content">
        <h2>Your Ultimate Sports Trip Partner in Spain!</h2>
        <div class="intro-text">
          <p>
            At Vibra Travel we specialise in organizing tailor-made sports trips
            across Spain for all types of groups. Whether you're a sports team,
            a school or college group, or simply a group of enthusiasts looking
            for an unforgettable experience, we have the perfect trip for you.
          </p>

          <p>
            Our expertly crafted itineraries include everything you need for a
            seamless and exciting trip— top-quality accommodation, hassle-free
            transfers, high-quality sports facilities, and real local
            experiences. With our deep local knowledge, we ensure your group
            gets the best training, competition, and cultural immersion,
            including language classes, guided tours, and insider tips to make
            the most of your stay.
          </p>

          <p>
            From elite teams to grassroots clubs, school groups to corporate
            sports getaways, we take care of every detail so you can focus on
            enjoying the experience. Get ready for a sports trip like no
            other—where passion meets adventure in the heart of Spain!
          </p>
        </div>
        <div class="cta-button">
          <a href="#" @click.prevent="scrollToContact">
            Contact us today to start planning your perfect sports trip!
            </a
          >
        </div>
      </div>
    </section>

    <PadelPackage />

    <Locations />

    <!-- About Us Section -->
    <section id="about" class="about-section">
      <div class="section-header">
        <h2>Who We Are</h2>
      </div>
      <div class="about-content">
        <p>
          At Vibra Travel, we're passionate about connecting sports enthusiasts
          with authentic Spanish experiences. Our team of local experts creates
          personalized sports trips that blend high-quality training with
          cultural immersion, ensuring every group enjoys the best Spain has to
          offer both on and off the field.
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
import PadelPackage from "../PadelPackage.vue";
import Locations from "../Locations.vue";
import Contact from "../Contact.vue";

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
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
  color: var(--color-dark-grey);
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
  color: var(--color-dark-grey);
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
}
</style>
