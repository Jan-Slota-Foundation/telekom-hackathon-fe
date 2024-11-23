<template>
  <form
    @submit.prevent="createAnAccount(inputEmail, inputPassword)"
    class="flex flex-col items-center w-full mb-4"
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

    <AppButton class="tracking-tight text-base pb-3 min-w-72 max-w-72 mt-3"
      >Register an account
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import { createAnAccount } from '@/firebase/authenticationMethods.js'

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
    createAnAccount
  }
}
</script>

<style scoped>
.login-input {
  @apply rounded-lg px-5 w-full py-3 mb-4 outline-none bg-slate-700;
}
</style>
