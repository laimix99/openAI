<script setup>
import axios from 'axios';

const text = ref('');
const YOUR_API_KEY = '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';
const input = ref('');
// async function askOpenAI() {
//   const response = await fetch('https://api.openai.com/v1/chat/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${YOUR_API_KEY}`,
//     },
//     body: JSON.stringify({
//       prompt: input.value,
//       max_tokens: 100,
//     }),
//   });

//   const result = await response.json();
//   text.value = result.choices[0].text;
//   console.log(':result', text.value);
// }
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
});
console.log(completion.data.choices[0].message);
Ы
</script>

<template>
  <div class="flex flex-col">
    <input
      v-model="input"
      class="p-4 text-25px"
      @keyup.enter="askOpenAI"
      type="text"
    />
    <button @click="askOpenAI">Generate text</button>
    <pre v-if="text">{{ text }}</pre>
  </div>
</template>
