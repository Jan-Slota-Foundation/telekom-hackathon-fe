<script setup>
import { rightSideStore } from '@/store/rightSideStore.js'
</script>

<template>
  <div class="bg-slate-800 px-4 py-2 rounded-lg">
    <span class="font-medium">
      {{ rightSideStore.question }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SideCardQuestion'
}
</script>
