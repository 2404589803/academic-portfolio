<template>
  <div class="min-h-screen relative">
    <header class="fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-sm">
      <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
        <LanguageSwitcher class="absolute right-4 top-4" />
      </nav>
    </header>
    
    <main class="container mx-auto px-4 pt-16">
      <slot></slot>
    </main>

    <GlowEffect />
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue'
import GlowEffect from './GlowEffect.vue'
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style> 