<template>
  <h3 class="mb-2 text-slate-200 font-semibold">Detected vulnerabilities</h3>
  <div
    :class="[
      'bg-slate-900 px-12 w-1/2 py-8 mb-4 flex items-center justify-center border-2 border-dashed  rounded-lg',
      hasFile ? 'border-emerald-500 text-emerald-400' : 'border-slate-500'
    ]"
    @drop.prevent="handleFileDrop"
    @dragover.prevent
  >
    <p v-if="!files[0]" class="text-slate-300">Drop .csv here</p>
    <ul v-else>
      <li v-for="file in files" :key="file.name">
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import csv from '@/store/fileDrop.js'
import API from '@/api/axiosInstance.js'
export default {
  name: 'AppFileDrop',
  data() {
    return {
      files: [],
      hasFile: false
    }
  },
  methods: {
    handleFileDrop(event) {
      this.files = event.dataTransfer.files
      const file = this.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const content = e.target.result
          csv.text = content
          console.log(csv.text)
        }
        reader.readAsText(file)
        this.hasFile = true
      }
    }
  }
}
</script>
