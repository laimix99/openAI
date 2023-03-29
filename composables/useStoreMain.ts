import { defineStore } from 'pinia';
import { Configuration, OpenAIApi } from "openai"
import { useStorage } from '@vueuse/core'
export const useStoreMain = defineStore('storeId', () => {
  const state = reactive({
    input: '',
    openAI: [],
    user: [],
    chat: useStorage('sw:chat', [

    ]),
    apiKey: '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',
  }) as any;

  const configuration = new Configuration({
    apiKey: state.apiKey,
  })
  const openai = new OpenAIApi(configuration);

  async function runCompletion () {
    state.openAI.push(state.input)
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      max_tokens: 1024,
      prompt: state.input,
      temperature: 0.5
    });
    state.input = '' 
    console.log(':openAI',completion.data.choices[0].text)
    state.openAI.push(completion.data.choices[0].text) 
  }

  return {
    state,

    runCompletion,
  };
});
