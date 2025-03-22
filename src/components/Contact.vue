<template>
  <section id="contact" class="contact-section">
    <div class="section-header">
      <h2>Contact Us</h2>
    </div>
    <div class="contact-container">
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-label">Phone:</span>
          <span class="contact-value"><a href="tel:+34 744484995">+34 744484995</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Email:</span>
          <span class="contact-value">info@vibra-travel.com</span>
        </div>
        <div class="social-link">
          <a
            href="https://api.whatsapp.com/send?phone=34744484995"
            class="social-link"
            target="_blank"
            >Whatsapp</a
          >
        </div>
        <div class="social-link">
          <a href="https://www.instagram.com/vibr.atravel/" class="social-link" target="_blank"
            >Instagram</a
          >
        </div>
      </div>

      <div class="contact-form">
        <form @submit.prevent="submitEmail">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              v-model="formData.surname"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="form-submit">
            <button type="submit" class="btn-contact">Send Email</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Reactive form data
const formData = ref({
  name: "",
  surname: "",
  email: "",
  message: "",
});

// Form submission handler
//TODO: modify email receiver to be info@vibra-travel.com. asked for current password.
const submitEmail = async () => {
  try {
    await emailjs.send(
      'service_hq1j668', 
      'template_241dg9q', 
      formData.value,
      'U5ho_79mVcusJquXG' // Add your public key here as well
    );
    alert("Thank you for your message! We will get back to you soon.");
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
  color: #333;
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
  color: #333;
  position: relative;
  display: inline-block;
}

.section-header h2:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 3px;
  background-color: #f4acb7;
  bottom: -10px;
  left: 25%;
}

/* Contact Section */
.contact-section {
  background-color: #f9f9f9;
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
  display: inline-block;
  color: #f4acb7;
  border: 1px solid #f4acb7;
  border-radius: 6px;
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
  background-color: #f4acb7;
  color: white;
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
