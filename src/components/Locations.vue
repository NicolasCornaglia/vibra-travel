<template>
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
            facilities, and a deep passion for athletics, it’s the perfect
            destination for sports enthusiasts. Whether playing, training, or
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
            Sevilla is a city celebrated for its rich sports culture, year-round
            sunshine, and lively atmosphere. Boasting top-tier training
            facilities and elite football clubs, it’s an ideal destination for
            sports groups. With its sun-drenched plazas, mouthwatering tapas,
            passionate flamenco, and endless charm, Andalusia truly embodies the
            spirit of Spain.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

/* Locations Section */
.locations-section {
  background-color: var(--color-light-grey);
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
  background: var(--color-white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
  transition: transform 0.3s ease-in-out;
}

.location-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.location-image {
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.barcelona-img {
  background-image: url("../assets/photos/bcn.webp");
}

.sevilla-img {
  background-image: url("../assets/photos/seville.webp");
}

.location-content {
  padding: 1.5rem;
}

.location-content h3 {
  color: var(--color-pink);
}

@media (max-width: 768px) {
  .location-card {
    min-width: 80%;
    margin: auto;
  }
}
</style>
