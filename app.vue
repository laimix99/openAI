<script lang="ts" setup>
// const axios = require('axios');
const storeMain = useStoreMain()
onMounted(() => {

})
</script>

<template>
  <div class="flex flex-col items-center min-h-100vh px-3 pb-140px bg-hex-565762">
    <div class="flex flex-col w-full max-w-700px justify-center gap-4">
      <span v-for="open in storeMain.state.openAI">{{ open }}</span>
      <!-- <span v-if="storeMain.state.user">{{ storeMain.state.user }}</span> -->
    </div>
    <div class="w-full max-w-800px fixed bottom-10">
      <input
        v-model="storeMain.state.input"
        class="text-18px py-2 text-black px-3 bg-gray rounded-5px w-full sticky z-999"
        placeholder="Задай вопрос"
        @keyup.enter="storeMain.runCompletion"
        type="text"
      />
    </div>
  </div>
</template>

<style scoped>
  .br {
    border: 1px solid red
  }
  .text {
    position: fixed;
    /* top: 20px; */
  }
  input{
    outline: none;
    /* box-shadow: 1px 1px 1px black; */
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)
  }
</style>
