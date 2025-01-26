<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Neural Network Background -->
    <NeuralNetwork />
    
    <!-- AI Grid Background -->
    <div class="absolute inset-0 bg-grid opacity-5"></div>
    
    <div class="page-container py-8 relative z-10">
      <!-- 返回按钮 -->
      <div class="mb-8">
        <router-link to="/" class="inline-flex items-center px-4 py-2 text-academic-accent hover:text-academic-secondary transition-colors duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          {{ t('nav.back') }}
        </router-link>
      </div>

      <article class="prose prose-lg mx-auto">
        <!-- 开发项目 -->
        <div class="academic-card mb-8">
          <h2 class="academic-title text-2xl mb-4 text-center">{{ t('sections.projects') }}</h2>
          <ul class="space-y-4">
            <li class="project-item">
              <strong class="text-academic-accent">{{ t('projects.zero_haruhi.title') }}</strong>
              <span class="text-academic-secondary">{{ t('projects.zero_haruhi.subtitle') }}</span>
              <div class="mt-2">
                <a href="https://github.com/LC1332/Zero-Haruhi" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">{{ t('projects.zero_haruhi.repo') }}</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
            <li class="project-item">
              <strong class="text-academic-accent">{{ t('projects.face_extract.title') }}</strong>
              <div class="text-sm text-academic-secondary mt-1">{{ t('projects.face_extract.description') }}</div>
              <div class="mt-2">
                <a href="https://github.com/LC1332/smooth-face-extract" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">{{ t('projects.face_extract.repo') }}</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 开源社区贡献 -->
        <div class="academic-card">
          <h2 class="academic-title text-2xl mb-4 text-center">{{ t('sections.contributions') }}</h2>
          <ul class="space-y-4">
            <li class="contribution-item">
              <div class="flex items-center">
                <span class="text-academic-accent mr-2">🤗</span>
                <strong class="text-academic-primary">{{ t('contributions.huggingface.title') }}</strong>
              </div>
              <div class="text-academic-secondary ml-6">{{ t('contributions.huggingface.role') }}</div>
              <div class="mt-2 ml-6">
                <a href="https://github.com/huggingface/huggingface_hub/pull/1916" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="ai-link">
                  <span class="link-text">{{ t('contributions.huggingface.pr') }}</span>
                  <span class="link-arrow">→</span>
                </a>
              </div>
            </li>
            <li class="contribution-item">
              <div class="flex items-center">
                <span class="text-academic-accent mr-2">🤗</span>
                <strong class="text-academic-primary">{{ t('contributions.blog.title') }}</strong>
              </div>
              <ul class="ml-6 mt-2 space-y-2 text-academic-secondary">
                <li>The Llama Hitchhiking Guide to Local LLMs</li>
                <li>Sentence Embeddings</li>
                <li>leaderboard-contextual</li>
                <li>websight</li>
                <li>
                  <a href="https://github.com/huggingface-cn/hf-blog-translation/pull/140" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="ai-link">
                    <span class="link-text">fine-video</span>
                    <span class="link-arrow">→</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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

<style scoped>
/* 背景网格 */
.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}

.project-item, .contribution-item {
  @apply p-4 rounded-lg bg-academic-paper transition-all duration-300;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.project-item:hover, .contribution-item:hover {
  @apply transform scale-[1.02] shadow-lg;
}

/* AI链接样式 */
.ai-link {
  @apply inline-flex items-center space-x-1 text-academic-accent hover:text-academic-secondary transition-colors duration-300;
}

.link-arrow {
  @apply transform transition-transform duration-300;
}

.ai-link:hover .link-arrow {
  @apply translate-x-1;
}
</style> 