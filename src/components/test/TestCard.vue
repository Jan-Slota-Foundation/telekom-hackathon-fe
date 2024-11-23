<template>
  <card class="p-2 border border-slate-500 bg-slate-800 rounded-lg">
    <div class="flex justify-between items-center gap-4">
      <h4 class="text-lg font-semibold">Test name</h4>
      <TestCardChip :status="'todo'" />
    </div>
    <p class="text-slate-400">Description</p>
  </card>
</template>

<script>
import TestCardChip from '@/components/test/TestCardChip.vue'

export default {
  name: 'TestCard',
  components: {
    TestCardChip
  }
}
</script>
