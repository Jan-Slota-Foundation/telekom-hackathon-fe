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
    <router-link to="/dashboard" class="underline mt-3 text-primary-600"
      >See already uploaded data</router-link
    >
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import API from '@/api/axiosInstance.js'
import GitHubInput from '@/components/GitHubInput.vue'
import AppFileDrop from '@/components/AppFileDrop.vue'
import LoggedIn from '@/components/LoggedIn.vue'

export default {
  components: {
    AppButton,
    GitHubInput,
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
