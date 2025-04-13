<template>
  <div class="terms-page">
    <div class="terms">
      <div class="terms-title">
        <img
          v-lazy="termsImg"
          alt="Terms & Conditions image"
        />
        <h1>{{ t('termsAndConditions.title')}}</h1>
      </div>
      <div class="terms-content">
        <div class="terms-content-title">
          <h2>
            <span class="terms-black">{{ t('termsAndConditions.subtitle1')}}</span>
            <span class="terms-pink"> {{ t('termsAndConditions.subtitle2')}}</span>
          </h2>
          <p class="terms-intro">{{ t('termsAndConditions.intro')}}</p>
        </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.bookingAndPayment.title')}}</h3>
            <p v-for="(paragraph, index) in tm('termsAndConditions.bookingAndPayment.content')" :key="index">
              {{ paragraph }}
            </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.whatsIncluded.title')}}</h3>
            <p >
              {{ t('termsAndConditions.whatsIncluded.content1')}}
            </p>
            <ul>
              <li class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.whatsIncluded.contentList')" :key="index">
                {{ paragraph }}
              </li>
            </ul>
            <p v-html=" t('termsAndConditions.whatsIncluded.content2')">
            </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.cancellationsAndRefunds.title')}}</h3>
            <p >
              {{ t('termsAndConditions.cancellationsAndRefunds.byYouTitle')}}
            </p>
            <ul>
              <li class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.cancellationsAndRefunds.byYou')" :key="index">
                {{ paragraph }}
              </li>
            </ul>
            <p >
              {{ t('termsAndConditions.cancellationsAndRefunds.byUsTitle')}}
            </p>
            <ul>
              <li class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.cancellationsAndRefunds.byUs')" :key="index">
                {{ paragraph }}
              </li>
            </ul>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.travelAndInsurance.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.travelAndInsurance.content')" :key="index" v-html="paragraph">
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.healthAndFitness.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.healthAndFitness.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.liability.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.liability.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.changesToItinerary.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.changesToItinerary.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.photosAndMarketing.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.photosAndMarketing.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.governingLaw.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.governingLaw.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>
          <div class="terms-content-text-item">
            <h3>{{ t('termsAndConditions.contactUs.title')}}</h3>
              <p class="list-item" v-for="(paragraph, index) in tm('termsAndConditions.contactUs.content')" :key="index">
                {{ paragraph }}
              </p>
          </div>

        </div>
    </div>
    <Contact />
  </div>
</template>

<script setup lang="ts">
import termsImg from '../../assets/photos/terms.jpg'
import Contact from '../Contact.vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

</script>

<style scoped>
.terms {
  position: relative;
}

.terms-title {
  position: relative;
  width: 100%;
  max-height: 400px;
}

.terms-title img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.terms-title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-white);
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.terms-intro{
  text-align: center;
  width: 90%;
  margin: auto;
}

.terms-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  width: 90%;
}

.terms-content-title {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.terms-pink {
  color: var(--color-pink);
}

.terms-content-text-item {
  margin-bottom: 20px;
}

.terms-content-text-item p {
  padding: 5px 0;
  margin-left: 20px;
}

.list-item {
  margin-left: 60px;
}

/* Responsive Fix */
@media (max-width: 768px) {
  .terms-content-title {
    text-align: center;
    margin-bottom: 40px;
    padding: 0px;
  }
}
</style>
