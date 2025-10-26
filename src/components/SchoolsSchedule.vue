<template>
  <div class="s-container" id="timetable">
    <div class="s-content">
      <div class="title cooper-font">
        Get a taste of what your Vibra <br />
        Padel trip could look like.
      </div>
      <div class="schedule-container">
        <div class="day-section day-1">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 1: Arrival
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              Settle into your accommodation and enjoy a fun <span class="bold">welcome padel session</span>, followed
              by a group dinner of local tapas.
            </li>
          </ul>
        </div>

        <div class="day-section day-2">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 2: Sport & Language
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              Breakfast at the hotel.
            </li>
            <li class="activity-item">
              Morning <span class="bold">padel training</span> padel training with coaches.
            </li>
            <li class="activity-item">
              Afternoon <span class="bold">Spanish class</span> with practical, interactive activities.
            </li>
          </ul>
        </div>

        <div class="day-section day-3">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 3: Culture & Discovery
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              Breakfast at the hotel.
            </li>
            <li class="activity-item">
              Morning <span class="bold">padel training</span> padel training with coaches.
            </li>
            <li class="activity-item">
              Afternoon <span class="bold">guided city tour</span> to explore Seville or Barcelona.
            </li>
          </ul>
        </div>

        <div class="day-section day-4">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 4: Tournament & Free Time
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              Friendly <span class="bold">padel tournament</span> in the morning. 
            </li>
            <li class="activity-item">
              Paella lunch at the padel club.
            </li>
            <li class="activity-item">
              Interactive <span class="bold">cooking class</span> – learn how to make local dishes.
            </li>
          </ul>
        </div>

        <div class="day-section day-5">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 5: Departure
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              Breakfast and transfer to the airport.
            </li>
          </ul>
        </div>
      </div>

      <div class="title cooper-font">Remember, this is fully customisable!</div>
      <a href="/contact" class="nav-link fgrotesk-font">
        <p class="button-text">Plan your trip</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.bold {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}

.s-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
}

.s-content {
  margin: 50px 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.title {
  color: var(--color-purple);
  text-align: center;
  font-size: 38px;
  font-weight: 400;
  line-height: 113%;
}

.schedule-container {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 40px;
  position: relative;
}

.schedule-container::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 16px;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.9),
      rgba(0, 0, 0, 0.04));
  z-index: -1;
}

.day-section {
  margin-bottom: 32px;
  position: relative;
}

.day-section:last-child {
  margin-bottom: 0;
}

.day-section:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 40px;
  bottom: -32px;
  width: 2px;
  background: linear-gradient(to bottom,
      var(--color-orange) 0%,
      var(--color-orange) 70%,
      transparent 100%);
  opacity: 0.3;
}

.day-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 113%;
  color: var(--color-purple);
}

.day-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.day-1 .day-bullet,
.day-2 .day-bullet,
.day-3 .day-bullet,
.day-4 .day-bullet,
.day-5 .day-bullet {
  background-color: var(--color-orange);
}

.activity-list {
  margin-left: 20px;
  list-style: none;
  padding: 0;
}

.activity-item {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  line-height: 1.5;
  position: relative;
}

.activity-item:last-child {
  margin-bottom: 0;
}

.activity-item::before {
  content: "•";
  color: rgba(0, 0, 0, 0.41);
  margin-right: 8px;
}

.button-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 113%;
  color: var(--color-white);
  padding: 10px 20px;
  border: 1px solid var(--color-orange);
  background-color: var(--color-orange);
  border-radius: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.button-text:hover {
  background-color: var(--color-cream);
  color: var(--color-orange);
}

@media (max-width: 768px) {
  .s-content {
    width: 90vw;
  }

  .title {
    width: 90vw;
    font-size: 28px;
  }

  .schedule-container {
    margin: 0 10vw;
    width: 90vw;
    padding: 20px;
  }

  .day-title {
    font-size: 1rem;
  }

  .activity-item {
    font-size: 0.85rem;
  }
}
</style>
