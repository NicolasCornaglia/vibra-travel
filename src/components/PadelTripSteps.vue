<template>
    <div class="pts-container">
        <div class="pts-content">
            <div class="pts-top">
                <div class="pts-top-title">
                    <p class="cooper-font">Your Padel trip in simple steps</p>
                </div>
                <div class="pts-top-subtitle">
                    <p>Planning your ultimate Padel adventure with Vibra Travel is easy. Here’s how to make it happen.
                    </p>
                </div>
            </div>
            <div class="pts-bottom">
                <div class="pts-card">
                    <div class="pts-bottom-number">
                        <p>1</p>
                    </div>
                    <div class="pts-bottom-title">
                        <p>Tell us your vision</p>
                    </div>
                    <div class="pts-bottom-desc">
                        Share your group size, ideal dates, padel goals, and the cultural experiences you’re interested
                        in. Whether it’s wine tastings, coastal hikes, or competitive matchplay—we’ll shape it around
                        you. The more you share, the better!
                    </div>
                </div>
                <div class="pts-card">
                    <div class="pts-bottom-number">
                        <p>2</p>
                    </div>
                    <div class="pts-bottom-title">
                        <p>We craft your itinerary</p>
                    </div>
                    <div class="pts-bottom-desc">
                        Choose from our thoughtfully designed packages or work with us to create a fully personalised
                        itinerary tailored specifically to your group’s preferences, skill levels, and interests.
                        Whether you want more court time, cultural experiences, or a mix of both, we’ll design a
                        seamless plan that fits your unique vision and ensures an unforgettable trip.
                    </div>
                </div>
                <div class="pts-card">
                    <div class="pts-bottom-number">
                        <p>3</p>
                    </div>
                    <div class="pts-bottom-title">
                        <p>Play, Explore, Enjoy</p>
                    </div>
                    <div class="pts-bottom-desc">
                        With everything arranged, all that's left is for you to immerse yourselves in the Padel action
                        and Spanish charm. Get ready for an unforgettable Vibra trip!

                        <a href="#" @click.prevent="scrollToContact" class="nav-link fgrotesk-font">
                            <p class="button-text">Start now</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import scrollToContact from '../composables/scrollToContact';
</script>

<style scoped>
.pts-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
}

.pts-content {
    margin: 50px 0;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.pts-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.pts-top-title {
    height: 150px;
    max-width: 470px;
    font-size: 64px;
    font-weight: 400;
    line-height: 115%;
    color: var(--color-purple);
}

.pts-top-subtitle {
    height: 150px;
    display: flex;
    align-items: end;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
    width: 25vw;
}

.pts-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
}

.pts-card {
    width: 25vw;
}

.pts-bottom-number {
    font-size: 64px;
    font-weight: 400;
    line-height: 115%;
    color: var(--color-orange);
    padding: 10px 0;
}

.pts-bottom-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 113%;
    color: var(--color-purple);
    padding: 10px 0;
}

.pts-bottom-desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
    padding: 10px 0;
}

.nav-link {
    margin-top: 20px;
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

@media (max-width: 768px) {
    .pts-container {
        width: 100vw;
        margin-top: 0px;
    }

    .pts-content {
        width: 90vw;
    }

    .pts-top {
        flex-direction: column;
        align-items: center;
    }

    .pts-top-title {
        font-size: 40px;
        max-width: 100%;
        height: 0;
    }

    .pts-top-subtitle {
        width: 100%;
        margin-top: 20px;
    }

    .pts-bottom {
        flex-direction: column;
        align-items: center;
    }

    .pts-card {
        width: 90vw;
        margin-bottom: 20px;
    }
    
}
</style>
