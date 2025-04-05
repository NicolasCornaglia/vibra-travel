<template>
  <!-- Padel Package Highlight -->
  <section id="packages" class="package-section">
    <div class="section-header">
      <h2>{{ t('padelPackageHome.featuredPackages') }}</h2>
    </div>
    <div class="cards">
      <div class="package-card">
        <div class="package-header">
          <h3>{{ t('padelPackageHome.customisedPackage') }}</h3>
          <div class="package-price">
            {{ t('padelPackageHome.customisedDescription') }}
          </div>
        </div>
        <div class="package-features">
          <ul>
            <li>{{ t('padelPackageHome.customisedPackage') }}</li>
            <li>{{ t('padelPackageHome.privateTraining') }}</li>
            <li>{{ t('padelPackageHome.allSkillLevels') }}</li>
            <li>{{ t('padelPackageHome.variousAccommodation') }}</li>
            <li>{{ t('padelPackageHome.additionalCultural') }}</li>
          </ul>
        </div>
        <div class="package-cta">
          <a href="/padel" class="btn-book">
            {{ t('padelPackageHome.learnMore') }}
          </a>
        </div>
      </div>
      <div class="package-card">
        <div class="package-header">
          <h3>{{ t('padelPackageHome.teamBuilding') }}</h3>
          <div class="package-price">
            {{ t('padelPackageHome.teamBuildingDescription') }}
          </div>
        </div>
        <div class="package-features">
          <ul>
            <li>{{ t('padelPackageHome.customisedPackage') }}</li>
            <li>{{ t('padelPackageHome.privateTraining') }}</li>
            <li>{{ t('padelPackageHome.allSkillLevels') }}</li>
            <li>{{ t('padelPackageHome.variousAccommodation') }}</li>
            <li>{{ t('padelPackageHome.additionalCultural') }}</li>
          </ul>
        </div>
        <div class="package-cta">
          <a href="/padel" class="btn-book">
            {{ t('padelPackageHome.learnMore') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
  background-color: #fff;
}

.package-card {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
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

.package-price {
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
