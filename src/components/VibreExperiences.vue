<template>
    <div class="ve-container">
        <div class="ve-content">
            <div class="ve-top">
                <div class="ve-top-title">
                    <p class="cooper-font">Vibra <span class="orange">experiences</span></p>
                    <div class="ve-top-subtitle">
                        <p>
                            Choose from our specially designed experience packages, or use them as inspiration for your
                            own unique trip.
                        </p>
                    </div>
                </div>
                <div class="ve-top-buttons">
                    <span class="r-button" @click="scrollLeft">
                        <IconLeftArrow />
                    </span>
                    <span class="l-button" @click="scrollRight">
                        <IconRightArrow />
                    </span>
                </div>
            </div>
            <div class="ve-bottom-wrapper">
                <div class="ve-bottom" ref="carousel">
                    <div class="ve-card-container" :style="{ transform: `translateX(${translateX}px)` }">
                        <div class="ve-card" v-for="(card, index) in cards" :key="index">
                            <div class="ve-card-image">
                                <img :src="card.image" :alt="card.title" />
                            </div>
                            <div class="ve-card-title">{{ card.title }}</div>
                            <div class="ve-card-desc">{{ card.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IconLeftArrow from './icons/IconLeftArrow.vue';
import IconRightArrow from './icons/IconRightArrow.vue';
import tennis from '../assets/photos/tennis.jpg';
import football from '../assets/photos/football.jpg';
import food from '../assets/photos/food.jpg';
import hike from '../assets/photos/hike.jpg';
import golf from '../assets/photos/golf.jpg';

const cards = [
    {
        image: tennis,
        title: "Padel & Vineyard Experience",
        description: "A perfect blend of sport and indulgence. Tour a local vineyard, enjoy wine tasting with panoramic views, and savor farm-to-table tapas. (Alternative natural wine experience in Barcelona)."
    },
    {
        image: football,
        title: "Padel & Football Package",
        description: "For the ultimate sports lover! Guided stadium tour (e.g., Camp Nou, Sanchez Pizjuan) and tickets to a La Liga match (subject to fixtures)."
    },
    {
        image: food,
        title: "Padel & Foodie Escape",
        description: "Immerse yourself in Spanish flavours. Visit a local food market, enjoy a tapas tasting tour, OR take a Spanish cooking class with a local chef."
    },
    {
        image: hike,
        title: "Padel & Hike Escape",
        description: "Recharge in wild landscapes. Enjoy a guided afternoon hike (2-3 hours) with stunning views, followed by an evening BBQ dinner in a rustic outdoor setting."
    },
    {
        image: golf,
        title: "Court & Course Experience",
        description: "The ultimate sport-lover’s combo. An afternoon round of golf at a scenic course, followed by tapas and drinks at the clubhouse."
    }
];

const translateX = ref(0);
const cardWidth = ref(390); // Default width of each card
const gap = ref(20); // Default gap between cards

function updateDimensions() {
    if (window.innerWidth <= 768) {
        cardWidth.value = 300; // Adjust card width for mobile
        gap.value = 10; // Adjust gap for mobile
    } else {
        cardWidth.value = 390; // Default card width
        gap.value = 20; // Default gap
    }
}

function scrollLeft() {
    translateX.value = Math.min(translateX.value + cardWidth.value + gap.value, 0);
}

function scrollRight() {
    const maxTranslateX = -(cards.length * (cardWidth.value + gap.value) - (cardWidth.value + gap.value));
    if (translateX.value <= maxTranslateX) {
        // Loop back to the first card
        translateX.value = 0;
    } else {
        translateX.value = Math.max(translateX.value - cardWidth.value - gap.value, maxTranslateX);
    }
}

onMounted(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
});
</script>

<style scoped>
.ve-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
}

.ve-content {
    margin: 50px 0;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.ve-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

.ve-top-title {
    max-width: 360px;
    font-size: 64px;
    font-weight: 400;
    line-height: 115%;
    color: var(--color-purple);
}

.ve-top-subtitle {
    max-width: 360px;
    display: flex;
    align-items: end;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
}

.ve-top-buttons {
    display: flex;
    align-items: end;
    gap: 12px;
}

.ve-top-buttons .r-button,
.l-button {
    cursor: pointer;
    transition: transform 0.3s ease;
}

.ve-top-buttons .r-button:hover,
.l-button:hover {
    transform: scale(1.1);
}

.ve-bottom-wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
}

.ve-bottom {
    width: 100%;
    overflow: hidden;
    padding-left: 2px; /* Add 2 pixels of padding to the left */
}

.ve-card-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    transition: transform 0.5s ease-in-out;
}

.ve-card {
    flex: 0 0 auto;
    width: 390px;
    border-radius: 10px;
    overflow: hidden;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    scroll-snap-align: start;
}

.ve-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ve-card-image {
    width: 100%;
    height: 466px;
    overflow: hidden;
}

.ve-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.ve-card:hover .ve-card-image img {
    transform: scale(1.03);
}

.ve-card-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 113%;
    color: var(--color-purple);
    padding: 25px 20px 10px 20px;
}

.ve-card-desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
    padding: 0px 20px 20px 20px;
}

@media (max-width: 768px) {
    .ve-card {
        width: 80vw;
    }

    .ve-top {
        flex-direction: column;
        gap: 20px;
    }

    .ve-top-buttons {
        align-self: flex-end;
    }
}

@media (max-width: 480px) {
    .ve-card-image {
        height: 300px;
    }

    .ve-top-title {
        font-size: 48px;
    }
}
</style>
