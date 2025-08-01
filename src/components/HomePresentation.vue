<template>
    <div class="presentation-container">
        <div class="presentation-content">
            <div class="presentation-video">
                <HomeVideo class="video"/>
                <div class="video-overlay">
                    <h2 class="video-title cooper-font">From Court to Culture<span style="display: block;"></span>A Spanish Padel Experience</h2>
                </div>
            </div>
            <div class="presentation-text">
                <p class="presentation-title cooper-font">
                    Personalised Padel holidays in <span class="orange">Barcelona</span> and <span class="orange">Sevilla</span> - combining unforgettable court time with authentic Spanish experiences.
                </p>
                <a href="padel-trips" class="presentation-button fgrotesk-font">
                    <p class="button-text">Plan your trip</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HomeVideo from '../components/HomeVideo.vue'
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

.presentation-video {
    position: relative;
    width: 100%;
    max-height: 688px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px; /* Ensure the container has border radius */
    overflow: hidden; /* Ensure the container clips the content */
}

.presentation-video .video {
    width: 100%;
    height: 100%;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 0.5s ease;
}

.presentation-video:hover .video-overlay {
    opacity: 0;
}

.video-title {
    color: white;
    font-size: 55px;
    font-weight: 400;
    text-align: center;
    margin: 0;
    padding: 20px 40px;
    background-color: rgba(0, 0, 0, 0.7);
    display: inline-block;
    line-height: 1.5;
    border-radius: 10px;
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
    border: 1px solid var(--color-orange);
    background-color: var(--color-orange);
    border-radius: 25px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .video-title {
    font-size: 20px;
    padding: 10px;
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
