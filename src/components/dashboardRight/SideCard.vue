<script setup>
import { rightSideStore } from '@/store/rightSideStore.js'
</script>
<template>
  <div
    class="border border-slate-500 rounded-lg px-4 py-4 w-full min-w-96 min-h-48"
  >
    <div v-if="!rightSideStore.type" class="">
      <h3 class="text-3xl font-semibold">Detailist</h3>
      <h4 class="text-slate-400">Perform an action to see a detailed log</h4>
    </div>
    <div v-if="rightSideStore.type" class="flex gap-4 items-center mb-4">
      <SideCardIcon type="question"></SideCardIcon>
      <SideCardQuestion v-if="rightSideStore.type === 'question'" />
    </div>
    <SideCardResponse
      v-if="rightSideStore.type === 'question' && rightSideStore.response"
    />
  </div>
</template>

<script>
import SideCardQuestion from './SideCardQuestion.vue'
import SideCardIcon from './SideCardIcon.vue'
import SideCardResponse from './SideCardResponse.vue'

export default {
  name: 'SideCard',
  components: {
    SideCardQuestion,
    SideCardIcon,
    SideCardResponse
  }
}
</script>
