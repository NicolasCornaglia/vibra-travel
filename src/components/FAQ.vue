<template>
  <div class="faq-container">
    <h2 class="faq-title">
      <span class="faq-title-frequent">FREQUENT</span> ASKED QUESTIONS
    </h2>

    <div class="faq-grid">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <div
          class="faq-question"
          @click="toggleFaq(index)"
          :class="{ active: openFaqs[index] }"
        >
          <span>{{ faq.question }}</span>
          <span class="toggle-icon">{{ openFaqs[index] ? "▾" : "▸" }}</span>
        </div>
        <div
          class="faq-answer"
          :class="{ open: openFaqs[index] }"
          v-if="openFaqs[index]"
        >
          <div v-html="faq.answer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface FAQ {
  question: string;
  answer: string;
}

const openFaqs = reactive<Record<number, boolean>>({});

const faqs = ref<FAQ[]>([
  {
    question: "What if I regret and I don't want to travel and wish to cancel?",
    answer:
      "Don't worry! We will try our best to maintain your deposit so you can select another date.<br><br>If you are not sure when you will be able to travel again and prefer to have the money back we will <strong>refund 100% of the money with at least 48h notice</strong> and wish to see you in a future event. If you have accommodation we need 7 days notice.",
  },
  {
    question: "Bookings with accommodation",
    answer: "Our accommodations are carefully selected for your comfort.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "We have contingency plans for rainy days to ensure your experience is not affected.",
  },
  {
    question: "Are airline tickets included in the packages?",
    answer:
      "No, airline tickets are not included in our packages. You'll need to arrange your own transportation to the destination.",
  },
  {
    question: "Transfers from the airport, included?",
    answer: "Transfers can be arranged for an additional fee.",
  },
  {
    question: "Lessons for Beginners, Amateurs or Advanced players!",
    answer:
      "We offer lessons for all skill levels, from complete beginners to advanced players.",
  },
  {
    question: "How is the cancellation policy?",
    answer:
      "Please refer to our detailed cancellation policy in the booking terms and conditions.",
  },
  {
    question: "I don't have a racket, can I rent one on-site?",
    answer: "Yes, racket rentals are available on-site for your convenience.",
  },
  {
    question: "What is the difference between the Packages?",
    answer:
      "Each package offers different features, duration, and amenities to suit various preferences and budgets.",
  },
  {
    question: "At what times are the training sessions?",
    answer:
      "Training sessions typically run in the morning and afternoon, with specific times provided in your booking confirmation.",
  },
  {
    question: "Who are the Coaches I will be training with?",
    answer:
      "Our coaches are certified professionals with extensive experience in padel instruction.",
  },
  {
    question:
      "Can I join a Padel Experience when there are not dates scheduled?",
    answer:
      "Please contact us directly to inquire about custom dates outside our regular schedule.",
  },
  {
    question:
      "I am a companion who travels with someone who is joining a package. Can I still travel?",
    answer:
      "Yes, companions are welcome! We offer special companion rates for those not participating in the padel activities.",
  },
  {
    question: "Is it possible to add more hours to one of our packages?",
    answer: "Yes, additional training hours can be arranged for an extra fee.",
  },
  {
    question:
      "How many hours per day are recommended for a customized experience?",
    answer:
      "We typically recommend 2-3 hours per day for an optimal learning experience.",
  },
  {
    question: "If I come alone, will I have Individual or Group Sessions?",
    answer:
      "You'll join group sessions, but we can arrange individual lessons for an additional fee.",
  },
  {
    question: "I want to know the name of the coach that will be training us.",
    answer:
      "Coach assignments are finalized closer to your booking date and will be communicated to you before your arrival.",
  },
  {
    question: "What if I am unable to travel to the trip?",
    answer:
      "Please refer to our cancellation policy. With sufficient notice, we can offer rescheduling options.",
  },
  {
    question:
      "Can I book Accommodation and Transfers services through Spain Padel Experiences?",
    answer:
      "Yes, we can arrange both accommodation and transfer services to enhance your experience.",
  },
  {
    question: "Spanish Coaches - English Speaking",
    answer:
      "All our coaches speak English, ensuring effective communication during training sessions.",
  },
  {
    question: "How is the booking process?",
    answer:
      "The booking process involves selecting your package, dates, and any additional services, followed by a deposit payment to secure your spot.",
  },
]);

const toggleFaq = (index: number) => {
  openFaqs[index] = !openFaqs[index];
};
</script>

<style scoped>
.faq-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.faq-title {
  text-align: center;
  margin-bottom: 40px;
}

.faq-title-frequent {
  color: var(--color-pink);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.faq-item {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 10px;
}

.faq-question {
  padding: 15px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-base);
  font-weight: 600;
}

.faq-answer {
  padding-bottom: 15px;
  line-height: 1.5;
  font-size: var(--font-size-base);
}

.toggle-icon {
  font-size: var(--font-size-lg);
  transition: transform 0.3s ease;
}

.faq-question.active .toggle-icon {
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
