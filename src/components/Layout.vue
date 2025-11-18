<template>
  <div class="min-h-screen bg-editor-bg flex flex-col font-mono text-editor-fg">
    <!-- Title Bar -->
    <header
      class="fixed top-0 w-full z-50 bg-editor-sidebar border-b border-editor-line h-10 flex items-center justify-between px-4 select-none">
      <div class="flex items-center space-x-4">
        <div class="flex space-x-2 group">
          <div class="w-3 h-3 rounded-full bg-red-500 group-hover:bg-red-600 transition-colors"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500 group-hover:bg-yellow-600 transition-colors"></div>
          <div class="w-3 h-3 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors"></div>
        </div>
        <div class="text-sm text-editor-fg opacity-60 hidden sm:block">academic-portfolio — -bash — 80x24</div>
      </div>

      <div class="flex items-center">
        <LanguageSwitcher />
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 pt-10 pb-8 relative">
      <!-- Line Numbers (Decorative background) -->
      <div
        class="fixed left-0 top-10 bottom-6 w-12 bg-editor-bg border-r border-editor-line hidden lg:flex flex-col items-end pr-2 pt-4 text-editor-line select-none z-0">
        <div v-for="n in 50" :key="n" class="text-xs leading-6 opacity-30">{{ n }}</div>
      </div>

      <div class="lg:pl-12 relative z-10">
        <slot></slot>
      </div>
    </main>

    <!-- Status Bar -->
    <footer
      class="fixed bottom-0 w-full bg-editor-keyword text-editor-bg h-6 flex items-center justify-between px-4 text-xs select-none z-50">
      <div class="flex items-center space-x-4">
        <div class="flex items-center">
          <span class="mr-1">main*</span>
          <span class="opacity-80">git:(master)</span>
        </div>
        <div class="hidden sm:block">0 errors, 0 warnings</div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="hidden sm:block">Ln 1, Col 1</div>
        <div>UTF-8</div>
        <div>Vue</div>
        <div class="flex items-center">
          <span class="mr-1">Prettier</span>
          <span class="w-2 h-2 rounded-full bg-editor-bg"></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
</script>

<style scoped>
/* Ensure content doesn't get hidden behind fixed header/footer */
main {
  min-height: calc(100vh - 4rem);
  /* 100vh - header(2.5rem) - footer(1.5rem) */
}
</style>