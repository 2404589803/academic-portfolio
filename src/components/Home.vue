<template>
  <div class="min-h-screen pt-16 pb-20">
    <div class="page-container">
      <!-- Hero Section: Split Pane IDE Style -->
      <div class="mb-12 animate-fade-in-up">
        <div class="bg-editor-bg border border-editor-line rounded-lg overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <!-- Window Title Bar -->
          <div
            class="bg-editor-sidebar px-4 py-3 flex items-center justify-between border-b border-editor-line select-none">
            <div class="flex items-center space-x-2">
              <div class="flex space-x-2 mr-4">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
              </div>
              <div class="flex space-x-1 text-sm font-mono">
                <span class="text-editor-fg opacity-60">~/academic-portfolio/</span>
                <span class="text-editor-fg font-bold">profile.config.ts</span>
              </div>
            </div>
            <div class="text-xs text-editor-fg opacity-40 font-mono">TypeScript</div>
          </div>

          <!-- Main Editor Area -->
          <div class="flex flex-col md:flex-row">
            <!-- Code Pane -->
            <div class="flex-1 p-6 md:p-8 font-mono text-sm md:text-base overflow-x-auto bg-[#1e1e1e]">
              <div class="flex">
                <!-- Line Numbers -->
                <div
                  class="text-editor-line select-none pr-4 text-right border-r border-editor-line mr-4 opacity-50 font-mono text-xs md:text-sm leading-relaxed">
                  <div v-for="n in 18" :key="n">{{ n }}</div>
                </div>
                <!-- Code -->
                <div class="w-full leading-relaxed">
                  <div><span class="text-editor-keyword">export const</span> <span
                      class="text-editor-function">developer</span> <span class="text-editor-fg">=</span> <span
                      class="text-editor-fg">{</span></div>
                  <div class="pl-4">
                    <span class="text-editor-fg">name:</span> <span class="text-editor-string">"{{ t('profile.name')
                    }}"</span><span class="text-editor-fg">,</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">title:</span> <span class="text-editor-string">"{{ t('profile.title')
                    }}"</span><span class="text-editor-fg">,</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">roles:</span> <span class="text-editor-fg">[</span>
                  </div>
                  <div class="pl-8">
                    <span class="text-editor-string">"AI Researcher"</span><span class="text-editor-fg">,</span>
                  </div>
                  <div class="pl-8">
                    <span class="text-editor-string">"Full Stack Developer"</span><span class="text-editor-fg">,</span>
                  </div>
                  <div class="pl-8">
                    <span class="text-editor-string">"Open Source Contributor"</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">],</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">status:</span> <span class="text-editor-string">"Coding..."</span><span
                      class="text-editor-fg">,</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">skills:</span> <span class="text-editor-fg">{</span>
                  </div>
                  <div class="pl-8">
                    <span class="text-editor-fg">languages:</span> <span class="text-editor-fg">[</span><span
                      class="text-editor-string">"Python"</span><span class="text-editor-fg">,</span> <span
                      class="text-editor-string">"TypeScript"</span><span class="text-editor-fg">,</span> <span
                      class="text-editor-string">"C++"</span><span class="text-editor-fg">],</span>
                  </div>
                  <div class="pl-8">
                    <span class="text-editor-fg">frameworks:</span> <span class="text-editor-fg">[</span><span
                      class="text-editor-string">"PyTorch"</span><span class="text-editor-fg">,</span> <span
                      class="text-editor-string">"Vue.js"</span><span class="text-editor-fg">,</span> <span
                      class="text-editor-string">"Tailwind"</span><span class="text-editor-fg">]</span>
                  </div>
                  <div class="pl-4">
                    <span class="text-editor-fg">}</span>
                  </div>
                  <div><span class="text-editor-fg">};</span></div>
                  <div class="mt-2">
                    <span class="text-editor-comment">// <span class="animate-pulse">_</span></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Preview/Avatar Pane (Right Side) -->
            <div
              class="w-full md:w-80 bg-editor-sidebar border-l border-editor-line p-6 flex flex-col items-center justify-center relative overflow-hidden">
              <!-- Background decoration -->
              <div
                class="absolute inset-0 opacity-10 bg-[radial-gradient(#4ec9b0_1px,transparent_1px)] [background-size:16px_16px]">
              </div>

              <div class="relative z-10 text-center">
                <div class="relative inline-block mb-6 group">
                  <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500">
                  </div>
                  <img src="/0007.jpg" :alt="t('profile.name')"
                    class="relative w-40 h-40 rounded-full border-4 border-editor-bg object-cover shadow-xl" />
                  <!-- Online Status Indicator -->
                  <div
                    class="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-editor-sidebar rounded-full">
                  </div>
                </div>

                <h2 class="text-xl font-bold text-editor-fg mb-1">{{ t('profile.name') }}</h2>
                <p class="text-sm text-editor-keyword font-mono mb-4">@rose北港</p>

                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contribution Graph Section -->
      <div class="mb-16 max-w-5xl mx-auto">
        <div class="bg-editor-bg border border-editor-line rounded-lg p-4 shadow-lg">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-mono text-editor-fg">Contribution Activity</h3>
            <div class="text-xs text-editor-comment font-mono">1,234 contributions in the last year</div>
          </div>
          <div class="flex justify-center overflow-x-auto pb-2">
            <div class="flex gap-[3px]">
              <div v-for="week in 52" :key="week" class="flex flex-col gap-[3px]">
                <div v-for="day in 7" :key="day"
                  class="w-3 h-3 rounded-[2px] transition-all duration-300 hover:scale-125"
                  :class="getContributionClass()" :title="`Contribution level`"></div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end gap-2 mt-2 text-xs text-editor-fg font-mono opacity-60">
            <span>Less</span>
            <div class="w-3 h-3 rounded-[2px] bg-[#2d2d2d]"></div>
            <div class="w-3 h-3 rounded-[2px] bg-[#0e4429]"></div>
            <div class="w-3 h-3 rounded-[2px] bg-[#006d32]"></div>
            <div class="w-3 h-3 rounded-[2px] bg-[#26a641]"></div>
            <div class="w-3 h-3 rounded-[2px] bg-[#39d353]"></div>
            <span>More</span>
          </div>
        </div>
      </div>

      <!-- Terminal Section: Experience & About -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-[#1e1e1e] rounded-lg border border-editor-line shadow-xl overflow-hidden">
          <!-- Terminal Tabs -->
          <div class="flex bg-editor-sidebar border-b border-editor-line text-sm font-mono">
            <button @click="activeTab = 'terminal'"
              :class="['px-4 py-2 border-r border-editor-line flex items-center', activeTab === 'terminal' ? 'bg-[#1e1e1e] text-editor-fg' : 'text-gray-500 hover:bg-[#2a2a2a]']">
              <span class="mr-2">$_</span> terminal
            </button>
            <button @click="activeTab = 'output'"
              :class="['px-4 py-2 border-r border-editor-line flex items-center', activeTab === 'output' ? 'bg-[#1e1e1e] text-editor-fg' : 'text-gray-500 hover:bg-[#2a2a2a]']">
              <span class="mr-2">ℹ</span> output
            </button>
          </div>

          <!-- Terminal Content -->
          <div class="p-6 font-mono text-sm md:text-base h-[400px] overflow-y-auto custom-scrollbar">
            <div v-if="activeTab === 'terminal'">
              <!-- Command 1: whoami -->
              <div class="mb-6">
                <div class="flex items-center text-editor-fg mb-2">
                  <span class="text-green-500 mr-2">➜</span>
                  <span class="text-blue-400 mr-2">~</span>
                  <span class="text-editor-fg">whoami</span>
                </div>
                <div class="text-editor-fg opacity-80 pl-4 border-l-2 border-editor-line">
                  {{ t('profile.greeting') }}
                </div>
              </div>

              <!-- Command 2: cat experience.log -->
              <div class="mb-6">
                <div class="flex items-center text-editor-fg mb-2">
                  <span class="text-green-500 mr-2">➜</span>
                  <span class="text-blue-400 mr-2">~</span>
                  <span class="text-editor-fg">cat ./experience.log</span>
                </div>
                <div class="pl-4 border-l-2 border-editor-line space-y-4">
                  <div class="group">
                    <div class="text-editor-keyword font-bold">[{{ t('experience.metadigits.time') }}]</div>
                    <div class="text-editor-function">{{ t('experience.metadigits.company') }}</div>
                    <div class="text-editor-fg opacity-80">> {{ t('experience.metadigits.role') }}</div>
                  </div>
                  <div class="group">
                    <div class="text-editor-keyword font-bold">[{{ t('experience.imaginix.time') }}]</div>
                    <div class="text-editor-function">{{ t('experience.imaginix.company') }}</div>
                    <div class="text-editor-fg opacity-80">> {{ t('experience.imaginix.role') }}</div>
                  </div>
                  <div class="group">
                    <div class="text-editor-keyword font-bold">[{{ t('experience.zhipu.time') }}]</div>
                    <div class="text-editor-function">{{ t('experience.zhipu.company') }}</div>
                    <div class="text-editor-fg opacity-80">> {{ t('experience.zhipu.role') }}</div>
                  </div>
                </div>
              </div>

              <!-- Command 3: ls projects -->
              <div>
                <div class="flex items-center text-editor-fg mb-2">
                  <span class="text-green-500 mr-2">➜</span>
                  <span class="text-blue-400 mr-2">~</span>
                  <span class="text-editor-fg">ls -la ./projects</span>
                </div>
                <div class="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <router-link to="/projects"
                    class="block p-3 border border-editor-line rounded hover:border-editor-keyword hover:bg-editor-active transition-all group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-editor-function font-bold">{{ t('projects.zero_haruhi.title') }}</span>
                      <span class="text-xs text-editor-comment">Public</span>
                    </div>
                    <div class="text-xs text-editor-fg opacity-60 group-hover:opacity-100">
                      {{ t('projects.zero_haruhi.subtitle') }}
                    </div>
                  </router-link>
                  <router-link to="/projects"
                    class="block p-3 border border-editor-line rounded hover:border-editor-keyword hover:bg-editor-active transition-all group">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-editor-function font-bold">{{ t('projects.face_extract.title') }}</span>
                      <span class="text-xs text-editor-comment">Public</span>
                    </div>
                    <div class="text-xs text-editor-fg opacity-60 group-hover:opacity-100">
                      {{ t('projects.face_extract.description') }}
                    </div>
                  </router-link>
                </div>
                <!-- Cursor -->
                <div class="mt-4 flex items-center">
                  <span class="text-green-500 mr-2">➜</span>
                  <span class="text-blue-400 mr-2">~</span>
                  <span class="animate-pulse w-2 h-4 bg-editor-fg block"></span>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'output'">
              <div class="text-editor-comment">
                // System Build Output<br>
                // -------------------
              </div>
              <div class="mt-2 space-y-1">
                <div class="text-editor-fg"><span class="text-green-500">✔</span> Loaded profile configuration</div>
                <div class="text-editor-fg"><span class="text-green-500">✔</span> Connected to GitHub API</div>
                <div class="text-editor-fg"><span class="text-green-500">✔</span> Fetched 3 featured projects</div>
                <div class="text-editor-fg"><span class="text-green-500">✔</span> Initialized neural network background
                </div>
                <div class="text-editor-fg"><span class="text-yellow-500">⚠</span> Coffee level low (30%)</div>
                <div class="text-editor-fg mt-4">
                  <span class="text-blue-400">info</span> Ready to code.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SocialIcons from './SocialIcons.vue'

const { t } = useI18n()
const activeTab = ref('terminal')

// Simulate GitHub contribution graph colors
const getContributionClass = () => {
  const rand = Math.random()
  if (rand > 0.9) return 'bg-[#39d353]' // High
  if (rand > 0.7) return 'bg-[#26a641]' // Medium
  if (rand > 0.5) return 'bg-[#006d32]' // Low
  if (rand > 0.3) return 'bg-[#0e4429]' // Very Low
  return 'bg-[#2d2d2d]' // None
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>