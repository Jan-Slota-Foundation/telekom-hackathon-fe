<template>
  <button
    :class="[
      'rounded-md px-5 focus:outline-none py-2 font-semibold  transition-colors duration-150',
      buttonClasses
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    buttonClasses() {
      let finalClasses = ''

      switch (this.variant) {
        case 'primary':
          finalClasses =
            'bg-primary-600 focus:bg-primary-700 hover:bg-primary-700'
          break
        case 'secondary':
          finalClasses = 'bg-slate-800 focus:bg-slate-700 hover:bg-slate-700'
          break
      }

      return finalClasses
    }
  }
}
</script>
