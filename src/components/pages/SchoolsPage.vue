<template>
  <div>
    <SchoolsPresentation />
    <PackagesInclude 
      :cards="packageCards" 
      title="Sport, Culture & Learning <br /> Your Way"
      subtitle="" />
      <!-- choose your activities -->
      <!-- destinations -->
    <SchoolsSchedule />
    <!--    <MakeItYours />
    <Schedule />
    <ReadyAdventure variant="orange" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SchoolsPresentation from "../SchoolsPresentation.vue";
import PackagesInclude from "../PackagesInclude.vue"
import SchoolsSchedule from "../SchoolsSchedule.vue";
/*import MakeItYours from "../MakeItYours.vue"
import Schedule from "../Schedule.vue";
import ReadyAdventure from "../ReadyAdventure.vue" */
import IconStar from '../icons/IconStar.vue';
import IconShield from '../icons/IconShield.vue';
import IconTailor from '../icons/IconTailor.vue';
import IconTrophy from '../icons/IconTrophy.vue';
import IconSchool from '../icons/IconSchool.vue';
import IconHost from '../icons/IconHost.vue';

const packageCards = [
  {
    icon: IconShield,
    title: 'Safe & Structured Trips',
    desc: 'Designed specifically for schools, colleges, and youth groups.'
  },
  {
    icon: IconTailor,
    title: 'Fully Customizable Itineraries',
    desc: 'Choose the activities, pace, and focus to suit your group.'
  },
  {
    icon: IconTrophy,
    title: 'Expertise in Sports & Cultural Exchange',
    desc: 'Combining padel, language learning, and immersive cultural experiences.'
  },
  {
    icon: IconStar,
    title: 'Proven Experience',
    desc: 'Over 10 years organizing international placements and student exchanges in Spain.'
  },
  {
    icon: IconSchool,
    title: 'Balanced Student Experience',
    desc: 'Students enjoy the perfect mix of sport, education, and cultural exploration.'
  },
  {
    icon: IconHost,
    title: 'Dedicated Trip Coordinator',
    desc: 'Ensuring smooth, safe, and hassle-free travel from start to finish.'
  },
]

const route = useRoute()

// TODO: check 'imagine your trip' button takes to the schools timemable section and not the one on groups
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
