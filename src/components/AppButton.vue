<template>
  <button
    class="rounded-md bg-primary-600 px-5 focus:outline-none focus:bg-primary-700 py-2 text-white font-semibold hover:bg-primary-700 transition-colors duration-150"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>
