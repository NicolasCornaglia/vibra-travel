<template>
  <!-- Padel Package Highlight -->
  <section id="packages" class="package-section">
    <div class="section-header">
      <h2>{{ t('padelPackage.featuredPackages') }}</h2>
    </div>
    <div class="cards">
      <div class="package-card">
        <div class="package-header">
          <h3>{{ t('padelPackage.customisedPackage') }}</h3>
          <div class="package-desc">
            {{ t('padelPackage.customisedDescription') }}
          </div>
        </div>
        <div class="package-features">
          <ul>
            <li>{{ t('padelPackage.customisedPackage') }}</li>
            <li>{{ t('padelPackage.privateTraining') }}</li>
            <li>{{ t('padelPackage.allSkillLevels') }}</li>
            <li>{{ t('padelPackage.variousAccommodation') }}</li>
            <li>{{ t('padelPackage.additionalCultural') }}</li>
            <li>{{ t('padelPackage.individualCoupleGroup') }}</li>
            <li>{{ t('padelPackage.padelLesson') }}</li>
            <li>{{ t('padelPackage.padelTournament') }}</li>
            <li>{{ t('padelPackage.freePlay') }}</li>
            <li>{{ t('padelPackage.additionalLessons') }}</li>
            <li>{{ t('padelPackage.airportTransfers') }}</li>
          </ul>
        </div>
        <div class="package-cta">
          <a href="#" @click.prevent="scrollToContact" class="btn-book">
            {{ t('padelPackage.bookNow') }}
          </a>
        </div>
      </div>
      <div class="package-card">
        <div class="package-header">
          <h3>{{ t('padelPackage.teamBuilding') }}</h3>
          <div class="package-desc">
            {{ t('padelPackage.teamBuildingDescription') }}
          </div>
        </div>
        <div class="package-features">
          <ul>
            <li>{{ t('padelPackage.customisedPackage') }}</li>
            <li>{{ t('padelPackage.teamBasedTraining') }}</li>
            <li>{{ t('padelPackage.allSkillLevels') }}</li>
            <li>{{ t('padelPackage.additionalSports') }}</li>
            <li>{{ t('padelPackage.variousAccommodation') }}</li>
            <li>{{ t('padelPackage.padelBased') }}</li>
            <li>{{ t('padelPackage.authenticExperience') }}</li>
            <li>{{ t('padelPackage.airportTransfer') }}</li>
          </ul>
        </div>
        <div class="package-cta">
          <a href="#" @click.prevent="scrollToContact" class="btn-book">
            {{ t('padelPackage.bookNow') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { nextTick } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

const scrollToContact = async () => {
  if (router.currentRoute.value.path !== "/") {
    await router.push("/");
    await nextTick();
  }

  setTimeout(() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 500);
};
</script>

<style scoped>
/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home-container {
  color: black;
}

h1,
h2,
h3,
h4 {
  margin-bottom: 1rem;
  line-height: 1.2;
}

a {
  display: inline-block;
  color: var(--color-pink);
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
}

a:hover {
  background-color: var(--color-pink);
  color: var(--color-white);
}

section {
  padding: 4rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  color: black;
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: var(--color-pink);
  bottom: -10px;
  left: 25%;
}
/* Package Section */
.package-section {
  background-color: var(--color-light-grey);
}

.package-card {
  flex: 1;
  width: 80%;
  max-width: 1000px;
  background: var(--color-white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.package-header {
  background-color: var(--color-pink);
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.package-header h3 {
  margin: 0;
}

.package-desc {
  margin-top: 0.5rem;
}

.package-features {
  padding: 2rem;
}

.package-features ul {
  list-style-position: inside;
}

.package-features li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.package-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #f4acb7;
}

.package-cta {
  text-align: center;
  padding: 0 2rem 2rem;
}

.btn-book {
  font-weight: bold;
  display: inline-block;
  background-color: var(--color-pink);
  color: white;
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

.btn-book:hover {
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .cards {
    display: flex;
    flex-direction: column;
  }

  section {
    padding: 3rem 1.5rem;
  }

  .package-card {
    min-width: 80%;
    margin: auto;
  }
}
</style>
