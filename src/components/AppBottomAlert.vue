<script setup>
import { bottomAlert } from '@/store/bottomAlert.js'
</script>
<template>
  <transition name="slide-fade">
    <div
      v-if="bottomAlert.isVisible"
      :class="[
        'absolute bottom-8 left-1/2 -translate-x-1/2  pl-4 pr-2 flex gap-9 items-center py-2 rounded-lg border font-semibold ',
        bottomAlert.variant === 'success'
          ? 'border-emerald-300 text-emerald-900 bg-emerald-500'
          : 'border-rose-500 bg-rose-600 text-rose-950'
      ]"
    >
      <span>
        {{ bottomAlert.text }}
      </span>
      <button
        :class="[
          ' transition-colors rounded-lg p-2',
          bottomAlert.variant === 'success'
            ? 'bg-emerald-500 hover:bg-emerald-600'
            : 'bg-rose-600 hover:bg-rose-700'
        ]"
        @click="bottomAlert.hide()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
import boxicons from 'boxicons'
export default {
  name: 'AppBottomAlert'
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px) translateX(-50%);
  opacity: 0;
}
</style>
