<template>
  <div class="max-w-[21rem] border rounded-lg border-slate-500 p-2">
    <h3 class="text-center text-lg mb-4 text-primary-600 font-medium">
      Additionally Found Vulnerabilities
    </h3>

    <ul class="overflow-y-scroll h-[10rem] flex flex-col gap-2">
      <li
        v-for="(additionalCategory, index) in additionalCategories"
        :key="index"
        class="bg-slate-800 flex justify-between text-sm rounded-lg py-2 px-4"
      >
        <span class="text-sm truncate max-w-32">
          {{ additionalCategory.name }}
        </span>
        <span
          :class="[
            additionalCategory.riskdesc === 'Medium (Medium)'
              ? 'bg-orange-700'
              : '',
            additionalCategory.riskdesc === 'High (Low)' ? 'bg-red-700' : '',
            additionalCategory.riskdesc === 'Medium (High)' ? 'bg-red-600' : '',
            additionalCategory.riskdesc === 'Low (Medium)'
              ? 'bg-orange-400'
              : ''
          ]"
        >
          {{ additionalCategory.riskdesc }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import DashboardVulnerabilityGroup from '@/components/dashboard/DashboardVulnerabilityGroup.vue'
import API from '@/api/axiosInstance.js'

export default {
  name: 'AdditionalErros',

  components: {
    DashboardVulnerabilityGroup
  },

  async mounted() {
    this.getZepCheckedFiles()
  },

  computed: {
    classByRisk(riskdesc) {
      let final = ''

      switch (riskdesc) {
        case 'Medium':
          final = 'bg-red-700'
          break

        default:
          break
      }

      return final
    }
  },

  methods: {
    async getZepCheckedFiles() {
      try {
        let zepResponse = await API.get('/zapcheck')
        console.log(zepResponse.data)
        this.additionalCategories = zepResponse.data
      } catch (error) {
        console.log(error)
      }
    }
  },

  data() {
    return {
      additionalCategories: []
    }
  }
}
</script>
