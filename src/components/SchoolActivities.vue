<template>
  <section class="schools-activities-section">
    <h2 class="section-title">Pick your adventure!</h2>

    <div class="experiences-grid">
      <div class="experience-card" :class="{ 'double-width': experience.doubleWidth }" v-for="experience in experiences"
        :key="experience.id">
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
import kidsPadel from "../assets/photos/kidsPadel.webp";
import kidsFootball from "../assets/photos/kidsFootball.webp";
import footballStadium from "../assets/photos/footballStadium.jpg";
import kidsKayaking from "../assets/photos/kidsKayaking.webp";
import classroom from "../assets/photos/classroom.webp";
import kidsCooking from "../assets/photos/kidsCooking.webp";
import flamencoDancer from "../assets/photos/flamencoDancer.webp";
import hostel from "../assets/photos/hostel.jpg";

const experiences = ref([
  {
    id: 1,
    title: "Padel",
    description:
      "Daily padel classes suitable for all levels. Sessions can be tailored to your group’s needs, focusing on different aspects of the game in a fun and engaging way. We can also arrange matches and tournaments with local players.",
    image: kidsPadel,
    doubleWidth: true,
  },
  {
    id: 2,
    title: "Other Sports",
    description:
      "While padel is our specialty, we also create tailored programs across a wide range of sports including tennis, football, golf, swimming, hockey, and more. We can also arrange matches against local teams for a competitive and fun experience.",
    image: kidsFootball,
    doubleWidth: true,
  },
  {
    id: 3,
    title: "Outdoor Activities",
    description:
      "From cycling and hiking to kayaking and other watersports, we can organise a variety of outdoor adventures for every interest and skill level.",
    image: kidsKayaking,
    doubleWidth: true,
  },
  {
    id: 4,
    title: "Spanish Language Classes",
    description:
      "Interactive Spanish lessons for all levels, designed to boost speaking confidence and fluency in a dynamic, supportive environment.",
    image: classroom,
    doubleWidth: false,
  },
  {
    id: 5,
    title: "Spanish Cooking Workshops",
    description:
      "Get hands-on and cook like a local! Learn to make authentic Spanish dishes, from tapas and paella to traditional desserts, guided by expert chefs. Taste your creations and experience the flavors of Spain in a fun, interactive setting.",
    image: kidsCooking,
    doubleWidth: true,
  },
  {
    id: 6,
    title: "Cultural Experiences",
    description:
      "Dive into Spain’s vibrant culture! Explore historic cities on guided walking tours, experience the passion of live flamenco shows in Sevilla, join interactive flamenco dance classes with a live band, and savor the best local flavors on tapas tasting tours",
    image: flamencoDancer,
    doubleWidth: true,
  },
  {
    id: 7,
    title: "Local Professional Sports",
    description:
      "Exclusive stadium tours and live matches with top local teams, including Barcelona FC and Sevilla FC.",
    image: footballStadium,
    doubleWidth: true,
  },
  {
    id: 8,
    title: "Accommodation & Meals",
    description:
      "Comfortable, student-friendly accommodation with flexible full or half board options, designed for a stress-free and enjoyable stay.",
    image: hostel,
    doubleWidth: false,
  },

]);
</script>

<style scoped>
.schools-activities-section {
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
  .schools-activities-section {
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
  .schools-activities-section {
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
