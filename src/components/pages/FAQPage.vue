<template>
    <div class="faq">
      <div class="faq-title">
        <img src="../../assets/photos/faq.PNG" alt="Terms & Conditions image" />
        <h1>Frequently Asked Questions</h1>
      </div>
      <div class="faq-content">
        <FAQ />
      </div>
      
    </div>
  
  </template>
  
  <script setup lang="ts">
  import FAQ from '../FAQ.vue';
  </script>
  
  <style scoped>
  .faq {
    position: relative;
  }
  
  .faq-title {
    position: relative;
    width: 100%;
    max-height: 400px;
  }
  
  .faq-title img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    display: block;
  }
  
  .faq-title h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    width: 100%;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .faq-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    .faq-title {
      padding: 0px;
    }
  }
  </style>
  