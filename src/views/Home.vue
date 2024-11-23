<template>
  <h1 class="text-4xl font-semibold">Penetration Tester</h1>
  <AppButton @click="testBeCall">Test Backend</AppButton>
  <br />
  <AppButton @click="handleLogOut">Log out</AppButton>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import API from '@/api/axiosInstance.js'

export default {
  components: {
    AppButton
  },

  methods: {
    handleLogOut() {
      console.log('logging out')
    },

    async testBeCall() {
      console.log('BackEnd TEST CALL')
      let testResponse = await API.get('/test')
      console.log('TEST RESULT')
      console.log(testResponse.data())
    }
  }
}
</script>

<style scoped></style>
