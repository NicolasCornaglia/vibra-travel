<template>
  <div class="sports">
    <div class="sports-title">
      <img
        src="../../assets/photos/sports.jpg"
        alt="Terms & Conditions image"
      />
      <h1>Sports</h1>
    </div>
    <div class="sports-content">
      <div class="terms-content-title">
        <h2 class="sports-content-title">
          <div>
            <span class="terms-pink">ENJOY </span>
            <span class="terms-black">YOUR STAY!</span>
          </div>
        </h2>
        <p>
          At Vibra Travel, we offer tailor-made sports packages across a wide
          range of disciplines. Whether you’re looking for a sport-specific
          experience or a mix of different activities, we can design the perfect
          program to suit your group’s needs. From football and padel to
          basketball, tennis, swimming, and more, we provide top facilities,
          expert guidance, and a seamless experience. Let us create a customized
          sports trip that matches your goals!
        </p>

        <div class="sports-content-image">
        contact us component #TODO
        </div>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sports {
  position: relative;
}

.sports-title {
  position: relative;
  width: 100%;
  max-height: 400px;
}

.sports-title img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.sports-title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.sports-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sports-content-title {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.terms-black {
  color: #333;
}

.terms-pink {
  color: #f4acb7;
}

@media (max-width: 768px) {
  .sports-title {
    padding: 0px;
  }
}
</style>
