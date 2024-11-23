<script setup>
import { vulnerabilityStore } from '@/store/vulnerabilityStore'
</script>
<template>
  <div class="p-3">
    <div
      v-if="!vulnerabilityStore.isLoaded"
      class="w-screen fixed left-0 top-0 h-screen flex items-center justify-center"
    >
      <DashboardLoader />
    </div>
    <div class="flex gap-4">
      <section class="">
        <DashboardExploitSelector />
      </section>
      <section>
        <DetailistWindow />
      </section>
    </div>
  </div>
</template>

<script>
import DashboardLoader from '@/components/dashboard/DashboardLoader.vue'
import API from '@/api/axiosInstance.js'
import DashboardExploitSelector from '@/components/dashboard/DashboardExploitSelector.vue'
import DetailistWindow from '@/components/dashboardDetailist/DetailistWindow.vue'

export default {
  name: 'DashboardView',

  components: {
    DashboardLoader,
    DashboardExploitSelector,
    DetailistWindow
  },

  async mounted() {
    setTimeout(() => {
      this.getVulnerabilities()
    }, 4000)
  },

  data() {
    return {
      vulnerabilities: []
    }
  },

  computed: {
    sortedVulnerabilities() {
      return this.vulnerabilities.sort((a, b) => {
        const severityOrder = ['critical', 'high', 'medium', 'low', 'unknown']
        return (
          severityOrder.indexOf(a.Severity) - severityOrder.indexOf(b.Severity)
        )
      })
    }
  },

  methods: {
    async getVulnerabilities() {
      try {
        let response = await API.get('/results')
        this.vulnerabilities = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
