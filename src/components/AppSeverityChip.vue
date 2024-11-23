<template>
  <span :class="['base', status]"> {{ count }} {{ status }} </span>
</template>

<script>
export default {
  name: 'TestCardChip',

  props: {
    status: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.base {
  @apply text-xs font-medium rounded-full px-3 py-1 border-2 max-h-7;
}

.high {
  @apply border-orange-700 text-orange-600;
}

.critical {
  @apply border-rose-800 text-rose-800;
}

.medium {
  @apply border-yellow-500 text-yellow-500;
}

.unknown {
  @apply border-slate-600 text-slate-600;
}

.low {
  @apply text-blue-300 border-blue-300;
}
</style>
