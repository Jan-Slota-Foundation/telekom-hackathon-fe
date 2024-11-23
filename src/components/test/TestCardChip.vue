<template>
  <span :class="['base', status]">{{ status }}</span>
</template>

<script>
export default {
  name: 'TestCardChip',

  props: {
    status: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.base {
  @apply text-xs rounded-full px-3 py-1;
}

.in-progress {
  @apply bg-orange-600 text-white;
}

.error {
  @apply bg-rose-600 text-white;
}

.success {
  @apply bg-emerald-500 text-white;
}

.todo {
  @apply bg-slate-700 text-white;
}
</style>
