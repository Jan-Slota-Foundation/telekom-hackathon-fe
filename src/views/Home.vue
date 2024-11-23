<template>
  <h1 class="text-4xl font-semibold">Penetration Tester</h1>
  <AppButton @click="handleLogOut">Log out</AppButton>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    AppButton
  },

  methods: {
    handleLogOut() {
      console.log('logging out')
    }
  }
}
</script>

<style scoped></style>
