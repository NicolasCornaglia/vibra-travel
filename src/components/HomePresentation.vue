<template>
    <div class="presentation-container">
        <div class="presentation-content">
            <div class="presentation-image">
                <img :src="presentationImage" decoding="async" loading="lazy" alt="Presentation Image" />
                <div class="image-overlay">
                    <h2 class="image-title cooper-font">Your ultimate padel<span style="display: block;"></span> getaway in Spain.</h2>
                </div>
            </div>
            <div class="presentation-text">
                <p class="presentation-title cooper-font">
                    Personalised Padel holidays combining unforgettable court time with authentic Spanish experiences.
                </p>
                <a href="padel-trips" class="presentation-button fgrotesk-font">
                    <p class="button-text">Plan your trip</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import presentationImage from '../assets/photos/presentation.webp';
</script>

<style scoped>
.presentation-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-cream);
}

.presentation-content {
    width: 90vw;
    margin: 40px 0px;
}

.presentation-image {
    position: relative;
    width: 100%;
    max-height: 688px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.presentation-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-title {
    color: white;
    font-size: 80px;
    font-weight: 400;
    text-align: center;
    margin: 0;
    padding: 20px;
    width: 70%;
}

.presentation-text {
    width: 50vw;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.presentation-title {
    font-size: 38px;
    font-weight: 400;
    color: var(--color-purple);
    text-align: center;
    max-width: 707px;
}

.presentation-button {
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 113%;
    padding: 10px 20px;
    border: 1px-solid var(--color-orange);
    background-color: var(--color-orange);
    border-radius: 25px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-orange);
    margin-top: 30px;
    color: var(--color-cream);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.presentation-button:hover {
    background-color: var(--color-cream);
    color: var(--color-orange);
}

.button-text {
    font-size: 16px;
    font-weight: 600;
}

@media (max-width: 768px) {
  .image-title {
    font-size: 30px; 
  }

  .presentation-title {
    font-size: 20px; 
    max-width: 100%;
     margin-bottom: 20px;
  }

  .presentation-text {
    width: 80vw;
  }
}

</style>
