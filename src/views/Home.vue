<template>
  <LoggedIn />
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="mb-12 text-center">
      <h1 class="text-6xl font-semibold mb-2">Penetration Tester</h1>
      <h2 class="text-slate-400 uppercase tracking-wide font-medium">
        Penetrate codebase in minutes
      </h2>
    </div>
    <GitHubInput />
    <AppFileDrop />
    <!-- <TestCard /> -->
    <!-- <AppButton @click="testBeCall">Test Backend</AppButton>
  <br />
  <AppButton @click="handleLogOut">Log out</AppButton> -->
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import API from '@/api/axiosInstance.js'
import GitHubInput from '@/components/GitHubInput.vue'
import TestCard from '@/components/test/TestCard.vue'
import AppFileDrop from '@/components/AppFileDrop.vue'
import LoggedIn from '@/components/LoggedIn.vue'

export default {
  components: {
    AppButton,
    GitHubInput,
    TestCard,
    AppFileDrop,
    LoggedIn
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
