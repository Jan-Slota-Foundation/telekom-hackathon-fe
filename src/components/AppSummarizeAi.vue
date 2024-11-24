<script setup>
import { vulnerabilityStore } from '../store/vulnerabilityStore'
</script>

<template>
  <form @submit.prevent="askAiToSummarize" class="flex gap-2 w-full">
    <AppButton type="submit">
      <svg
        v-if="!isResponseLoading"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 loading-spinner"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </AppButton>
    <input
      v-model="inputQuestion"
      class="bg-slate-800 rounded-lg px-4 w-full outline-none"
      type="text"
      placeholder="Ask AI to summarize or provide details!"
    />
  </form>
</template>

<script>
import AppButton from './AppButton.vue'
import API from '@/api/axiosInstance.js'
import { bottomAlert } from '../store/bottomAlert'
import { rightSideStore } from '../store/rightSideStore.js'

export default {
  name: 'AppSummarizeAi',

  components: {
    AppButton
  },

  mounted() {
    this.inputQuestion = ''
  },

  data() {
    return {
      inputQuestion: '',
      isResponseLoading: false
    }
  },

  methods: {
    async askAiToSummarize() {
      //Start loading
      this.isResponseLoading = true
      rightSideStore.type = 'question'
      rightSideStore.question = this.inputQuestion
      rightSideStore.response = null
      // try {
      let aiResponse = await API.post('/askai', {
        content: `You are an expert in the topic of ${
          vulnerabilityStore?.selectedExploit?.category ||
          vulnerabilityStore?.selectedExploit?.name ||
          'No category available'
        } exploits. You are analyzing an application, and have found ${
          vulnerabilityStore?.selectedExploit?.items?.length ||
          vulnerabilityStore?.selectedExploit?.count ||
          'No count available'
        } exploits of this sort, they seem to be of ${
          (vulnerabilityStore?.selectedExploit?.items?.[0]?.Severity ??
            false) ||
          'decent'
        } severity. Please answer the follwing question: "${
          this.inputQuestion
        }. Please be concise and limit yourself to 100 words. You also have some more context at hand, such as the description of the problem:

          ${
            vulnerabilityStore?.selectedExploit?.items?.[0]?.Description ||
            vulnerabilityStore?.selectedExploit?.desc ||
            'No description available'
          }

          Or the proposed solution to the problem:

          ${
            vulnerabilityStore?.selectedExploit?.solution ||
            'No solution available'
          }
            `
      })

      rightSideStore.response = aiResponse.data
      this.isResponseLoading = false
      this.inputQuestion = ''
      // } catch (error) {
      //   // proper error handling
      //   console.log(error)
      //   bottomAlert.openAsError(
      //     'An error has occured when communicating with the AI'
      //   )
      // }
    }
  }
}
</script>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin 1s linear infinite;
}
</style>
