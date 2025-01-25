<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Neural Network Background -->
    <NeuralNetwork />
    
    <!-- AI Grid Background -->
    <div class="absolute inset-0 bg-grid opacity-5"></div>
    
    <!-- Glowing Orbs -->
    <div class="glow-orb-1"></div>
    <div class="glow-orb-2"></div>

    <!-- Language Switcher -->
    <div class="absolute top-4 right-4 z-20">
      <div class="language-switcher">
        <button 
          v-for="lang in ['zh', 'en']" 
          :key="lang"
          @click="locale = lang"
          :class="['lang-btn', { active: locale === lang }]"
        >
          {{ lang === 'zh' ? '中文' : 'English' }}
        </button>
      </div>
    </div>

    <div class="page-container py-8 relative z-10">
      <article class="prose prose-lg mx-auto">
        <!-- 个人简介卡片 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300 text-center">
          <div class="card-glow"></div>
          <div class="avatar-container mb-6">
            <img src="/0007.jpg" :alt="t('profile.name')" class="avatar-image" />
          </div>
          <h1 class="academic-title text-4xl mb-2">{{ t('profile.name') }}</h1>
          <h2 class="text-2xl mb-4 text-academic-secondary font-light">{{ t('profile.title') }}</h2>
          <!-- 社交媒体图标 -->
          <SocialIcons />
          <p class="mt-6 text-academic-secondary">
            {{ t('profile.roles') }}
          </p>
        </div>

        <!-- 个人简介卡片 -->
        <div class="academic-card mb-8 hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 text-center">{{ t('sections.about') }}</h2>
          <div class="text-academic-secondary space-y-4 text-justify leading-relaxed">
            <p>{{ t('profile.greeting') }}</p>
            <p>{{ t('profile.skills') }}</p>
            <p>{{ t('profile.community') }}</p>
          </div>
        </div>

        <!-- 实习经历 -->
        <div class="academic-card hover:transform hover:scale-102 transition-all duration-300">
          <div class="card-glow"></div>
          <h2 class="academic-title text-2xl mb-4 text-center">{{ t('sections.experience') }}</h2>
          <ul class="space-y-6">
            <li class="experience-item">
              <div class="time-badge">{{ t('experience.metadigits.time') }}</div>
              <div class="company-name">{{ t('experience.metadigits.company') }}</div>
              <div class="project-name">{{ t('experience.metadigits.project') }}</div>
              <div class="role">{{ t('experience.metadigits.role') }}</div>
            </li>
            <li class="experience-item">
              <div class="time-badge">{{ t('experience.imaginix.time') }}</div>
              <div class="company-name">{{ t('experience.imaginix.company') }}</div>
              <div class="location">📍 {{ t('experience.imaginix.location') }}</div>
              <div class="project-name">{{ t('experience.imaginix.project') }}</div>
              <div class="role">{{ t('experience.imaginix.role') }}</div>
            </li>
            <li class="experience-item">
              <div class="time-badge">{{ t('experience.zhipu.time') }}</div>
              <div class="company-name">{{ t('experience.zhipu.company') }}</div>
              <div class="role">{{ t('experience.zhipu.role') }}</div>
            </li>
          </ul>
        </div>

        <!-- 导航按钮 -->
        <div class="mt-8 text-center">
          <router-link to="/projects" class="inline-flex items-center px-6 py-3 bg-academic-accent text-white rounded-full hover:bg-academic-secondary transition-colors duration-300">
            {{ t('nav.projects') }}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NeuralNetwork from './NeuralNetwork.vue'
import SocialIcons from './SocialIcons.vue'

const { t, locale } = useI18n()
</script>

<style scoped>
.prose {
  max-width: 100ch;
}

/* 背景网格 */
.bg-grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}

/* 发光球体 */
.glow-orb-1, .glow-orb-2 {
  @apply absolute rounded-full blur-3xl opacity-10;
  background: radial-gradient(circle, rgba(0, 102, 204, 0.3) 0%, rgba(0, 102, 204, 0) 70%);
}

.glow-orb-1 {
  @apply top-20 -left-20;
  width: 400px;
  height: 400px;
}

.glow-orb-2 {
  @apply bottom-20 -right-20;
  width: 300px;
  height: 300px;
}

/* 卡片样式 */
.academic-card {
  @apply relative p-6 rounded-2xl bg-white border border-gray-100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.card-glow {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300 rounded-2xl;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(0, 102, 204, 0.08) 0%, 
              transparent 60%);
}

.academic-card:hover .card-glow {
  opacity: 1;
}

/* 时间标签 */
.time-badge {
  @apply inline-block px-3 py-1 rounded-full text-sm font-medium bg-academic-paper text-academic-secondary mb-2;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* 公司名称 */
.company-name {
  @apply text-lg font-semibold text-academic-primary mb-1;
}

/* 项目名称 */
.project-name {
  @apply text-academic-secondary mb-1;
}

/* 角色 */
.role {
  @apply text-academic-accent italic;
}

/* 位置标签 */
.location {
  @apply text-sm text-academic-secondary mb-1;
}

/* 经验项样式 */
.experience-item {
  @apply p-4 rounded-lg bg-academic-paper transition-all duration-300;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.experience-item:hover {
  @apply transform scale-[1.02] shadow-lg;
}

/* 头像样式 */
.avatar-container {
  @apply mx-auto relative;
  width: 180px;
  height: 180px;
}

.avatar-image {
  @apply w-full h-full object-cover rounded-full shadow-lg;
  border: 3px solid rgba(255, 255, 255, 0.8);
}

/* 语言切换器样式 */
.language-switcher {
  @apply flex rounded-xl p-1 bg-white/80 backdrop-blur-sm;
  box-shadow: 
    0 2px 5px rgba(0,0,0,0.1),
    0 0 1px rgba(0,0,0,0.1),
    inset 0 1px 1px rgba(255,255,255,0.8);
}

.lang-btn {
  @apply px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300;
  color: rgba(0,0,0,0.6);
}

.lang-btn:hover {
  color: rgba(0,0,0,0.8);
  background: rgba(0,0,0,0.05);
}

.lang-btn.active {
  @apply text-white;
  background: linear-gradient(180deg, #4F46E5 0%, #7C3AED 100%);
  box-shadow: 
    0 2px 4px rgba(0,0,0,0.15),
    inset 0 1px 1px rgba(255,255,255,0.2);
}
</style> 