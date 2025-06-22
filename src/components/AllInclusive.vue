<template>
  <div class="aie-container">
    <div class="aie-content">
      <div class="aie-left">
        <h1 class="cooper-font">
          The <span class="orange">All-inclusive</span>
          Vibra Team Experience
        </h1>
        <p class="aie-left-desc">
          We take care of everything, so your team can focus on bonding, playing
          Padel, and soaking up the Spanish sun. Our team packages are designed
          for convenience and maximum fun.
        </p>
        <a href="/padel-trips" class="nav-link fgrotesk-font"
          ><p class="button-text">Organise your trip</p></a
        >
      </div>

      <div class="aie-right">
        <div class="aie-card" v-for="(card, idx) in cards" :key="idx">
          <div class="aie-icon">
            <component :is="card.icon" />
          </div>
          <div class="aie-info">
            <div class="aie-card-title">
              <p>{{ card.title }}</p>
            </div>
            <div class="aie-card-text">
              <p>{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTrophy from "./icons/IconTrophy.vue";
import IconBattery from "./icons/IconBattery.vue";
import IconMoon from "./icons/IconMoon.vue";
import IconGroup from "./icons/IconGroup.vue";
import IconArrows from "./icons/IconArrows.vue";
import IconHost from "./icons/IconHost.vue";

const cards = [
  {
    icon: IconMoon,
    title: "Shared Accommodation",
    desc: "Comfortable and convenient shared rooms in quality hotels or apartments, fostering team spirit. (Private room options available)."
  },
  {
    icon: IconBattery,
    title: "Fully Catered Meals",
    desc: "Delicious and energizing breakfasts, lunches, and dinners included, featuring local Spanish cuisine and healthy options."
  },
  {
    icon: IconGroup,
    title: "Group Padel Lessons",
    desc: "Daily Padel coaching sessions designed for groups, focusing on teamwork, strategy, and fun for all skill levels."
  },
  {
    icon: IconTrophy,
    title: "Organized Padel Play",
    desc: "Plenty of court time for friendly matches, round-robin tournaments, and social Padel sessions."
  },
  {
    icon: IconArrows,
    title: "Team Building Activities",
    desc: "Optional curated activities beyond Padel, like group dinners, cultural outings, or fun challenges to enhance bonding."
  },
  {
    icon: IconHost,
    title: "Dedicated Vibra Host",
    desc: "On-site support from a Vibra Travel host to ensure everything runs smoothly and your team has a fantastic experience."
  }
];
</script>

<style scoped>
.aie-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.aie-content {
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px 10vw 50px 10vw;
}

.aie-left {
  width: 40vw;
  max-width: 600px;
}

h1 {
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);
}

.aie-left-desc {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  max-width: 450px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.button-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 113%;
  color: var(--color-white);
  padding: 10px 20px;
  border: 1px-solid var(--color-orange);
  background-color: var(--color-orange);
  border-radius: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid var(--color-orange);
  transition: all 0.3s ease-in-out;
}

.button-text:hover {
  background-color: var(--color-white);
  color: var(--color-orange);
}

.aie-card {
  width: 30vw;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  padding-top: 20px;
  margin-bottom: 20px;
}

.aie-icon {
  margin-right: 30px;
}

.aie-card-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 112%;
  color: var(--color-purple);
  padding-bottom: 10px;
}

.aie-card-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  padding-bottom: 20px;
}

.aie-info {
  max-width: 600px;
}

.orange {
  color: var(--color-orange) !important;
}

/* Existing styles remain the same */

@media (max-width: 768px) {
  .aie-content {
    flex-direction: column;
    margin: 5vw;
  }

  .aie-left {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the content horizontally */
    justify-content: center; /* Centers the content vertically */
    text-align: center; /* Ensures text is centered */
    margin-bottom: 20px;
  }

  .aie-left-desc {
    max-width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center; /* Ensures text is centered */
  }

  .button-text {
    margin: 0 auto; /* Centers the button horizontally */
  }

  .aie-right {
    width: 100%;
  }

  .aie-card {
    width: 100%;
    max-width: 100%;
  }

  .aie-card-title {
    font-size: 20px;
  }

  .aie-card-text {
    font-size: 14px;
  }
}
</style>
