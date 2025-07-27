<template>
  <section class="sports-section">
    <h2 class="section-title">Sport & Adventure</h2>

    <div class="experiences-grid">
      <div
        class="experience-card"
        :class="{ 'double-width': experience.doubleWidth }"
        v-for="experience in experiences"
        :key="experience.id"
      >
        <div class="image-container">
          <img :src="experience.image" :alt="experience.title" />
        </div>
        <div class="card-content">
          <h3>{{ experience.title }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import hike from "../assets/photos/hike.jpg";
import golf from "../assets/photos/golf.jpg";
import padelBoard from "../assets/photos/padelBoard.jpg";
import running from "../assets/photos/running.jpg";
import kayak from "../assets/photos/kayak.jpg";

const experiences = ref([
  {
    id: 1,
    title: "Afternoon Hiking Adventure",
    description:
      "2–3 hour guided hike through scenic natural areas with forest trails, open views, and fresh air. After your hike, visit a nearby village and enjoy an optional evening BBQ dinner with local meats, vegetables, and wine.",
    image: hike,
    doubleWidth: true,
  },
  {
    id: 2,
    title: "Round of Golf",
    description:
      "Play at a picturesque golf course near the city. Includes transfers, equipment rental, and optional drinks or dinner at the clubhouse.",
    image: golf,
    doubleWidth: true,
  },
  {
    id: 3,
    title: "Stand-Up Paddleboarding (SUP)",
    description:
      "Glide over calm waters and enjoy a new perspective of the city. Available in both Barcelona and Sevilla.",
    image: padelBoard,
    doubleWidth: false,
  },
  {
    id: 4,
    title: "Sunrise or Sunset Guided Running Tour",
    description:
      "Discover the magic of Barcelona or Sevilla with passionate local running guides on a scenic city run, the perfect way to energize your morning or unwind at sunset. Typically 10km, but both distance and pace can be tailored to suit your group.",
    image: running,
    doubleWidth: true,
  },
  {
    id: 5,
    title: "Kayaking Adventure",
    description:
      "Paddle along Barcelona’s coastline or through Sevilla’s historic riverfront. Guided or independent options available. Stand up paddle-boarding (SUP) also available.",
    image: kayak,
    doubleWidth: false,
  },
]);
</script>

<style scoped>
.sports-section {
  margin: 50px auto;
}

.section-title {
  font-size: 24px;
  color: var(--color-purple);
  margin-bottom: 2rem;
  font-weight: 500;
  height: 67px;
  width: 318px;
  background-color: var(--color-cream);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.experiences-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.experience-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  flex: 1 1 300px;
  min-width: 300px;
}

.experience-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.experience-card:hover .image-container img {
  transform: scale(1.03);
}

.experience-card:hover .card-content h3,
.experience-card:hover .card-content p {
  padding: 0 10px;
}

.experience-card.double-width {
  flex: 2 1 620px;
}

.image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.image-container img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem 0;
}

.card-content h3 {
  color: var(--color-purple);
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.card-content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  transition: all 0.3s ease;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .culture-section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 24px;
    line-height: 113%;
    font-weight: 500;
    color: var(--color-purple);
    margin-bottom: 1.5rem;
  }

  .experiences-grid {
    flex-direction: column;
    gap: 1rem;
  }

  .experience-card {
    flex: none;
    min-width: auto;
  }

  .experience-card.double-width {
    flex: none;
  }

  .card-content {
    padding: 1rem;
  }

  .card-content h3 {
    font-size: 1rem;
  }

  .card-content p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .culture-section {
    padding: 1rem 0.25rem;
  }

  .section-title {
    font-size: 1.3rem;
    text-align: center;
  }

  .image-container {
    height: 180px;
  }
}
</style>
