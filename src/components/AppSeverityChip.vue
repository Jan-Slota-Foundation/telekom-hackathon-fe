<template>
  <span
    @click="tryCollapse"
    :class="['base', status, isDetailist ? 'text-md mb-2' : 'text-xs']"
  >
    {{ count }}
    <span v-if="isDetailist">total vulnerabilites - </span>
    <span v-if="isDetailist || !isCollapsed"> {{ status }}</span>
    <span v-if="isDetailist"> danger</span>
  </span>
</template>

<script>
export default {
  name: 'TestCardChip',

  data() {
    return {
      isCollapsed: true
    }
  },

  methods: {
    tryCollapse() {
      console.log(this.isCollapsed, this.isDetailist)
      if (!this.isDetailist) {
        this.isCollapsed = !this.isCollapsed
        console.log('collapse', this.isCollapsed)
      }
    }
  },

  props: {
    isDetailist: {
      type: Boolean,
      default: false
    },
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
  @apply font-medium inline-block rounded-full px-3 py-1 border-2;
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
