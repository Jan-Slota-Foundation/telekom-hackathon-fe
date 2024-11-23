<script setup>
import { userState } from '@/store/userStore.js'
</script>

<template>
  <div class="fixed top-4 right-4 flex gap-4 items-center">
    <div
      class="h-12 w-12 rounded-lg bg-slate-700 text-slate-400 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="size-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
    <div class="flex flex-col">
      <span class="text-slate-400 mb-1">
        {{ userState.userObject.email }}
      </span>
      <AppButton @click="signOut" class="text-xs py-1" variant="secondary"
        >Sign out</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import { signOut, getAuth } from 'firebase/auth'
export default {
  name: 'LoggedIn',
  components: {
    AppButton
  },
  methods: {
    async signOut() {
      try {
        await signOut(getAuth())
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
