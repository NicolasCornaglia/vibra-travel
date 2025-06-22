<template>
  <div class="wv-container">
    <div class="wv-content">
      <p class="cooper-font title">Meet the Heart <br />Behind Vibra</p>
      <div class="presentation">
        <img :src="charlie" alt="Charlie Photo" />
        <div class="presentation-right">
          <h3>Hi, I'm Charlie!</h3>
          <p class="desc">
            My love for Padel and the rich culture of Spain sparked the idea for
            Vibra Travel. After experiencing the magic of playing Padel in
            amazing Spanish settings, I felt inspired to turn those moments into
            something others could enjoy too. <br /><br />
            Our mission is simple: to create Padel holidays that are not just
            trips, but cherished memories for you and your group. We believe in
            personal touches, authentic experiences, and the pure joy of Padel
            under the Spanish sun.<br /><br />
            We can't wait to help you plan your adventure!
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
  max-width: 850px;
}

.title {
  color: var(--color-purple);
  text-align: center;
  font-size: 80px;
  font-weight: 400;
  line-height: 113%;
}

.presentation {
  max-width: 850px;
  margin-top: 50px;
  gap: 50px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.presentation-right {
  max-width: 480px;
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
    .wv-content{
        width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .presentation {
        flex-direction: column;
    }

    .desc  {
        width: 90vw;
    }
}


@media (max-width: 768px) {
  .title {
    font-size: 38px;
  }
}
</style>
