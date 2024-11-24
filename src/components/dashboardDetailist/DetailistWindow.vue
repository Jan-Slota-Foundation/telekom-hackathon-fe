<script setup>
import { vulnerabilityStore } from '@/store/vulnerabilityStore'
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
      <div class="">
        <header class="mb-8">
          <h2 class="text-4xl mb-4 font-semibold tracking-wide">
            {{ vulnerabilityStore?.selectedExploit?.category }}
            {{ vulnerabilityStore?.selectedExploit?.items[0].Cwe }}
          </h2>
          <div class="">
            <AppSeverityChip
              :isDetailist="true"
              :status="vulnerabilityStore?.selectedExploit?.items[0].Severity"
              :count="vulnerabilityStore?.selectedExploit?.items.length"
            />
            <div class="flex gap-2 items-center">
              <span class="block font-semibold text-slate-400"
                >Checked by:
              </span>
              <span class="">ChatGPT | AutoGPT | Zep</span>
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur nam recusandae doloribus quam sequi quidem laborum,
            expedita non vero corporis sint repellendus dolorum voluptatum modi,
            eveniet libero quibusdam inventore dolorem!
            <!-- {{ formattedString }} -->
          </p>
        </div>
        <div class="mb-6">
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
            class="whitespace-pre-line leading-7 max-h-[15rem] overflow-scroll text-slate-300"
          >
            {{ formattedString }}
          </p>
        </div>
        <div class="mb-6">
          <h5 class="font-semibold tracking-wide mb-2 cursor-pointer">
            <span class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.478 1.6a.75.75 0 0 1 .273 1.026 3.72 3.72 0 0 0-.425 1.121c.058.058.118.114.18.168A4.491 4.491 0 0 1 12 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 0 0-.426-1.125.75.75 0 1 1 1.298-.752 5.22 5.22 0 0 1 .671 2.046.75.75 0 0 1-.187.582c-.241.27-.505.52-.787.749a4.494 4.494 0 0 1 .216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.742a23.122 23.122 0 0 0 3.832-.803 23.241 23.241 0 0 0-.345-2.634.75.75 0 0 1 1.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 0 1-.516.75c-1.527.499-3.119.854-4.76 1.049-.074.38-.22.735-.423 1.05 2.066.209 4.058.672 5.943 1.358a.75.75 0 0 1 .492.75 24.665 24.665 0 0 1-1.189 6.25.75.75 0 0 1-1.425-.47 23.14 23.14 0 0 0 1.077-5.306c-.5-.169-1.009-.32-1.524-.455.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.135-1.022.286-1.522.455.154 1.838.52 3.616 1.077 5.307a.75.75 0 1 1-1.425.468 24.662 24.662 0 0 1-1.19-6.25.75.75 0 0 1 .493-.749 24.586 24.586 0 0 1 4.964-1.24h.01c.321-.046.644-.085.969-.118a2.983 2.983 0 0 1-.424-1.05 24.614 24.614 0 0 1-4.76-1.05.75.75 0 0 1-.516-.75c.057-1.16.194-2.302.405-3.417a.75.75 0 0 1 1.474.28c-.164.862-.28 1.74-.345 2.634 1.237.371 2.517.642 3.832.803.085-.266.207-.515.359-.742a18.698 18.698 0 0 1-.547-.08c-.664-.11-1.311-.612-1.417-1.404a4.535 4.535 0 0 1 .217-2.103 6.788 6.788 0 0 1-.788-.751.75.75 0 0 1-.187-.583 5.22 5.22 0 0 1 .67-2.04.75.75 0 0 1 1.026-.273Z"
                  clip-rule="evenodd"
                />
              </svg>

              AutoGPT Report
            </span>
          </h5>
        </div>
      </div>
      <AppSummarizeAi class="mt-auto" />
    </div>
  </section>
</template>

<script>
import AppSummarizeAi from '../AppSummarizeAi.vue'
import AppButton from '@/components/AppButton.vue'
import AppSeverityChip from '@/components/AppSeverityChip.vue'
import API from '@/api/axiosInstance.js'
export default {
  name: 'DetailistWindow',

  computed: {
    formattedString() {
      let newString = new String(
        vulnerabilityStore?.selectedExploit?.items[0].Details
      )
      console.log(newString)
      newString = newString.replaceAll('\\n', '')
      // newString = newString.replaceAll('```', '\n\n')

      console.log(newString)
      return newString
    }
  },
  methods: {
    toggleDescriptionOpen() {
      this.isDescriptionOpen = !this.isDescriptionOpen
    },

    toggleChatGPTDescriptionOpen() {
      this.isChatGPTDescriptionOpen = !this.isChatGPTDescriptionOpen
    }
  },

  components: {
    AppSummarizeAi,
    AppButton,
    AppSeverityChip
  },

  data() {
    return {
      isDescriptionOpen: true,
      isChatGPTDescriptionOpen: false
    }
  }
}
</script>
