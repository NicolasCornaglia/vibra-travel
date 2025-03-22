<template>
    <!-- Padel Package Highlight -->
    <section id="packages" class="package-section">
      <div class="section-header">
        <h2>Our Featured Package</h2>
      </div>
      <div class="package-card">
        <div class="package-header">
          <h3>Padel Package</h3>
          <div class="package-price">From €400</div>
        </div>
        <div class="package-features">
          <ul>
            <li>3 nights</li>
            <li>4* hotel</li>
            <li>2 Padel sessions (4 hours)</li>
            <li>1 Padel tournament with locals</li>
            <li>Airport transfer</li>
            <li>Free play</li>
            <li>Vibra Tee shirt</li>
          </ul>
        </div>
        <div class="package-cta">
          <a href="#" @click.prevent="scrollToContact" class="btn-book">
          Book Now
        </a>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';
const router = useRouter();

const scrollToContact = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }
  
  setTimeout(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
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
/* Package Section */
.package-section {
  background-color: #fff;
}

.package-card {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.package-header {
  background-color: #f4acb7;
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.package-header h3 {
  margin: 0;
}

.package-price {
  margin-top: 0.5rem;
}

.package-features {
  padding: 2rem;
}

.package-features ul {
  list-style-position: inside;
}

.package-features li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.package-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #f4acb7;
}

.package-cta {
  text-align: center;
  padding: 0 2rem 2rem;
}

.btn-book {
  font-weight: bold;
  display: inline-block;
  background-color: var(--color-pink);
  color: white;
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
}
</style>