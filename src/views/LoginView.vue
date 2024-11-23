<template>
  <div class="flex items-center justify-center h-screen">
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from '@/components/login/LoginCard.vue'

export default {
  name: 'LoginView',
  components: {
    LoginCard
  }
}
</script>
