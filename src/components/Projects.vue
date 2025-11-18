<template>
  <div class="min-h-screen pt-20 pb-20">
    <div class="page-container">
      <!-- Navigation -->
      <div class="mb-8">
        <router-link to="/" class="text-editor-keyword hover:underline font-mono">
          cd ..
        </router-link>
      </div>

      <article class="max-w-4xl mx-auto">
        <!-- Projects: File Explorer Style -->
        <div class="mb-12">
          <h2 class="section-title">{{ t('sections.projects') }}</h2>
          <div class="bg-editor-sidebar rounded-lg border border-editor-line overflow-hidden">
            <div class="px-4 py-2 bg-editor-bg border-b border-editor-line text-sm text-editor-fg opacity-60 font-mono">
              ~/projects
            </div>
            <div class="p-2">
              <div class="group flex items-center p-2 hover:bg-editor-active rounded cursor-pointer transition-colors">
                <span class="mr-3 text-xl">📁</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-editor-function font-mono font-bold">{{ t('projects.zero_haruhi.title') }}</span>
                    <span class="text-xs text-editor-comment font-mono border border-editor-line px-2 rounded">{{
                      t('projects.zero_haruhi.subtitle') }}</span>
                  </div>
                  <div class="mt-1">
                    <a href="https://github.com/LC1332/Zero-Haruhi" target="_blank"
                      class="text-sm text-editor-keyword hover:underline font-mono flex items-center">
                      <span class="mr-1">git clone</span> {{ t('projects.zero_haruhi.repo') }}
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="group flex items-center p-2 hover:bg-editor-active rounded cursor-pointer transition-colors mt-2">
                <span class="mr-3 text-xl">📁</span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <span class="text-editor-function font-mono font-bold">{{ t('projects.face_extract.title') }}</span>
                  </div>
                  <div class="text-sm text-editor-fg opacity-80 mt-1">{{ t('projects.face_extract.description') }}</div>
                  <div class="mt-1">
                    <a href="https://github.com/LC1332/smooth-face-extract" target="_blank"
                      class="text-sm text-editor-keyword hover:underline font-mono flex items-center">
                      <span class="mr-1">git clone</span> {{ t('projects.face_extract.repo') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contributions: Git Log Style -->
        <div>
          <h2 class="section-title">{{ t('sections.contributions') }}</h2>
          <div class="font-mono text-sm">
            <div class="mb-6">
              <div class="flex items-center text-editor-comment mb-2">
                <span class="mr-2">*</span>
                <span>{{ t('contributions.huggingface.title') }}</span>
              </div>
              <div class="pl-4 border-l-2 border-editor-line ml-1">
                <div class="text-editor-fg mb-1">{{ t('contributions.huggingface.role') }}</div>
                <a href="https://github.com/huggingface/huggingface_hub/pull/1916" target="_blank"
                  class="text-editor-keyword hover:underline">
                  PR #1916: {{ t('contributions.huggingface.pr') }}
                </a>
              </div>
            </div>

            <div>
              <div class="flex items-center text-editor-comment mb-2">
                <span class="mr-2">*</span>
                <span>{{ t('contributions.blog.title') }}</span>
              </div>
              <div class="pl-4 border-l-2 border-editor-line ml-1 space-y-2">
                <div class="text-editor-fg">The Llama Hitchhiking Guide to Local LLMs</div>
                <div class="text-editor-fg">Sentence Embeddings</div>
                <div class="text-editor-fg">leaderboard-contextual</div>
                <div class="text-editor-fg">websight</div>
                <div>
                  <a href="https://github.com/huggingface-cn/hf-blog-translation/pull/140" target="_blank"
                    class="text-editor-keyword hover:underline">
                    fine-video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NeuralNetwork from './NeuralNetwork.vue'

const { t } = useI18n()
</script>