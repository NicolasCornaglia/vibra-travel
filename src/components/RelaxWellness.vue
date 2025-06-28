<template>
  <section class="relax-section">
    <h2 class="section-title">Relax & Wellness</h2>

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
import yoga from "../assets/photos/yoga.jpg";
import pilates from "../assets/photos/pilates.jpg";
import massage from "../assets/photos/massage.jpg";

const experiences = ref([
  {
    id: 1,
    title: "Sunrise or Sunset Yoga",
    description:
      "Outdoor yoga sessions in serene settings – ideal for stretching out and resetting your body post-padel.",
    image: yoga,
    doubleWidth: false,
  },
  {
    id: 2,
    title: "Sunrise or Sunset Pilates",
    description:
      "Guided pilates in the open air to strengthen, stretch, and reconnect with your breath.",
    image: pilates,
    doubleWidth: false,
  },
  {
    id: 3,
    title: "Spa & Wellness Session",
    description:
      "Unwind after your matches with a massage, spa treatment, or beauty service tailored to your needs.",
    image: massage,
    doubleWidth: true,
  },
]);
</script>

<style scoped>
.relax-section {
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
