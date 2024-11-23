<template>
  <section
    class="rounded-2xl border border-slate-500 bg-slate-800 text-white px-10 py-16 w-[28rem] shadow-md max-w-[40rem] flex flex-col items-center overflow-hidden"
  >
    <!-- HEADER -->
    <div class="mb-8 text-center">
      <h1 class="text-5xl font-bold mb-1">Register an Account</h1>
      <h2 class="text-slate-500">Register a new account or sign in</h2>
    </div>

    <!-- LOGIN WITH USER DATA OR REGISTER A NEW ACCOUNT -->
    <RegisterCardForm />
    <router-link
      to="/login"
      class="hover:underline text-sm text-primary-700 font-semibold"
      >Or sign into an existing account
    </router-link>

    <!-- ALTERNATE SIGN IN COMPONENT -->
  </section>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import RegisterCardForm from '@/components/register/RegisterCardForm.vue'

export default {
  name: 'LoginCard',
  components: {
    AppButton,
    RegisterCardForm
  }
}
</script>
