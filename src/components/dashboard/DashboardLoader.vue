<template>
  <div class="">
    <box-icon
      class="spinning fill-primary-700"
      size="lg"
      color="inherit"
      name="loader-alt"
    ></box-icon>
  </div>
</template>

<script>
import boxicons from 'boxicons'
export default {
  name: 'DashboardLoader'
}
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinning {
  animation: spin 1s linear infinite;
}
</style>
