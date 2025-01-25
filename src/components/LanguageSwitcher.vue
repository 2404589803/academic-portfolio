<template>
  <div class="language-switcher-container">
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style scoped>
.language-switcher-container {
  @apply fixed top-4 right-4 z-50;
}

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