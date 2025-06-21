<template>
    <div class="images-container">
        <div class="images-content">
            <div class="left-images">
                <div class="top-left">
                    <img :src="resting" decoding="async" loading="lazy" alt="Resting Image" />
                </div>
                <div class="bottom-left">
                    <img :src="paella" decoding="async" loading="lazy" alt="Paella Image" />
                </div>
            </div>
            <div class="right-images">
                <img class="walk-img" :src="walk" decoding="async" loading="lazy" alt="Walk Image" />
                <img class="beers-img" :src="beers" decoding="async" loading="lazy" alt="Beers Image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import walk from '../assets/photos/walk.png';
import resting from '../assets/photos/resting.jpg';
import paella from '../assets/photos/paella.jpg';
import beers from '../assets/photos/beers.png';
</script>

<style scoped>
.images-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
}

.images-content {
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: start;
}

.left-images {
    display: flex;
    flex-direction: column;
    width: 45vw;
    gap: 20px;
}

.top-left {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.bottom-left {
    width: 25vw;
    height: 0;
    left: 45%;
    padding-bottom: 56.25%; /* Changed from 56.25% to show full image */
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.bottom-left img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    object-fit: fill; /* Changed from fill to contain */
    border-radius: 10px;
}

.top-left img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.right-images {
    width: 45%;
    aspect-ratio: 3/4;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}

.walk-img {
    border-radius: 10px;
    width: 100%;
    height: 50%;
    object-fit: cover;
    margin-top: 20%;
}

.beers-img {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 10px;
    width: 65%;
    height: 100%;
    object-fit: cover;
    align-self: flex-start;
    justify-items: center;
}


@media screen and (max-width: 768px) {
    .images-container {
        padding: 16px 0;
    }

    .images-content {
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    .left-images,
    .right-images {
    width: 100% !important;
    aspect-ratio: auto !important;
    position: static !important;
    overflow: visible !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    justify-content: start;
  }

    .top-left,
    .bottom-left {
        width: 100% !important;
        height: auto !important;
        padding-bottom: 0 !important;
        position: relative;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        left: 0 !important;
    }

    .top-left img,
    .bottom-left img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .walk-img,
    .beers-img {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        margin: 0 !important;
        align-self: center !important;
    }
}

</style>