<template>
  <div class="faq-container">
    <h2 class="faq-title">
      <span class="faq-title-frequent">{{ t('faq.frequent') }}</span> {{ t('faq.askedQuestions') }}
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
          v-html="faq.answer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

interface FAQ {
  question: string;
  answer: string;
}

const openFaqs = reactive<Record<number, boolean>>({});
const faqs = ref<FAQ[]>([]);

// Function to update FAQs based on the current locale
const updateFaqs = () => {
  faqs.value = [
    {
      question: t('faq.questions.advancedPlayer'),
      answer: t('faq.answers.advancedPlayer'),
    },
    {
      question: t('faq.questions.comeAlone'),
      answer: t('faq.answers.comeAlone'),
    },
    {
      question: t('faq.questions.holidayBased'),
      answer: t('faq.answers.holidayBased'),
    },
    {
      question: t('faq.questions.accommodation'),
      answer: t('faq.answers.accommodation'),
    },
    {
      question: t('faq.questions.typicalDay'),
      answer: t('faq.answers.typicalDay'),
    },
    {
      question: t('faq.questions.equipment'),
      answer: t('faq.answers.equipment'),
    },
    {
      question: t('faq.questions.flightsIncluded'),
      answer: t('faq.answers.flightsIncluded'),
    },
    {
      question: t('faq.questions.whatToPack'),
      answer: t('faq.answers.whatToPack'),
    },
    {
      question: t('faq.questions.refund'),
      answer: t('faq.answers.refund'),
    },
    {
      question: t('faq.questions.travelInsurance'),
      answer: t('faq.answers.travelInsurance'),
    },
    {
      question: t('faq.questions.mealsIncluded'),
      answer: t('faq.answers.mealsIncluded'),
    },
    {
      question: t('faq.questions.privateGroup'),
      answer: t('faq.answers.privateGroup'),
    },
  ];
};

// Initial update
updateFaqs();

// Watch for locale changes and update FAQs
watch(locale, updateFaqs);

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
  margin: 20px;
  padding-bottom: 20px;
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

.faq-answer :deep(li) { 
  margin-left: 20px; 
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
