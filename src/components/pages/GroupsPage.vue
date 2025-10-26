<template>
  <div>
    <GroupsPresentation />
    <PackagesInclude 
      :cards="packageCards" 
      title="Every Vibra <br /> Package Includes"
      subtitle="We lay the foundation for an incredible trip. All elements can be adjusted, added, or removed to suit your group's preferences. We'll shape the experience around you." />
    />
    <MakeItYours />
    <Schedule />
    <ReadyAdventure variant="orange" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PackagesInclude from "../PackagesInclude.vue"
import GroupsPresentation from "../GroupsPresentation.vue";
import MakeItYours from "../MakeItYours.vue"
import Schedule from "../Schedule.vue";
import ReadyAdventure from "../ReadyAdventure.vue"
import IconStar from '../icons/IconStar.vue';
import IconShield from '../icons/IconShield.vue';
import IconTrophy from '../icons/IconTrophy.vue'
import IconFire from '../icons/IconFire.vue'
import IconGlobe from '../icons/IconGlobe.vue'
import IconGuide from '../icons/IconGuide.vue'

const packageCards = [
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

const route = useRoute()

onMounted(() => {
  // Check for hash in URL (from router navigation)
  if (route.hash === '#timetable') {
    // Wait for all components to mount and render
    const interval = setInterval(() => {
      const el = document.getElementById('timetable');

      if (el) {
        clearInterval(interval);
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    // Stop trying after 5 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  } else {
    console.log('No hash or hash does not match #timetable')
  }
});
</script>
