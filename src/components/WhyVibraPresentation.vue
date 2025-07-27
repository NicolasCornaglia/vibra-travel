<template>
  <div class="wv-container">
    <div class="wv-content">
      <p class="cooper-font title">Meet the Heart <br />Behind Vibra</p>
      <div class="presentation">
        <img :src="charlie" fetchpriority="high" alt="Charlie Photo" class="image"/>
        <div class="presentation-right">
          <h3>Hi, I’m Charlie — and Spain has been home for over 10 years.</h3>
          <p class="desc">
            What started as a move to Sevilla became something much deeper: a
            love for Spanish life in all its forms. Not just the sunshine and
            sangria, but the slower pace, the spontaneous gatherings, the bar
            where you’re the only foreigner, the late-night conversations over
            tapas, the padel courts full of laughter and competition, the little
            festivals no tourist ever sees.<br /><br />

            Padel isn’t just a sport here — it’s a way of life. So is sharing
            good food, cold beers, local wine, and most importantly, doing it
            all with friends.<br /><br />

            After nearly a decade in Sevilla and now living in Barcelona with my
            Spanish wife and our Spanglish daughter, I created Vibra Travel to
            help others experience what makes Spain truly special — beyond the
            obvious sights.<br /><br />

            Vibra is about showing you the real Spain.<br />
            The one locals love.<br />
            The one you don’t just visit — you feel.<br /><br />

            Through personalised padel holidays, we bring people into that
            world. It’s not just about training or matches — it’s about the joy
            of sport, culture, connection, and making memories with your group
            that you’ll be talking about for years.<br /><br />

            We’re here to provide Padel Trips that are tailor-made by you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import charlie from "../assets/photos/charlie.png";
</script>

<style scoped>
.wv-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
}

.wv-content {
  width: 70vw;
  margin: 40px 0px;
  align-items: center;
  justify-content: center;
  max-width: 1250px;
}

.title {
  color: var(--color-purple);
  text-align: center;
  font-size: 80px;
  font-weight: 400;
  line-height: 113%;
}

.presentation {
  max-width: 1200px;
  margin: 50px 0;
  gap: 50px;
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  object-fit: cover;
}

.presentation-right {
  width: 100%;
}

.presentation h3 {
  margin-bottom: 20px;
  font-size: 24px;
  color: var(--color-purple);
  line-height: 113%;
  font-weight: 500;
}

.presentation p {
  color: rgba(0, 0, 0, 0.41);
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .wv-content {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .presentation {
    flex-direction: column;
  }

  .desc {
    width: 90vw;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 38px;
  }
}
</style>
