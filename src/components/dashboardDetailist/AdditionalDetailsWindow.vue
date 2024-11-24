<script setup>
import { vulnerabilityStore } from '../../store/vulnerabilityStore'
</script>
<template>
  <section
    class="px-8 py-4 border h-full border-slate-500 rounded-lg min-h-[38rem] max-w-[40rem]"
  >
    <div class="h-full" v-if="!vulnerabilityStore?.selectedExploit">
      <h1 class="text-4xl mb-4 font-semibold tracking-wide">
        Select a vulnerability
      </h1>
      <p class="text-slate-300">
        Click on a vulnerability to view more details
      </p>
    </div>

    <div
      class="flex justify-between h-full flex-col items-start w-full"
      v-if="vulnerabilityStore?.selectedExploit"
    >
      <header class="mb-8">
        <h2 class="text-4xl mb-4 font-semibold tracking-wide">
          {{ vulnerabilityStore?.selectedExploit?.name }}
        </h2>

        <div class="">
          <!-- APP CHIP -->
          <div class="flex gap-2 items-center">
            <span class="block font-semibold text-slate-400">Checked by: </span>
            <span class="">ChatGPT | AutoGPT | Zap</span>
          </div>
        </div>
      </header>
      <div class="mb-6">
        <h5
          @click="toggleChatGPTDescriptionOpen"
          class="font-semibold tracking-wide mb-2 cursor-pointer"
        >
          <span class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clip-rule="evenodd"
              />
            </svg>

            What ChatGPT thinks?
          </span>
        </h5>
        <p
          v-if="isChatGPTDescriptionOpen"
          class="whitespace-pre-line mb-4 leading-7 max-h-[15rem] overflow-scroll text-slate-300"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          nam recusandae doloribus quam sequi quidem laborum, expedita non vero
          corporis sint repellendus dolorum voluptatum modi, eveniet libero
          quibusdam inventore dolorem!
          <!-- {{ formattedString }} -->
        </p>
      </div>

      <div v-if="formattedString" class="mb-6">
        <h5
          @click="toggleDescriptionOpen"
          class="font-semibold tracking-wide mb-2 cursor-pointer"
        >
          <span class="flex gap-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 inline-block"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
            </svg>
            Description
          </span>
        </h5>
        <p
          v-if="isDescriptionOpen"
          v-html="formattedString"
          class="whitespace-pre-line leading-7 max-h-[15rem] overflow-scroll text-slate-300"
        ></p>
      </div>

      <div class="mb-6">
        <h5
          @click="toggleFixDescriptionOpen"
          class="font-semibold tracking-wide mb-2 cursor-pointer"
        >
          <span class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                clip-rule="evenodd"
              />
            </svg>
            Solution
          </span>
        </h5>
        <p
          v-if="isFixDescriptionOpen"
          v-html="vulnerabilityStore?.selectedExploit?.solution"
          class="whitespace-pre-line leading-7 max-h-[15rem] overflow-scroll text-slate-300"
        ></p>
      </div>

      <AppSummarizeAi class="mt-auto" />
    </div>
  </section>
</template>

<script>
import AppSummarizeAi from '../AppSummarizeAi.vue'

export default {
  name: 'AdditionalDetailsWindow',
  methods: {
    toggleDescriptionOpen() {
      this.isDescriptionOpen = !this.isDescriptionOpen
    },

    toggleChatGPTDescriptionOpen() {
      this.isChatGPTDescriptionOpen = !this.isChatGPTDescriptionOpen
    },

    toggleFixDescriptionOpen() {
      this.isFixDescriptionOpen = !this.isFixDescriptionOpen
    }
  },

  computed: {
    formattedString() {
      let newString = new String(vulnerabilityStore?.selectedExploit.desc)
      console.log(newString)
      newString = newString.replaceAll('\\n', '')
      // newString = newString.replaceAll('```', '\n\n')

      console.log(newString)
      return newString
    }
  },

  data() {
    return {
      isDescriptionOpen: true,
      isChatGPTDescriptionOpen: false,
      isFixDescriptionOpen: false
    }
  }
}
</script>
