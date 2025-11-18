<template>
  <div class="language-switcher">
    <button v-for="locale in availableLocales" :key="locale" @click="setLocale(locale)"
      :class="['lang-btn', { active: currentLocale === locale }]">
      {{ locale === 'zh' ? 'CN' : 'EN' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale, availableLocales } = useI18n()

const currentLocale = computed(() => locale.value)

const setLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>

<style scoped>
.language-switcher {
  @apply flex rounded bg-editor-bg border border-editor-line p-0.5;
}

.lang-btn {
  @apply px-3 py-0.5 text-xs font-mono transition-all duration-200 rounded-sm opacity-60 hover:opacity-100 text-editor-fg;
}

.lang-btn.active {
  @apply bg-editor-keyword text-editor-bg opacity-100 font-bold;
}
</style>