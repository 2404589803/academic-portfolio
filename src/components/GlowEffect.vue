<template>
  <div ref="glowContainer" class="glow-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const glowContainer = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!glowContainer.value) return
  
  const rect = glowContainer.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  glowContainer.value.style.setProperty('--mouse-x', `${x}px`)
  glowContainer.value.style.setProperty('--mouse-y', `${y}px`)
}

onMounted(() => {
  if (glowContainer.value) {
    glowContainer.value.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  if (glowContainer.value) {
    glowContainer.value.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>

<style scoped>
.glow-container {
  position: relative;
  overflow: hidden;
}
</style> 