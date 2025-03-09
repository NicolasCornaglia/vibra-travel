import { reactive } from 'vue';

export const appState = reactive({
  selectedLanguage: 'en',
  languages: [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ]
});

