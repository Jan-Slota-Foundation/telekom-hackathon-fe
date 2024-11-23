<script setup>
import { onMounted } from 'vue'
</script>

<template>
  <router-view />
</template>

<script>
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { userState } from './store/userStore'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase/init'
import router from './router'

export default {
  name: 'default',

  mounted() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        userState.userObject = user
        router.push('/home')

        console.log(getAuth().currentUser)
      } else {
        console.log('there is no user')
      }
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap');

* {
  font-family: 'Outfit', sans-serif;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #334155 inset !important;
    -webkit-text-fill-color: #fff;
  }
}
</style>
