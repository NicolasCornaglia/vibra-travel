<template>
  <div class="s-container">
    <div class="s-content">
      <div class="title cooper-font">
        Get a taste of what your Vibra <br />
        Padel trip could look like.
      </div>
      <div class="schedule-container">
        <div class="day-section day-1">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 1: Arrival & Padel Kickstart
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              <span class="time">AM:</span> Fly to destination, seamless
              transfer to hotel, settle in, unpack and relax.
            </li>
            <li class="activity-item">
              <span class="time">17:00 - 19:00:</span> Kickstart your trip with a group padel coaching session
            </li>
            <li class="activity-item">
              <span class="time">19:00:</span> Welcome drinks at the Padel club.
            </li>
          </ul>
        </div>

        <div class="day-section day-2">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 2: Skills, Serenity & Social Play
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              <span class="time">8:00:</span> Breakfast.
            </li>
            <li class="activity-item">
              <span class="time">9:00 - 9:45:</span> Optional Yoga session.
            </li>
            <li class="activity-item">
              <span class="time">10:00 - 12:00:</span> Group Padel coaching.
            </li>
            <li class="activity-item">
              <span class="time">12:00 - 17:30:</span> Unique cultural experience afternoon or enjoy free time to get lunch, relax or explore your surroundings
            </li>
          </ul>
        </div>

        <div class="day-section day-3">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 3: Coaching & Cultural Immersion
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              <span class="time">8:00:</span> Breakfast.
            </li>
            <li class="activity-item">
              <span class="time">10:00 - 12:00:</span> Group Padel coaching.
            </li>
            <li class="activity-item">
              <span class="time">12:00 - 19:00:</span> Unique cultural
              experience afternoon.
            </li>
          </ul>
        </div>

        <div class="day-section day-4">
          <div class="day-title">
            <div class="day-bullet"></div>
            Day 4: Competition, Celebration & Departure
          </div>
          <ul class="activity-list">
            <li class="activity-item">
              <span class="time">8:00:</span> Breakfast.
            </li>
            <li class="activity-item">
              <span class="time">10:00 - 12:00:</span> Americano style
              competition with local club members.
            </li>
            <li class="activity-item">
              <span class="time">12:00:</span> Departure drinks and BBQ/Paella.
            </li>
            <li class="activity-item">
              <span class="time">PM:</span> Departure flight.
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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9),
    rgba(0, 0, 0, 0.04)
  );
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
  background: linear-gradient(
    to bottom,
    var(--color-orange) 0%,
    var(--color-orange) 70%,
    transparent 100%
  );
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
.day-4 .day-bullet {
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

.time {
  font-weight: bold;
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
    .s-content{
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
