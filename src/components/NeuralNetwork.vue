<template>
  <div ref="container" class="neural-network-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let connections: THREE.Line[] = []
let animationFrameId: number

// 初始化场景
const initScene = () => {
  scene = new THREE.Scene()
  
  // 设置相机
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 30
  
  // 设置渲染器
  renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  
  if (container.value) {
    container.value.appendChild(renderer.domElement)
  }
  
  // 创建神经元粒子
  createNeurons()
  // 创建神经连接
  createConnections()
}

// 创建神经元粒子
const createNeurons = () => {
  const geometry = new THREE.BufferGeometry()
  const particlesCount = 200
  const positions = new Float32Array(particlesCount * 3)
  const colors = new Float32Array(particlesCount * 3)
  
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // 在球形空间中随机分布粒子
    const radius = 15
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    
    positions[i] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i + 2] = radius * Math.cos(phi)
    
    // 设置渐变色
    colors[i] = 0.3 + Math.random() * 0.3     // R: 蓝色基调
    colors[i + 1] = 0.5 + Math.random() * 0.3 // G: 添加一些青色
    colors[i + 2] = 1.0                       // B: 保持蓝色
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  
  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

// 创建神经连接
const createConnections = () => {
  const positions = particles.geometry.attributes.position.array
  const connectionCount = 100
  
  for (let i = 0; i < connectionCount; i++) {
    const index1 = Math.floor(Math.random() * (positions.length / 3)) * 3
    const index2 = Math.floor(Math.random() * (positions.length / 3)) * 3
    
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([
      positions[index1], positions[index1 + 1], positions[index1 + 2],
      positions[index2], positions[index2 + 1], positions[index2 + 2]
    ])
    
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    
    const material = new THREE.LineBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.2
    })
    
    const line = new THREE.Line(geometry, material)
    connections.push(line)
    scene.add(line)
  }
}

// 动画循环
const animate = () => {
  animationFrameId = requestAnimationFrame(animate)
  
  if (particles) {
    particles.rotation.x += 0.001
    particles.rotation.y += 0.002
    
    // 更新连接线的透明度，创建脉冲效果
    connections.forEach((line, index) => {
      const opacity = 0.1 + Math.sin(Date.now() * 0.001 + index * 0.1) * 0.1
      line.material.opacity = opacity
    })
  }
  
  renderer.render(scene, camera)
}

// 处理窗口大小变化
const handleResize = () => {
  if (!container.value) return
  
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

onMounted(() => {
  initScene()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  cancelAnimationFrame(animationFrameId)
  
  // 清理Three.js资源
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.geometry.dispose()
      object.material.dispose()
    }
  })
  renderer.dispose()
})
</script>

<style scoped>
.neural-network-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style> 