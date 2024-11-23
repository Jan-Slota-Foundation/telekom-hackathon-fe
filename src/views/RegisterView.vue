<template>
  <div class="flex items-center justify-center h-screen">
    <RegisterCard></RegisterCard>
  </div>
</template>

<script>
import RegisterCard from '@/components/register/RegisterCard.vue'
export default {
  name: 'RegisterView',

  components: {
    RegisterCard
  }
}
</script>
