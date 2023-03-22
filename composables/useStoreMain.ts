import { defineStore } from 'pinia';

export const useStoreMain = defineStore('storeId', () => {
  const state = reactive({
    name: 'maksim',
    apiKey: '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',
  });

  return {
    state,
  };
});
