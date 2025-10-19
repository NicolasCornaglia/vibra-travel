<template>
  <div>
    <GroupsPresentation />
    <PackagesInclude />
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
