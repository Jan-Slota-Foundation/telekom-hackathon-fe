<template>
  <section
    class="rounded-2xl border border-slate-500 bg-slate-800 text-white px-10 py-16 w-[28rem] shadow-md max-w-[40rem] flex flex-col items-center overflow-hidden"
  >
    <!-- HEADER -->
    <div class="mb-8 text-center">
      <h1 class="text-5xl font-bold mb-1">Welcome back</h1>
      <h2 class="text-slate-500">Please sign in or register a new account</h2>
    </div>

    <!-- LOGIN WITH USER DATA OR REGISTER A NEW ACCOUNT -->
    <LoginCardForm />
    <router-link
      to="/register"
      class="hover:underline text-sm text-primary-700 font-semibold"
      >Register new account
    </router-link>

    <!-- ALTERNATE SIGN IN COMPONENT -->
    <span class="text-sm font-semibold mb-3 mt-8 text-slate-300"
      >or sign in with</span
    >
    <LoginCardAlternateSignIn />
  </section>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import LoginCardForm from '@/components/login/LoginCardForm.vue'
import LoginCardAlternateSignIn from '@/components/login/LoginCardAlternateSignIn.vue'

export default {
  name: 'LoginCard',
  components: {
    AppButton,
    LoginCardForm,
    LoginCardAlternateSignIn
  }
}
</script>
