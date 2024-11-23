<template>
  <div class="bg-slate-800 p-2 border border-slate-500 rounded-lg w-fit">
    <form @submit.prevent="sendGitHubLink">
      <input
        type="text"
        class="p-2 bg-transparent rounded-lg min-w-[30rem] outline-none text-white"
        v-model="gitHubLinkInput"
        placeholder="Link to the GitHub repo to penetrate"
      />
      <AppButton type="submit">Penetrate test</AppButton>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  name: 'GitHubInput',
  data() {
    return {
      gitHubLinkInput: ''
    }
  },

  methods: {
    sendGitHubLink() {
      console.log('GitHub link submitted:', this.gitHubLinkInput)
    }
  },

  components: {
    AppButton
  }
}
</script>

<style lang="scss" scoped></style>
