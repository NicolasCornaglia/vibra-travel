<template>
  <section id="contact" class="contact-section" :style="{ backgroundColor: props.backgroundColor }">
    <div class="section-header">
      <h2>{{ t('contactComponent.contactUs') }}</h2>
    </div>
    <div class="contact-container">
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-value bold">info@vibra-travel.com</span>
        </div>
        <div>
          <span class="contact-value">
            <a class="social-link" href="tel:+34744484995">+34 744484995</a>
          </span>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=34744484995"
            class="social-link"
            target="_blank"
          >
            {{ t('contactComponent.whatsapp') }}
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/vibr.atravel/" class="social-link" target="_blank">
            {{ t('contactComponent.instagram') }}
          </a>
        </div>
      </div>

      <div class="contact-form">
        <form @submit.prevent="submitEmail">
          <div class="form-group">
            <label for="name">{{ t('contactComponent.name') }}:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="surname">{{ t('contactComponent.surname') }}:</label>
            <input type="text" id="surname" v-model="formData.surname" required />
          </div>
          <div class="form-group">
            <label for="email">{{ t('contactComponent.email') }}:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">{{ t('contactComponent.message') }}:</label>
            <textarea id="message" v-model="formData.message" rows="4" required></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="btn-contact">{{ t('contactComponent.sendEmail') }}</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'var(--color-light-grey)', // Default background color
  }
});

// Reactive form data
const formData = ref({
  name: "",
  surname: "",
  email: "",
  message: "",
});

// Form submission handler
const submitEmail = async () => {
  try {
    await emailjs.send(
      'service_hq1j668',
      'template_241dg9q',
      formData.value,
      'U5ho_79mVcusJquXG' // Add your public key here as well
    );
    alert(t('contactComponent.thankYouMessage'));
    formData.value = { name: "", surname: "", email: "", message: "" };
  } catch (error) {
    console.error(error);
  }
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
  color: var(--color-black);
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
  transition: background-color 0.3s ease-in-out;
}

section {
  padding: 4rem 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  color: var(--color-black);
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

/* Contact Section */
.contact-section {
  background-color: var(--color-light-grey);
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 30px;
}

.contact-label {
  margin-right: 0.5rem;
}

.social-links {
  margin-top: 2rem;
}

.social-link {
  display: flex;
  justify-content: center;
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
  border-radius: 6px;
  width: 170px;
  transition: background-color 0.3s ease-in-out;
}

.social-link:hover {
  background-color: var(--color-pink);
  color: var(--color-white);
}

.contact-form {
  flex: 2;
  min-width: 300px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.btn-contact {
  font-weight: bold;
  display: inline-block;
  background-color: var(--color-pink);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: background-color 0.3s ease-in-out;
}

.btn-contact:hover {
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
}

@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .contact-info {
    align-items: center;
  }
}
</style>
