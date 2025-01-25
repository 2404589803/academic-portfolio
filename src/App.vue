<template>
  <div class="app-container">
    <LanguageSwitcher />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.app-container {
  min-height: 100vh;
  position: relative;
}
</style>
