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
      </div>
    </div>
    <div class="sports-content-contact">
      <Contact />
    </div>
  </div>
</template>

<script setup lang="ts">
import Contact from "../Contact.vue";
</script>

<style scoped>
.sports {
  position: relative;
  margin: 0 auto;
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
  color: var(--color-white);
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.sports-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sports-content-title {
  padding: 40px;
  display: flex;
  justify-content: center;
}

.sports-content-contact {
  width: 100vw;
  background-color: var(--color-white) !important;
  padding: 40px 0 0 0;
}
.terms-black {
  color: var(--color-black);
}

.terms-pink {
  color: var(--color-pink);
}

@media (max-width: 768px) {
  .sports-title {
    padding: 0px;
  }
}
</style>
