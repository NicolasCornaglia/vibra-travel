<template>
  <div class="mtp-container">
    <div class="mtp-content">
      <div class="mtp-left">
        <h1 class="cooper-font">More than Padel.</h1>
        <h1 class="cooper-font">
          It's an <span class="orange">experience.</span>
        </h1>
        <p class="mtp-left-desc">
          Tailored coaching to handpicked cultural add-ons, our padel trips in
          <span class="orange">Barcelona</span> and
          <span class="orange">Sevilla</span> go beyond the court.
        </p>
        <a href="/padel-trips" class="nav-link fgrotesk-font"
          ><p class="button-text">Learn more</p></a
        >
      </div>

      <div class="mtp-right">
        <div class="mtp-card">
          <div class="mtp-icon">
            <IconHeart />
          </div>
          <div class="mtp-info">
            <div class="mtp-card-title">
              <p>Padel paradise</p>
            </div>
            <div class="mtp-card-text">
              <p>
                Top courts, expert coaching, and tournaments with local players.
                All skill levels welcome!
              </p>
            </div>
          </div>
        </div>
        <div class="mtp-card">
          <div class="mtp-icon">
            <IconHeart />
          </div>
          <div class="mtp-info">
            <div class="mtp-card-title">
              <p>Authentic Spain</p>
            </div>
            <div class="mtp-card-text">
              <p>
                Beyond the court: dive into local life with vineyard tours, food
                festivals, scenic hikes and endless tapas nights.
              </p>
            </div>
          </div>
        </div>
        <div class="mtp-card">
          <div class="mtp-icon">
            <IconTailor />
          </div>
          <div class="mtp-info">
            <div class="mtp-card-title">
              <p>Tailored for you</p>
            </div>
            <div class="mtp-card-text">
              <p>
                Custom trips designed around your group’s skill level,
                interests and dynamic.
              </p>
            </div>
          </div>
        </div>
        <div class="mtp-card">
          <div class="mtp-icon">
            <IconHassle />
          </div>
          <div class="mtp-info">
            <div class="mtp-card-title">
              <p>Hassle-free travel</p>
            </div>
            <div class="mtp-card-text">
              <p>
                We handle the logistics, from courts to culture, leaving you
                free to train, explore and relax.
              </p>
            </div>
          </div>
        </div>
        <!--         <div class="mtp-card">
          <div class="mtp-icon">
            <IconHassle />
          </div>
          <div class="mtp-info">
            <div class="mtp-card-title">
              <p>CHARLIE WANTS ANOTHER ADDED</p>
            </div>
            <div class="mtp-card-text">
              <p>
                CHARLIE WANTS ANOTHER ADDED IN COMENTS ON FIGMA
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "./icons/IconHeart.vue";
import IconTailor from "./icons/IconTailor.vue";
import IconHassle from "./icons/IconHassle.vue";
</script>

<style scoped>
.mtp-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
}

.mtp-content {
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px 10vw 50px 10vw;
}

.mtp-left {
  width: 40vw;
  max-width: 600px;
}

h1 {
  font-size: 64px;
  font-weight: 400;
  line-height: 115%;
  color: var(--color-purple);
}

.mtp-left-desc {
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

.mtp-card {
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

.mtp-icon {
  margin-right: 30px;
}

.mtp-card-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 112%;
  color: var(--color-purple);
  padding-bottom: 10px;
}

.mtp-card-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.41);
  padding-bottom: 20px;
}

.mtp-info {
  max-width: 600px;
}

.orange {
  color: var(--color-orange) !important;
}

/* Existing styles remain the same */

@media (max-width: 768px) {
  .mtp-content {
    flex-direction: column;
    margin: 5vw;
  }

  .mtp-left {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the content horizontally */
    justify-content: center; /* Centers the content vertically */
    text-align: center; /* Ensures text is centered */
    margin-bottom: 20px;
  }

  .mtp-left-desc {
    max-width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center; /* Ensures text is centered */
  }

  .button-text {
    margin: 0 auto; /* Centers the button horizontally */
  }

  .mtp-right {
    width: 100%;
  }

  .mtp-card {
    width: 100%;
    max-width: 100%;
  }

  .mtp-card-title {
    font-size: 20px;
  }

  .mtp-card-text {
    font-size: 14px;
  }
}
</style>
