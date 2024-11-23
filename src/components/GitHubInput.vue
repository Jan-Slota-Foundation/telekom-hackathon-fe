<template>
  <div class="bg-slate-800 p-2 border border-slate-500 rounded-lg w-fit mb-8">
    <form @submit.prevent="sendGitHubLink">
      <input
        type="text"
        class="p-2 bg-transparent rounded-lg min-w-[30rem] outline-none text-white"
        v-model="gitHubLinkInput"
        placeholder="Link to the codebase to penetrate"
      />
      <AppButton type="submit">Penetrate test</AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import API from '@/api/axiosInstance.js'
import { bottomAlert } from '@/store/bottomAlert.js'
import csv from '@/store/fileDrop.js'
import router from '@/router/index.js'

export default {
  name: 'GitHubInput',
  data() {
    return {
      gitHubLinkInput: ''
    }
  },

  methods: {
    async sendGitHubLink() {
      try {
        let postResponse = await API.post('/analyze', {
          link: this.gitHubLinkInput,
          content: csv.text
        })
        router.push('/dashboard')
        bottomAlert.openAsSuccess(
          'Codebase has been sent for penetration testing'
        )
      } catch (error) {
        console.log(error)
        bottomAlert.openAsError(
          'An error has occured when communicating with the backend'
        )
      }
    }
  },

  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped></style>
