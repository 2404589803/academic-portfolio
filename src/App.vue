<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue'
</script>

<style>
:root {
  --primary-color: #646cff;
  --secondary-color: #42b883;
}

.app-container {
  min-height: 100vh;
  position: relative;
}
</style>
