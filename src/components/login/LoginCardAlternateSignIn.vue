<template>
  <div class="flex gap-4">
    <!-- GOOGLE SIGN IN -->
    <AppButton
      @click="signInWithGoogle"
      class="flex justify-center items-center"
    >
      <box-icon color="white" type="logo" name="google"></box-icon>
    </AppButton>

    <!-- GITHUB SIGN IN -->
    <AppButton
      @click="signInWithGithub"
      class="flex justify-center items-center"
    >
      <box-icon color="white" type="logo" name="github"></box-icon>
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import 'boxicons'
import {
  signInWithGoogle,
  signInWithGithub
} from '@/firebase/authenticationMethods'
export default {
  name: 'LoginCardAlternateSignIn',

  components: {
    AppButton
  },

  methods: {
    signInWithGoogle,
    signInWithGithub
  }
}
</script>

<style lang="scss" scoped></style>
