<script setup>
import { vulnerabilityStore } from '@/store/vulnerabilityStore'
</script>
<template>
  <div class="p-3">
    <h1 class="text-primary-600 text-5xl font-semibold">Penetration Tester</h1>
    <a href="">Static dependency analysis</a>
    <div
      v-if="!vulnerabilityStore.isLoaded"
      class="w-screen bg-slate-800 fixed left-0 top-0 h-screen flex items-center justify-center"
    >
      <DashboardLoader />
    </div>
    <div class="flex gap-4">
      <section class="flex flex-col gap-4">
        <DashboardExploitSelector />
        <AdditionalErrors />
      </section>
      <section class="min-w-[40rem]">
        <DetailistWindow />
      </section>
      <section class="max-w-[20rem]">
        <SideCard />
      </section>
    </div>
  </div>
</template>

<script>
import DashboardLoader from '@/components/dashboard/DashboardLoader.vue'
import API from '@/api/axiosInstance.js'
import DashboardExploitSelector from '@/components/dashboard/DashboardExploitSelector.vue'
import DetailistWindow from '@/components/dashboardDetailist/DetailistWindow.vue'
import SideCard from '@/components/dashboardRight/SideCard.vue'
import AdditionalErrors from '../components/dashboardadditionalerrors/AdditionalErrors.vue'

export default {
  name: 'DashboardView',

  components: {
    DashboardLoader,
    DashboardExploitSelector,
    DetailistWindow,
    SideCard,
    AdditionalErrors
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
