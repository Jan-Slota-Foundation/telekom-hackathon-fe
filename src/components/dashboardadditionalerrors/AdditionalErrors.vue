<script setup>
import { vulnerabilityStore } from '../../store/vulnerabilityStore'
</script>

<template>
  <div class="max-w-[21rem] border rounded-lg border-slate-500 p-2">
    <h3 class="text-center text-lg mb-4 text-primary-600 font-medium">
      Additionally Found Vulnerabilities
    </h3>

    <ul class="overflow-y-scroll h-[10rem] flex flex-col gap-2">
      <li
        v-for="(additionalCategory, index) in additionalCategories"
        :key="index"
        @click="activateAdditionalError(additionalCategory)"
        :class="[
          'bg-slate-800 items-center flex justify-between text-sm rounded-lg py-1 px-4',
          additionalCategory.name === vulnerabilityStore?.selectedExploit?.name
            ? 'border border-slate-500'
            : 'border-transparent border'
        ]"
      >
        <span class="text-sm truncate max-w-32">
          {{ additionalCategory.name }}
        </span>
        <span
          :class="[
            ' py-1 rounded-full px-3 text-xs font-medium',
            additionalCategory.riskdesc === 'Medium (Medium)'
              ? 'border-2 border-orange-700 text-orange-700'
              : '',
            additionalCategory.riskdesc === 'High (Low)'
              ? 'border-2 border-red-700 text-red-700'
              : '',
            additionalCategory.riskdesc === 'Medium (High)'
              ? 'border-2 border-red-600 text-red-600'
              : '',
            additionalCategory.riskdesc === 'Low (Medium)'
              ? 'border-2 border-orange-400 text-orange-400'
              : ''
          ]"
        >
          {{ additionalCategory.count }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import API from '@/api/axiosInstance.js'
export default {
  name: 'AdditionalErros',

  components: {},

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
    },

    activateAdditionalError(additionalLog) {
      vulnerabilityStore.selectedExploit = additionalLog
      console.log(vulnerabilityStore.selectedExploit)
    }
  },

  data() {
    return {
      additionalCategories: []
    }
  }
}
</script>
