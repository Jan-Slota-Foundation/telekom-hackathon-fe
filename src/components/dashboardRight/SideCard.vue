<script setup>
import { rightSideStore } from '@/store/rightSideStore.js'
</script>
<template>
  <div
    class="border border-slate-500 rounded-lg px-4 py-4 w-full min-w-96 min-h-48"
  >
    <!-- NO TYPE -->
    <div v-if="!rightSideStore.type" class="">
      <h3 class="text-3xl font-semibold">Detailist</h3>
      <h4 class="text-slate-400">Perform an action to see a detailed log</h4>
    </div>

    <!-- THERE IS TYPE QUESTION -->
    <div
      v-if="rightSideStore.type === 'question'"
      class="flex gap-4 items-center mb-4"
    >
      <SideCardIcon :type="question"></SideCardIcon>
      <SideCardQuestion />
    </div>
    <SideCardResponse
      v-if="rightSideStore.type === 'question' && rightSideStore.response"
    />
    <div v-if="rightSideStore.type === 'crawler'" class="">
      <h3 class="text-3xl font-semibold mb-5">AutoGPT Log</h3>
      <ul class="flex flex-col gap-4">
        <li
          v-for="(crowlerStep, index) in rightSideStore.autoGptSteps"
          :key="index"
          class="flex gap-4 items-center"
        >
          <span
            class="border-primary-600 border-2 rounded-lg p-2 px-4 inline-block aspect-square"
          >
            {{ crowlerStep.step }}
          </span>
          <span class="font-medium">
            {{ crowlerStep.action }}
          </span>
        </li>
      </ul>

      <AppButton></AppButton>
    </div>
  </div>
</template>

<script>
import SideCardQuestion from './SideCardQuestion.vue'
import SideCardIcon from './SideCardIcon.vue'
import SideCardResponse from './SideCardResponse.vue'
import AppButton from '../AppButton.vue'

export default {
  name: 'SideCard',
  components: {
    SideCardQuestion,
    SideCardIcon,
    SideCardResponse,
    AppButton
  }
}
</script>
