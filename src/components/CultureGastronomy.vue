<template>
  <section class="culture-section">
    <h2 class="section-title">Culture & Gastronomy</h2>

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
import vineyard from "../assets/photos/vineyard.jpg";
import footballStadium from "../assets/photos/footballStadium.jpg";
import laLiga from "../assets/photos/laLiga.jpg";
import foodMarket from "../assets/photos/foodMarket.jpg";
import flamenco from "../assets/photos/flamenco.jpg";
import dance from "../assets/photos/dance.jpg";
import cooking from "../assets/photos/cooking.jpg";

const experiences = ref([
  {
    id: 1,
    title: "Vineyard tour, wine tasting & tapas",
    description:
      "Tour a local vineyard near Barcelona or Sevilla, learn about winemaking, and sample unique local grape varieties. Enjoy a curated wine tasting with panoramic countryside views followed by local tapas at the vineyard.",
    image: vineyard,
    doubleWidth: true,
  },
/*   {
    id: 2,
    title: "Football Stadium Tour",
    description:
      "Go behind the scenes at iconic football stadiums: Camp Nou (Barcelona), Sanchez-Pizjuan or Benito Villamarin (Sevilla).",
    image: footballStadium,
    doubleWidth: false,
  }, */
  {
    id: 3,
    title: "La Liga Matchday Experience",
    description:
      "Watch a live La Liga match featuring FC Barcelona, Espanyol, Sevilla FC or Real Betis. Subject to fixtures and availability.",
    image: laLiga,
    doubleWidth: false,
  },
  {
    id: 4,
    title: "Tapas Tour",
    description:
      "A guided tapas tasting tour through the most authentic local neighbourhood bars. Discover hidden gems as you sample regional delicacies, traditional dishes, and classic Spanish drinks, just like the locals do.",
    image: foodMarket,
    doubleWidth: true,
  },
  {
    id: 5,
    title: "Flamenco Dancing Workshop (Sevilla Only)",
    description:
      "Feel the rhythm of Andalucía in a lively, hands-on Flamenco class led by local dance experts, followed by tapas and drinks at an authentic local bar.",
    image: dance,
    doubleWidth: false,
  },
  {
    id: 6,
    title: "Flamenco Show (Sevilla Only)",
    description:
      "Experience the power and passion of live flamenco in an intimate setting, an unforgettable cultural experience unique to Andalucia.",
    image: flamenco,
    doubleWidth: false,
  },
  {
    id: 7,
    title: "Food Market & Cooking Class",
    description:
      "Guided visit to a bustling local food market followed by a hands-on cooking class. Learn to prepare local dishes with expert guidance and enjoy a true taste of the region.",
    image: cooking,
    doubleWidth: false,
  },
]);
</script>

<style scoped>
.culture-section {
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
