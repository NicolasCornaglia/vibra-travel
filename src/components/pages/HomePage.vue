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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
          <a href="#contact"
            >Contact us today to start planning your perfect sports trip!</a
          >
        </div>
      </div>
    </section>

    <PadelPackage />

    <!-- Locations Section -->
    <section id="locations" class="locations-section">
      <div class="section-header">
        <h2>Locations</h2>
      </div>

      <div class="location-cards">
        <div class="location-card">
          <div class="location-image barcelona-img"></div>
          <div class="location-content">
            <h3>Barcelona</h3>
            <p>
              Barcelona is a city where sport and culture come together in a
              spectacular setting. Home to legendary teams, world-class
              facilities, and a deep passion for athletics, it's the perfect
              destination for sports enthusiasts. From training at top venues to
              exploring iconic landmarks like the Sagrada Familia and Las
              Ramblas, Barcelona offers an unforgettable mix of competition,
              history, and Mediterranean charm. Whether playing, training, or
              simply soaking in the atmosphere, this city is a dream for any
              sports traveller.
            </p>
          </div>
        </div>

        <div class="location-card">
          <div class="location-image sevilla-img"></div>
          <div class="location-content">
            <h3>Sevilla</h3>
            <p>
              Sevilla, set along the Guadalquivir River, is a city known for its
              sports culture, sunny weather, and vibrant atmosphere. With
              excellent training facilities and top football teams, it's a great
              destination for sports groups. After training or competition,
              enjoy the city's historic sites like the Alcázar and Plaza de
              España, all under the warm Andalusian sun. Sevilla offers the
              perfect balance of sporting action and cultural exploration.
            </p>
          </div>
        </div>
      </div>
    </section>

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
    <section id="contact" class="contact-section">
      <div class="section-header">
        <h2>Contact Us</h2>
      </div>
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">Phone:</span>
            <span class="contact-value">+34 744484995</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <span class="contact-value">Info@vibratravel.com</span>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">Whatsapp</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="formData.name" required />
            </div>
            <div class="form-group">
              <label for="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                v-model="formData.surname"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="form-submit">
              <button type="submit" class="btn-contact">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PadelPackage from "../PadelPackage.vue";

// Reactive form data
const formData = ref({
  name: "",
  surname: "",
  email: "",
  message: "",
});

// Get current year for copyright
const currentYear = computed(() => new Date().getFullYear());

// Form submission handler
const submitForm = () => {
  console.log("Form submitted:", formData.value);
  // Here you would typically send the data to your backend
  // For now, just reset the form
  formData.value = {
    name: "",
    surname: "",
    email: "",
    message: "",
  };
  alert("Thank you for your message! We will get back to you soon.");
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
  color: #333;
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
  color: #333;
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: #f4acb7;
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
  color: white;
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
  background-color: #f9f9f9;
  padding: 2rem 2rem;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  color: #f4acb7;
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
  background-color: #f4acb7;
  color: white;
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

/* Locations Section */
.locations-section {
  background-color: #f9f9f9;
}

.location-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.location-card {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  transition: transform 0.3s ease-in-out;
}

.location-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.location-image {
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.barcelona-img {
  background-image: url("../../assets/photos/bcn.webp");
}

.sevilla-img {
  background-image: url("../../assets/photos/seville.webp");
}

.location-content {
  padding: 1.5rem;
}

.location-content h3 {
  color: #f4acb7;
}

/* About Section */
.about-section {
  background-color: #fff;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Contact Section */
.contact-section {
  background-color: #f9f9f9;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.contact-item {
  margin-bottom: 1rem;
}

.contact-label {
  margin-right: 0.5rem;
}

.social-links {
  margin-top: 2rem;
}

.social-link {
  display: inline-block;
  margin-right: 1rem;
  color: #f4acb7;
}

.contact-form {
  flex: 2;
  min-width: 300px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.btn-contact {
  font-weight: bold;
  display: inline-block;
  background-color: #f4acb7;
  color: white;
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

.btn-contact:hover {
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
}

/* Responsive Styles */
@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  .location-card {
    min-width: 100%;
  }

  .home-video-section {
    height: 200px;
  }

  .video-overlay h1 {
    font-size: 1.5rem;
  }
}
</style>
