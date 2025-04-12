<template>
  <div class="footer">
    <div class="footer-logo">
      <img v-lazy="logo" alt="logo">
    </div>
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ t('footer.destinations') }}</h3>
        <p><a href="#" @click.prevent="scrollToLocations"><span>{{ t('footer.barcelona') }}</span></a></p>
        <p><a href="#" @click.prevent="scrollToLocations"><span>{{ t('footer.sevilla') }}</span></a></p>
      </div>
      <div class="footer-section">
        <h3>{{ t('footer.whatWeOffer') }}</h3>
        <p><RouterLink to="/padel"><span>{{ t('footer.padelPackages') }}</span></RouterLink></p>
        <p><RouterLink to="/sports"><span>{{ t('footer.sportsActivities') }}</span></RouterLink></p>
      </div>
      <div class="footer-section">
        <h3>{{ t('footer.whoAreWe') }}</h3>
        <p><a href="#" @click.prevent="scrollToAbout"><span>{{ t('footer.aboutUs') }}</span></a></p>
        <p><RouterLink to="/terms"><span>{{ t('footer.termsAndConditions') }}</span></RouterLink></p>
        <p><a href="#" @click.prevent="scrollToContact"><span>{{ t('footer.contactUs') }}</span></a></p>
        <p><RouterLink to="/faq"><span>{{ t('footer.faq') }}</span></RouterLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import logo from '../assets/photos/logo.jpg';

const { t } = useI18n();
const router = useRouter();

const scrollToLocations = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }

  setTimeout(() => {
    const element = document.getElementById('locations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};

const scrollToAbout = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }

  setTimeout(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};

const scrollToContact = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }

  setTimeout(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};
</script>

<style scoped>
.footer {
  color: var(--color-white);
  background-color: var(--color-pink);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.footer-logo {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--color-white);
}

.footer-logo img {
  border-radius: 50%;
  width: 20vw;
  max-width: 150px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 70vw;
  max-width: 1100px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
}

.footer-section p {
  margin: 0;
}

.footer-section p a {
  text-decoration: none;
  color: var(--color-black);
  font-size: 0.9rem;
  width: 20vw;
}

.footer-section p a:hover {
  color: var(--color-white);
}

@media (max-width: 768px) {
  .footer {
    margin: 0;
  }
  .footer-content {
    flex-direction: column;
  }

  .footer-logo {
    display: none;
  }
}
</style>
