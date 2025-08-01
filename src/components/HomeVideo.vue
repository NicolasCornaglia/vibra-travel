<template>
  <div class="video-container">
    <img
      v-if="!isVideoLoaded"
      :src="bluryPresentation"
      alt="Blurry preview"
      class="blurry-image"
    />
    <video
      src="../assets/videos/Vibra Travel_Video_Web_OK.mp4"
      autoplay
      muted
      loop
      playsinline
      @canplaythrough="onVideoLoaded"
    ></video>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bluryPresentation from "../assets/photos/bluryPresentation.jpg";
const isVideoLoaded = ref(false);

const onVideoLoaded = () => {
  isVideoLoaded.value = true;
};
</script>

<style scoped>
.blurry-image {
  width: 100%;
  height: 100%;
  filter: blur(20px);
  transition: opacity 0.5s ease;
  z-index: 1;
}

.video-container {
  width: 100%;
  aspect-ratio: 16 / 9; /* Keeps proper dimensions on mobile */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}
</style>
