// ...existing code...
<template>
    <div class="dt-container">
        <h2 class="dt-title cooper-font">Destinations</h2>
        <div class="dt-cards">
            <div class="dest-card">
                <img src="../assets/photos/bcn.webp" alt="Barcelona" />
                <div class="dest-info">
                    <h3 class="dest-title">Barcelona</h3>
                    <p class="dest-desc">A vibrant Mediterranean city where modern energy meets cultural treasures. From
                        Gaudí’s spectacular architecture to lively beaches and youth-friendly neighbourhoods, Barcelona
                        offers the perfect mix of learning and fun.</p>
                </div>
            </div>

            <div class="dest-card">
                <img src="../assets/photos/seville.webp" alt="Seville" />
                <div class="dest-info">
                    <h3 class="dest-title">Seville</h3>
                    <p class="dest-desc">A city full of history and charm, perfect for students to experience authentic
                        Spain. Explore its
                        stunning monuments, discover the passion of flamenco, and soak up the city’s famous tapas
                        culture.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dt-container {
    width: 90vw;
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    background-color: var(--color-white);
    
}

.dt-title {
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    font-size: 64px;
    color: var(--color-purple);
}

.dt-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10vw
}

.dest-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    width: 40vw;
}

.dest-title {
    margin-bottom: 8px;
    font-size: 24px;
    color: var(--color-purple);
}

.dest-desc {
    color: rgba(0, 0, 0, 0.41);
}

.dest-card img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
}

.dest-info {
    padding: 12px;
}

@media (max-width: 768px) {
    .dt-cards {
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }

    .dest-card {
        width: 100%;
    }

    .dt-title {
        font-size: 40px;
        margin-bottom: 40px;
    }
}
</style>