<template>
  <form
    @submit.prevent="signInUsingEmailAndPassword(inputEmail, inputPassword)"
    class="flex flex-col items-center w-full"
  >
    <!-- EMAIL INPUT -->
    <input
      type="text"
      v-model="inputEmail"
      placeholder="e-mail"
      class="login-input"
    />

    <!-- PASSWORD INPUT -->
    <input
      type="password"
      v-model="inputPassword"
      placeholder="password"
      class="login-input"
    />

    <!-- SIGN IN BUTTON -->
    <AppButton class="tracking-tight text-base pb-3 min-w-72 max-w-72 mt-3 mb-2"
      >Sign in
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import { signInUsingEmailAndPassword } from '@/firebase/authenticationMethods.js'

export default {
  name: 'LoginCardForm',

  components: {
    AppButton
  },

  data() {
    return {
      inputEmail: '',
      inputPassword: ''
    }
  },

  methods: {
    signInUsingEmailAndPassword
  }
}
</script>

<style scoped>
.login-input {
  @apply rounded-lg px-5 w-full py-3 mb-4 outline-none bg-slate-700;
}
</style>
