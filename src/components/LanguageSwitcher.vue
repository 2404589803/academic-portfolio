<template>
  <div class="language-switcher" role="group" aria-label="Language">
    <button v-for="locale in availableLocales" :key="locale" @click="setLocale(locale)"
      :class="['lang-btn', { active: currentLocale === locale }]">
      {{ locale === 'zh' ? '中' : 'EN' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale, availableLocales } = useI18n()
const currentLocale = computed(() => locale.value)
const setLocale = (newLocale: string) => { locale.value = newLocale }
</script>

<style scoped>
.language-switcher {
  display: flex;
  border: 1px solid var(--line);
  padding: 2px;
}
.lang-btn {
  min-width: 28px;
  padding: 3px 6px;
  border: 0;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  font-size: 11px;
  letter-spacing: .04em;
}
.lang-btn.active {
  background: var(--navy);
  color: var(--paper);
}
</style>

