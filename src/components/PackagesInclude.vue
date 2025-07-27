<template>
  <div class="pi-container">
    <div class="pi-content">
      <div class="pi-top">
        <div class="pi-top-title">
          <p class="cooper-font">
            Every Vibra <br />
            Package Includes
          </p>
        </div>
        <div class="pi-top-subtitle">
          <p>
            We lay the foundation for an incredible trip. All elements can be
            adjusted, added, or removed to suit your group’s preferences. We’ll
            shape the experience around you.
          </p>
        </div>
      </div>
      <div class="pi-bottom">
        <div class="pi-card" v-for="card in cards" :key="card.title">
          <div class="pi-card-icon">
            <component :is="card.icon" />
          </div>
          <div class="pi-card-title">
            <p>{{card.title}}</p>
          </div>
          <div class="pi-card-desc">
             {{ card.desc }}
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconStar from './icons/IconStar.vue';
import IconShield from './icons/IconShield.vue';
import IconTrophy from './icons/IconTrophy.vue'
import IconFire from './icons/IconFire.vue'
import IconGlobe from './icons/IconGlobe.vue'
import IconGuide from './icons/IconGuide.vue'

const cards = [
  {
    icon: IconStar,
    title: '4★ Hotel & Breakfast',
    desc: '3 nights with optional upgrade to private apartment or villa.'
  },
  {
    icon: IconShield,
    title: 'Daily Padel Coaching',
    desc: '2 hours each morning, tailored to your group’s level. Want more or fewer hours? We’ll adapt the schedule to match your preferences.'
  },
  {
    icon: IconTrophy,
    title: 'Americano Tournament',
    desc: 'Friendly competition with local club players.'
  },
  {
    icon: IconFire,
    title: 'Farewell Meal',
    desc: 'Relaxed BBQ or traditional paella.'
  },
  {
    icon: IconGlobe,
    title: 'Cultural Experience',
    desc: 'Choose your own authentic local experience – we’ll make it unforgettable.'
  },
  {
    icon: IconGuide,
    title: 'Personalised Local Guide',
    desc: 'Tips for local events, festivals, and hidden gems.'
  },
]

</script>

<style scoped>
.pi-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.pi-content {
  margin: 50px auto;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.pi-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.pi-top-title {
  height: 150px;
  max-width: 500px;
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);
}

.pi-top-subtitle {
  height: 150px;
  display: flex;
  align-items: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  width: 25vw;
}

.pi-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 30px 0;
}

.pi-card {
  width: 25vw;
  margin: 40px 0;
}

.pi-card-icon {
  width: 56px;
  height: 56px;
  margin-bottom: 20px
}

.pi-card-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 113%;
  color: var(--color-purple);
  padding: 10px 0;
}

.pi-card-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  padding: 10px 0;
}

@media (max-width: 768px) {
  .pi-container {
    width: 100vw;
    margin-top: 0px;
  }

  .pi-content {
    width: 90vw;
    gap: 0;
  }

  .pi-top {
    flex-direction: column-reverse;
    align-items: center;
  }

  .pi-top-title {
    font-size: 40px;
    width: 100%;
    height: 100px;
    padding-top: 35px;
  }

  .pi-top-subtitle {
    height: auto;
    width: 100%;
    margin-top: 0px;
  }

  .pi-bottom {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .pi-card {
    width: 90vw;
    margin-bottom: 20px;
  }
}
</style>
