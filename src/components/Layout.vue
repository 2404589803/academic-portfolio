<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="header-inner">
        <router-link to="/" class="brand">
          <span class="brand-mark">肖</span>
          <span>
            <span class="brand-name">{{ t('profile.name') }}</span>
            <span class="brand-caption">{{ t('profile.title') }}</span>
          </span>
        </router-link>
        <nav class="site-nav" :aria-label="t('nav.label')">
          <router-link to="/">{{ t('nav.home') }}</router-link>
          <router-link to="/projects">{{ t('nav.projects') }}</router-link>
        </nav>
        <div class="header-actions">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>

    <main class="page-main">
      <slot />
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <span>{{ t('footer.note') }}</span>
        <span>{{ t('footer.updated') }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

const { t } = useI18n()

watchEffect(() => {
  document.title = `${t('profile.name')}｜${t('profile.title')}`
})
</script>

