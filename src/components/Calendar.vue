<template>
  <div class="calendar-container">
    <div class="calendar-content">
        <!-- Google Calendar Appointment Scheduling begin -->
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EAhHjYwRs0wE69Jb-yRwvf3zWNcRfZuEeYl05dvobOQR9nwwppDczxwrT4I0IdYPSBiwh60PV?gv=true"
          width="100%"
          height="900"
          frameborder="0"
        ></iframe>
        <!-- end Google Calendar Appointment Scheduling -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.calendar-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
}

.calendar-content {
  background-color: white; 
  width: 100%;
  max-width: 1200px;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
}

.calendar-content:hover {
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
}
</style>
