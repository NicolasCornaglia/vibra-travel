<template>
  <!-- Padel activities Highlight -->
  <section>
    <div id="activities" class="activities-section">
      <div class="section-header">
        <h2>Additional Activities</h2>
      </div>
      <div class="activities-container">
        <div class="activities-card">
          <div class="activities-header">
            <h3> Cultural Activities</h3>
          </div>
          <div class="activities-features">
            <ul>
              <li>Traditional Cooking Class</li>
              <li>Bike Tour and Bike Rental</li>
              <li>Kayak or SUP (Stand-Up Paddleboarding)</li>
              <li>Flamenco Show</li>
              <li>Spanish Language Class</li>
              <li>City Tour</li>
              <li>Stadium Tour</li>
              <li>Watch a Local Football Game</li>
            </ul>
          </div>
        </div>
        <div class="activities-card">
          <div class="activities-header">
            <h3>Relevant Information</h3>
          </div>
          <div class="activities-features">
            <ul>
              <li>Activities suitable for all levels</li>
              <li>English/Spanish-speaking coaches</li>
              <li>Meet your trainer directly at the court</li>
              <li>Warm-up at the beginning of each session</li>
              <li>
                Private package: Your group decides the direction of the lessons
              </li>
              <li>Strategy and final feedback at the end of each session</li>
              <li>
                Bring sportswear and a racket (we provide one if you don't have
                it)
              </li>
              <li>Changing rooms and showers available at the club</li>
              <li>Water fountains or vending machines on-site</li>
            </ul>
          </div>
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
  background-color: var(--color-light-grey);
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

/* activities Section */
.activities-section {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.activities-container {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Add this line to center the cards */
  gap: 20px; /* Add this line to add space between the cards */
}

.activities-card {
  width: 500px;
  margin: 10px auto;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.activities-header {
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: 1.5rem;
  text-align: center;
}

.activities-header h3 {
  margin: 0;
}

.activities-price {
  margin-top: 0.5rem;
}

.activities-features {
  padding: 2rem;
}

.activities-features ul {
  list-style-position: inside;
}

.activities-features li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.activities-features li:before {
  position: absolute;
  left: 0;
  color: var(--color-pink);
}

.activities-cta {
  text-align: center;
  padding: 0 2rem 2rem;
}

.btn-book {
  font-weight: bold;
  display: inline-block;
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

.btn-book:hover {
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
}

@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  .activities-container {
    display: flex;
    flex-direction: column;
  }

  .activities-card {
    margin: 10px auto;
    width: 80vw;
  }
}
</style>
